import argparse
import re
from pathlib import Path
from PIL import Image
import sys

# python .\bitmap_tool.py to-png ..\dump\lcd\5.31\litteltFS\LOGO\LOGO logo.png -W 64 -H 60 -b little -B msb
# python .\bitmap_tool.py to-hex ..\dump\lcd\5.31\litteltFS\LOGO\LOGO_Decode.png string -b little -B msb

def convert_to_png(input_path, output_path, width, height, byte_order, bit_order):
    # 读取输入数据
    if input_path.suffix == '.hex':
        with open(input_path, 'r') as f:
            hex_str = re.sub(r'\s', '', f.read())
        data = bytes.fromhex(hex_str)
    else:
        with open(input_path, 'rb') as f:
            data = f.read()

    # 验证数据尺寸
    expected_size = width * height // 8
    if len(data) != expected_size:
        print(f"警告：数据尺寸不匹配，应为 {expected_size} 字节，实际 {len(data)} 字节")

    # 创建图像
    img = Image.new('1', (width, height))
    pixels = []

    # 处理每行数据
    bytes_per_line = width // 8
    for y in range(height):
        line_start = y * bytes_per_line
        line_data = data[line_start:line_start+bytes_per_line]
        
        # 字节顺序处理
        if byte_order == 'little':
            line_data = line_data[::-1]

        # 位处理
        for byte in line_data:
            bits = [(byte >> i) & 0x01 for i in (range(7, -1, -1) if bit_order == 'msb' else range(8))]
            pixels.extend(bits)

    # 保存图像
    img.putdata(pixels)
    img.save(output_path)
    print(f"成功生成PNG：{output_path} ({width}x{height})")

def convert_to_hex(input_path, output_path, byte_order, bit_order):
    img = Image.open(input_path).convert('1')
    width, height = img.size
    pixels = list(img.getdata())

    # 生成二进制数据
    bytes_per_line = width // 8
    hex_data = bytearray()

    for y in range(height):
        line_bytes = bytearray(bytes_per_line)
        for x in range(width):
            byte_idx = x // 8
            bit_pos = 7 - (x % 8) if bit_order == 'msb' else (x % 8)
            line_bytes[byte_idx] |= (pixels[y*width + x] & 0x01) << bit_pos
        
        # 字节顺序处理
        if byte_order == 'little':
            line_bytes.reverse()
        
        hex_data.extend(line_bytes)

    # 保存结果
    if output_path.suffix == '.bin':
        with open(output_path, 'wb') as f:
            f.write(hex_data)
    elif output_path.name == 'string':
        for i in range(len(hex_data)):
            if i == len(hex_data) - 1:
                print(int(hex_data[i]), end='')
            else:
                print(int(hex_data[i]), end=',')
        print()
        output_path = ''
    else:
        hex_str = hex_data.hex()
        with open(output_path, 'w') as f:
            for i in range(0, len(hex_str), 32):
                f.write(hex_str[i:i+32] + '\n')
    
    print(f"成功生成HEX：{output_path} ({width}x{height}) 大小：{len(hex_data)}")

def main():
    parser = argparse.ArgumentParser(
        description='单色位图转换工具 (v1.0)',
        formatter_class=argparse.RawTextHelpFormatter
    )
    subparsers = parser.add_subparsers(dest='command', required=True)

    # to-png 子命令
    png_parser = subparsers.add_parser('to-png', help='转换到PNG')
    png_parser.add_argument('input', type=Path, help='输入文件 (.bin/.hex)')
    png_parser.add_argument('output', type=Path, help='输出文件 (.png)')
    png_parser.add_argument('-W', '--width', type=int, required=True, help='图像宽度')
    png_parser.add_argument('-H', '--height', type=int, required=True, help='图像高度')
    png_parser.add_argument('-b', '--byte-order', choices=['little', 'big'], default='little',
                          help='字节顺序 (默认: little)')
    png_parser.add_argument('-B', '--bit-order', choices=['msb', 'lsb'], default='msb',
                          help='位顺序 (默认: msb)')

    # to-hex 子命令
    hex_parser = subparsers.add_parser('to-hex', help='转换到HEX')
    hex_parser.add_argument('input', type=Path, help='输入文件 (.png)')
    hex_parser.add_argument('output', type=Path, help='输出文件 (.bin/.hex/string)')
    hex_parser.add_argument('-b', '--byte-order', choices=['little', 'big'], default='little',
                         help='字节顺序 (默认: little)')
    hex_parser.add_argument('-B', '--bit-order', choices=['msb', 'lsb'], default='msb',
                         help='位顺序 (默认: msb)')

    args = parser.parse_args()

    try:
        if args.command == 'to-png':
            convert_to_png(
                args.input, args.output,
                args.width, args.height,
                args.byte_order, args.bit_order
            )
        elif args.command == 'to-hex':
            convert_to_hex(
                args.input, args.output,
                args.byte_order, args.bit_order
            )
    except Exception as e:
        print(f"错误：{str(e)}", file=sys.stderr)
        sys.exit(1)

if __name__ == '__main__':
    main()