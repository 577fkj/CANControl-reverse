import serial
import subprocess
import re

def get_active_code(chip_id):
    code = chip_id[2:]
    mac = [code[i:i + 2] for i in range(0, len(code), 2)]
    mac = [mac[i] for i in range(len(mac) - 1, -1, -1)]
    mac = ':'.join(mac)
    print(mac)
    run = subprocess.check_output(['activation_code.exe', mac, 'S1'], shell=True)
    return re.findall(r'\[S1\] [0-9A-F:]+: ([0-9A-Fa-f]+)', run.decode('utf-8'))[0]


ser = serial.Serial(input('COM?: '), 115200)
if ser.is_open:  # 判断串口是否成功打开
    print("打开串口成功。")
    print(ser.name)  # 输出串口号
else:
    print("打开串口失败。")


def read_data():
    line = b''
    while True:
        if ser.in_waiting:
            line += ser.read(ser.in_waiting)
            if line.endswith(b'\r\n'):
                data = line.decode("utf-8", "ignore")
                print(data, end="")
                line = b''

                if data.startswith("ID:"):
                    chip_id = data.split(":")[1].strip()
                    active_code = get_active_code(chip_id)
                    ser.write(f"Active={active_code}\n".encode())
                    print(f"Chip ID: {chip_id}, Active Code: {active_code}")


read_data()
