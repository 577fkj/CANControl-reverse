from enum import Enum
from typing import Union


class Channel(Enum):
    U = "U" # 用户认证超级密码
    G = "G" # 高级设置超级密码

    P = "P" # Ble 设置协议密码

    S = "S"   # 旧激活码
    S1 = "S1" # 激活码
    S2 = "S2" # ?


CODE_CHARS = "0123456789abcdef"
KEYS = {
    Channel.U: (0x12f5bd2,0x0),
    Channel.S: (0x12a403ac3,0x0),
    Channel.P: (0x263, 0x0),
    Channel.G: (0x28f, 0x0),
    Channel.S1: (0x2ac, 0x0),
    Channel.S2: (681.1638, 0x0),
}


def mac_to_int(mac: Union[str, int]) -> int:
    """Convert MAC address string or int to 64-bit integer."""
    if isinstance(mac, int):
        return mac
    if isinstance(mac, str):
        mac = mac.lower()
        if mac.startswith("0x"):
            return int(mac, 16)
        parts = mac.split(":")
        if len(parts) != 6:
            raise ValueError("Invalid MAC format")
        mac_bytes = [int(b, 16) for b in reversed(parts)]
        mac_val = 0
        for i, b in enumerate(mac_bytes):
            mac_val |= b << (8 * (5 - i))
        return mac_val
    raise TypeError("MAC must be str or int")


def convert_to_base(seed: int, base: int) -> str:
    """Convert seed to reversed base-N string using CODE_CHARS."""
    if base > len(CODE_CHARS):
        raise ValueError("Base exceeds available CODE_CHARS")
    if seed == 0:
        return CODE_CHARS[0]
    digits = []
    while seed > 0:
        digits.append(CODE_CHARS[seed % base])
        seed //= base
    return ''.join(digits[::-1])


def get_activation_code(mac: int, key: int) -> str:
    return convert_to_base(mac + key, 16)


def get_activation_code2(mac: int, key0: Union[int, float], key1: int) -> str:
    seed = mac + key1
    part1 = convert_to_base(seed, 10)

    if isinstance(key0, float):
        part1 += f'{key0:.4f}'
        key0 = int(key0)

    mul = sum(ord(c) for c in part1)
    seed = (seed // key0) * mul
    code = convert_to_base(seed, 16)
    return code[-6:]


def generate_activation_code(mac_input: Union[str, int], channel: Union[str, Channel]) -> str:
    """generate activation code for a given MAC and channel."""
    mac = mac_to_int(mac_input)
    if mac == 0:
        raise ValueError("MAC address cannot be 0")

    if isinstance(channel, str):
        channel = Channel[channel.upper()]

    key0, key1 = KEYS[channel]

    if channel == Channel.U:
        code = get_activation_code(mac, key0)
        return code[4:8]

    elif channel == Channel.S:
        code = get_activation_code(mac, key0)
        return code[2:8]

    elif channel in (Channel.S1, Channel.S2, Channel.P, Channel.G):
        return get_activation_code2(mac, key0, key1)

    raise ValueError(f"Unsupported channel: {channel}")

if __name__ == "__main__":
    # Example usage
    mac = "5c:6a:4b:84:ff:1d"
    channel = Channel.S1
    activation_code = generate_activation_code(mac, channel)
    print(f"Activation code for {mac} on {channel.value}: {activation_code}")
    mac = "0x1DFF844B6A5C"
    activation_code = generate_activation_code(mac, channel)
    print(f"Activation code for {mac} on {channel.value}: {activation_code}")
    mac = 0x1DFF844B6A5C
    activation_code = generate_activation_code(mac, channel)
    print(f"Activation code for {mac} on {channel.value}: {activation_code}")
