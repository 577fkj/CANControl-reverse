import os
import struct
import collections
import zlib
import binascii


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

def build_fw(bootloader_path, partition_table_path, nvs_path, app_path, spiffs_path):
    # Read bootloader, partition table, NVS, app, and spiffs files
    with open(bootloader_path, 'rb') as f:
        bootloader = f.read()
    with open(partition_table_path, 'rb') as f:
        partition_table = f.read()
    with open(app_path, 'rb') as f:
        app = f.read()
    with open(spiffs_path, 'rb') as f:
        spiffs = f.read()

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
    with open("flash_image.bin", 'wb') as f:
        f.write(flash)
    print("Flash image created successfully!")

build_fw(
    bootloader_path="bootloader.bin",
    partition_table_path="partition_table.bin",
    nvs_path=None,
    app_path="app0.bin",
    spiffs_path="spiffs.bin"
)