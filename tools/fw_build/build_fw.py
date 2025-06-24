import struct
import collections
import binascii
from nvs import nvs_open, write_entry, check_size, Page, VERSION1_PRINT, VERSION2_PRINT
import nvs_decode
from enum import IntEnum
import os
import shutil

if os.path.exists("build"):
    shutil.rmtree("build")

os.makedirs("build")

def generate_nvs_data(output_file, partition_size, keys_values):
    """
    生成NVS分区数据
    
    :param output_file: 输出的二进制文件路径
    :param partition_size: 分区大小(字节)，必须是4096的倍数
    :param keys_values: 包含键值对的列表，每项为(key, type, encoding, value)
    """

    version = Page.VERSION2
    input_size, read_only = check_size(str(partition_size))
    
    with open(output_file, 'wb') as f_out,\
        nvs_open(f_out, input_size, version=version, read_only=read_only) as nvs_instance:

        if nvs_instance.version == Page.VERSION1:
            version_set = VERSION1_PRINT
        else:
            version_set = VERSION2_PRINT
        print('Creating NVS binary with version:', version_set)

        for key, datatype, encoding, value in keys_values:
            max_key_len = 15
            if len(key) > max_key_len:
                raise RuntimeError('Length of key `%s` should be <= 15 characters.' % key)
            write_entry(nvs_instance, key, datatype, encoding, value)

    print(f"NVS generated successfully at {output_file}")

def create_otadata(spi_flash_sec_size=0x2000):
    otadata = bytearray(spi_flash_sec_size)

    ota_seq = 1
    ota_seq_bytes = struct.pack('I', ota_seq)

    ota_seq_crc = binascii.crc32(ota_seq_bytes, 0xFFFFFFFF) % (1 << 32)
    ota_seq_crc_bytes = struct.pack('I', ota_seq_crc)

    otadata[0:4] = ota_seq_bytes
    otadata[28:32] = ota_seq_crc_bytes

    return otadata

def get_otadata_info(otadata, spi_flash_sec_size=0x2000):
    info = []

    otadata_info = collections.namedtuple('otadata_info', 'seq crc')

    for i in range(2):
        start = i * (spi_flash_sec_size >> 1)

        seq = bytearray(otadata[start:start + 4])
        crc = bytearray(otadata[start + 28:start + 32])

        seq = struct.unpack('I', seq)
        crc = struct.unpack('I', crc)
        info.append(otadata_info(seq[0], crc[0]))

    return info

def dump_nvs(nvs_path):
    with open(nvs_path, 'rb') as f:
        nvs_data = f.read()
    
    nvs_decode.blob_limit = 0
    nvs_decode.special_handling = True
    nvs_decode.verify_nvs_size(nvs_data)
    
    nvs_decode.parse_nvs_binary(nvs_data)
    nvs_decode.dump_nvs_data()

def build_fw(bootloader_path, partition_table_path, app_path, spiffs_path, nvs_path=None, output_path="flash_image.bin"):
    # Read bootloader, partition table, NVS, app, and spiffs files
    with open(bootloader_path, 'rb') as f:
        bootloader = f.read()
    with open(partition_table_path, 'rb') as f:
        partition_table = f.read()
    with open(app_path, 'rb') as f:
        app = f.read()
    
    if spiffs_path:
        with open(spiffs_path, 'rb') as f:
            spiffs = f.read()
    else:
        spiffs = bytearray(0x70000)
        for i in range(len(spiffs)):
            spiffs[i] = 0xff

    if nvs_path:
        with open(nvs_path, 'rb') as f:
            nvs = f.read()
    else:
        nvs = bytearray(0x5000)
        for i in range(len(nvs)):
            nvs[i] = 0xff

    # Check if the sizes of the files are correct
    if len(bootloader) > 0x7000:
        raise ValueError(f"Bootloader size is {len(bootloader)}, expected 0x7000")
    if len(partition_table) > 0x1000:
        raise ValueError(f"Partition table size is {len(partition_table)}, expected 0x1000")
    if len(nvs) > 0x5000:
        raise ValueError(f"NVS size is {len(nvs)}, expected 0x5000")
    if len(app) > 0x1c0000:
        raise ValueError(f"Application size is {len(app)}, expected 0x1c0000")
    if len(spiffs) > 0x70000:
        raise ValueError(f"SPIFFS size is {len(spiffs)}, expected 0x70000")
    
    otadata = create_otadata()
    ota_info = get_otadata_info(otadata)
    for i, info in enumerate(ota_info):
        print(f"OTA {i}: seq={info.seq}, crc={info.crc}")
    
    flash = bytearray(0x400000)
    for i in range(len(flash)):
        flash[i] = 0xff

    
    """
    0x000000 - 0x001000: Empty space (0x1000 bytes)
    0x001000 - 0x008000: Bootloader (0x7000 bytes)
    0x008000 - 0x009000: Partition table (0x1000 bytes)
    0x009000 - 0x00e000: NVS partition (0x5000 bytes)
    0x00e000 - 0x010000: OTA data (0x2000 bytes)
    0x010000 - 0x1d0000: Application 0 (app0) (0x1c0000 bytes)
    0x1d0000 - 0x390000: Application 1 (app1) (0x1c0000 bytes)
    0x390000 - 0x400000: spiffs partition (0x70000 bytes)
    """

    # Write bootloader to flash
    for i in range(len(bootloader)):
        flash[0x001000 + i] = bootloader[i]

    # Write partition table to flash
    for i in range(len(partition_table)):
        flash[0x008000 + i] = partition_table[i]
    
    # Write NVS to flash
    for i in range(len(nvs)):
        flash[0x009000 + i] = nvs[i]
    
    # Write OTA data to flash
    for i in range(len(otadata)):
        flash[0x00e000 + i] = otadata[i]
    
    # Write app0 to flash
    for i in range(len(app)):
        flash[0x010000 + i] = app[i]

    # Write spiffs to flash
    for i in range(len(spiffs)):
        flash[0x390000 + i] = spiffs[i]

    # Save the flash image to a file
    with open(output_path, 'wb') as f:
        f.write(flash)
    print("Flash image created successfully!")

class ProtocolType(IntEnum):
    PROTOCOL_HUAWEI     = 0x1
    PROTOCOL_INCREASE   = 0x2
    PROTOCOL_ZTE3000    = 0x4
    PROTOCOL_INFY       = 0x8
    PROTOCOL_EV_STATION = 0xC
    PROTOCOL_ZEEHO      = 0xD
    PROTOCOL_EV_CHARGER = 0xE
    PROTOCOL_EPS6020    = 0x10
    PROTOCOL_ZTE4875    = 0x20
    PROTOCOL_SER10010K  = 0x40
    PROTOCOL_BH10M100   = 0x41
    PROTOCOL_MC1503N5R  = 0x42
    PROTOCOL_R24_2200   = 0x43

    @staticmethod
    def get_all_support():
        flags = 0
        for protocol in ProtocolType:
            flags |= protocol
        return flags

    @staticmethod
    def decode_protocol(protocol):
        protocol_map = { p.value: p.name.split('_', 1)[1].lower() for p in ProtocolType }
        return protocol_map.get(protocol.value, "unknown")
    
    @staticmethod
    def decode_protocols(protocols):
        decoded_protocols = []
        for protocol in ProtocolType:
            if protocol & protocols:
                decoded_protocols.append(ProtocolType.decode_protocol(protocol))
        return decoded_protocols

# Active time < 2025-08-31 14:28:25
nvs_data = [
    # key,type,encoding,value
    ("SYS", "namespace", "u8", 0),
    ("SPWD", "data", "string", "1b9ff8"), # Activation code
    ("48", "data", "string", "2024-10-01"), # Activation date
    ("53", "data", "i8", ProtocolType.PROTOCOL_ZTE4875), # Current Protocol
    ("f1", "data", "i8", ProtocolType.get_all_support()), # Support Protocols
    ("56", "data", "i8", 1), # Enable uart
]

generate_nvs_data("build/nvs.bin", 0x4000, nvs_data)

dump_nvs("build/nvs.bin")

build_fw(
    bootloader_path="files/bootloader.bin",
    partition_table_path="files/partition_table.bin",
    nvs_path="build/nvs.bin",
    app_path="../../fw/Test0/Test0_5.24_ef6fc2ac5fcf51ec3e1717d0d8804d0c.bin",
    spiffs_path="files/spiffs.bin",
    output_path="build/flash_image.bin"
)