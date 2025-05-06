#@author 577FKJ
#@category ESP32
#@menupath
#@toolbar

from ghidra.program.model.mem import MemoryConflictException, MemoryAccessException
from ghidra.program.model.mem import MemoryBlockType
from ghidra.program.model.address import AddressOverflowException
from ghidra.program.flatapi import FlatProgramAPI

api = FlatProgramAPI(currentProgram)
memory = currentProgram.getMemory()

segments = [
    {"name": "IRAM",       "start": 0x40080000, "size": 0x20000,  "comment": "AutoCreateMemory ESP32 IRAM"},
    {"name": "DRAM",       "start": 0x3FFAE000, "size": 0x52000,  "comment": "AutoCreateMemory ESP32 DRAM"},
    {"name": "IROM",       "start": 0x400C2000, "size": 0xBDE000, "comment": "AutoCreateMemory ESP32 IROM"},
    {"name": "DROM",       "start": 0x3F400000, "size": 0x400000, "comment": "AutoCreateMemory ESP32 DROM"},
    {"name": "RTC_FAST",   "start": 0x60000000, "size": 0x2000,   "comment": "AutoCreateMemory ESP32 RTC FAST RAM"},
    {"name": "RTC_SLOW",   "start": 0x50000000, "size": 0x2000,   "comment": "AutoCreateMemory ESP32 RTC SLOW RAM"}
]

existing = []
for block in memory.getBlocks():
    existing.append((block.getStart().getOffset(), block.getEnd().getOffset()))
existing.sort()

def split_region(start, size):
    end = start + size
    result = []
    cursor = start
    for ex_start, ex_end in existing:
        if ex_end < cursor:
            continue
        if ex_start >= end:
            break
        if cursor < ex_start:
            result.append((cursor, min(end, ex_start)))
        cursor = max(cursor, ex_end + 1)
    if cursor < end:
        result.append((cursor, end))
    return result

def create_segment(name, start, size, comment):
    subregions = split_region(start, size)
    count = 0
    for sub_start, sub_end in subregions:
        sub_size = sub_end - sub_start
        if sub_size <= 0:
            continue
        sub_name = name if count == 0 else name + "_" + str(count)
        count += 1
        try:
            addr = api.toAddr(sub_start)
            block = memory.createInitializedBlock(sub_name, addr, sub_size, 0x00, monitor, False)
            block.setComment(comment)
            block.setPermissions(True, True, False)
            print("[+] Created block: " + sub_name + " at 0x%X (size 0x%X)" % (sub_start, sub_size))
        except Exception as e:
            print("[!] Failed to create " + sub_name + ": " + str(e))

for seg in segments:
    print("[*] Processing " + seg["name"] + " ...")
    create_segment(seg["name"], seg["start"], seg["size"], seg["comment"])
