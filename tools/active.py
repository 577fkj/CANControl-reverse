import serial
import subprocess
import re
from enum import IntFlag

class ProtocolType(IntFlag):
    PROTOCOL_HUAWEI     = 0x1
    PROTOCOL_INCREASE   = 0x2
    PROTOCOL_ZTE3000    = 0x4
    PROTOCOL_INFY       = 0x8
    PROTOCOL_EV_STATION = 0xc
    PROTOCOL_EV_CHARGER = 0xe
    PROTOCOL_EPS6020    = 0x10
    PROTOCOL_ZTE4875    = 0x20
    PROTOCOL_SINEXCEL   = 0x40

    @staticmethod
    def get_all_support():
        return (ProtocolType.PROTOCOL_HUAWEI | 
                ProtocolType.PROTOCOL_INCREASE | 
                ProtocolType.PROTOCOL_ZTE3000 | 
                ProtocolType.PROTOCOL_INFY | 
                ProtocolType.PROTOCOL_EV_STATION | 
                ProtocolType.PROTOCOL_EV_CHARGER | 
                ProtocolType.PROTOCOL_EPS6020 | 
                ProtocolType.PROTOCOL_ZTE4875 | 
                ProtocolType.PROTOCOL_SINEXCEL)

    @staticmethod
    def decode_protocol(protocol):
        if protocol == ProtocolType.PROTOCOL_HUAWEI:
            return "HUAWEI"
        elif protocol == ProtocolType.PROTOCOL_INCREASE:
            return "INCREASE"
        elif protocol == ProtocolType.PROTOCOL_ZTE3000:
            return "ZTE3000"
        elif protocol == ProtocolType.PROTOCOL_INFY:
            return "INFY"
        elif protocol == ProtocolType.PROTOCOL_EV_STATION:
            return "EV_STATION"
        elif protocol == ProtocolType.PROTOCOL_EV_CHARGER:
            return "EV_CHARGER"
        elif protocol == ProtocolType.PROTOCOL_EPS6020:
            return "EPS6020"
        elif protocol == ProtocolType.PROTOCOL_ZTE4875:
            return "ZTE4875"
        elif protocol == ProtocolType.PROTOCOL_SINEXCEL:
            return "SINEXCEL"
        else:
            return "UNKNOWN"
    
    def str():
        keys = [
            key for key, val in ProtocolType.__dict__.items()
            if not key.startswith('_') and not callable(val)
        ]
        max_len = max(len(k) for k in keys)
        lines = [
            f"{k.ljust(max_len)} = {getattr(ProtocolType, k)}"
            for k in keys
        ]
        return "\n".join(lines)

def get_active_code(chip_id):
    mac = [chip_id[i:i + 2] for i in range(0, len(chip_id), 2)]
    mac = [mac[i] for i in range(len(mac) - 1, -1, -1)]
    mac = ':'.join(mac)
    print(mac)
    run = subprocess.check_output(['activation_code.exe', mac, 'S1'], shell=True)
    return re.findall(r'\[S1\] [0-9A-F:]+: ([0-9A-Fa-f]+)', run.decode('utf-8'))[0]


print(ProtocolType.str())
print("Please enter the protocol type:")
protocols = input('Protocols: ')

print("Please enter the COM port:")
ser = serial.Serial(input('COM?: '), 115200)
if ser.is_open:  # 判断串口是否成功打开
    print("打开串口成功。")
    print(ser.name)  # 输出串口号
else:
    print("打开串口失败。")

print("Please reset the device...")

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
                    chip_id = data.split(":")[1].strip()[2:]
                    if len(chip_id) != 12:
                        chip_id = '0' * (12 - len(chip_id)) + chip_id
                    active_code = get_active_code(chip_id)
                    # SetMSG=11,22,33,44,55
                    # SYS
                    # f2,i8,55
                    # 53,i8,22
                    # 54,i8,33
                    # User
                    # 6e,i8,44
                    if protocols != '':
                        ser.write(f"SetMSG=0,{protocols},0,0,0\n".encode())
                    ser.write(f"Active={active_code}\n".encode())
                    print(f"Chip ID: {chip_id}, Active Code: {active_code}")


read_data()
