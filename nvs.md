# NVS

## SYS

System settings

| key | type | default_value | description |
|-----|------|---------------|-------------|
| 7a | string | Cxjdwx | Active key |
| 7A | string | Cxjdwx | Active key 2 |
| SPWD | string | Cxjdwx | Active key 3 |
| 48 | string | Cxjdwx | Active time |
| 49 | string | http://bin.bemfa.com/b/3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=CANControl.bin | Update URL |
| 50 | string | 0 | Last version? |
| 53 | i8 | 0 | CAN Protocol |
| 54 | i8 | 2 | Screen protocol |
| 55 | i8 | 0 | Enable wifi |
| 56 | i8 | 0 | Enable USART input |
| f1 | i8 | 31 | Support CAN protocol |
| f2 | i8 | 0 | EV Protocol type |
| CAN | string | 1 | Old version of the key? |

## WIFI

WIFI Settings

| key | type | default_value | description |
|-----|------|---------------|-------------|
| WFID | string | config | WIFI SSID |
| WFPD | string | 88888888 | WIFI Password |

## User

User Settings

| key | type | default_value | description |
|-----|------|---------------|-------------|
| 20 | u64 | ? | ? |
| 21 | u64 | ? | ? |
| 22 | u64 | ? | ? |
| 23 | u64 | ? | ? |
| 24 | u64 | ? | ? |
| 25 | u64 | ? | ? |
| 26 | u64 | ? | ? |
| 27 | u64 | ? | ? |
| 30 | u64 | ? | ? |
| 31 | u64 | ? | ? |
| 32 | u64 | ? | ? |
| 33 | u64 | ? | ? |
| 34 | u64 | ? | ? |
| 35 | u64 | ? | ? |
| 36 | u64 | ? | ? |
| 37 | u64 | ? | ? |
| 38 | u64 | ? | ? |
| 39 | u64 | ? | ? |
| 41 | base64(float) | 0.0 | All work time |
| 42 | base64(float) | 0.0 | All ampere hour |
| 43 | base64(float) | 0.0 | All watt hout |
| 44 | base64(float) | 0.0 | Set current offset |
| 45 | base64(float) | 0.0 | Current display offset |
| 46 | base64(float) | 0.0 | Set voltage offset |
| 47 | base64(float) | 0.0 | Voltage display offset |
| 4a | base64(float) | 0.0 | Temp limit join |
| 4b | base64(float) | 0.0 | Temp limit exit |
| 4c | base64(float) | 0.0 | Temp limit power |
| 4e | base64(float) | 0.0 | Max power |
| 4d | base64(float) | 0.0 | Power limit |
| 4f | u64 | ? | ? |
| 50 | u64 | ? | ? |
| 51 | u64 | ? | ? |
| 52 | u64 | ? | ? |
| 57 | base64(float) | 0.0 | ? |
| 58 | base64(float) | 0.0 | ? |
| 59 | base64(float) | 0.0 | ? |
| 61 |  i8 | 0 | ? |
| 62 |  i8 | 0 | Use NTC |
| 63 |  i8 | 8 | ? |
| 64 |  i8 | 10 | ? |
| 65 |  i8 | 50 | ? |
| 66 |  i8 | 0 | ? |
| 67 |  i8 | 0 | ? |
| 68 |  i8 | 100 | Shutdown backlight |
| 69 |  i8 | 0 | Startup backlight |
| 6a |  i8 | 50 | ? |
| 6b |  i8 | 10 | ? |
| 6c |  i8 | 1 | ? |
| 6d |  i8 | 60 | ? |
| 6e |  i8 | 3 or 1 | ? |
| 6f |  i8 | 1 | ? |
| 70 |  i8 | 0 | ? |
| 71 |  i8 | 1 | ? |
| 72 |  i8 | 1 | ? |
| 73 |  i8 | 0 | Huawei current point |
| 73 | string | 0 | Ble name |
| 74 | string | 0000 | Ble password |
| 75 | string | 8888 | Advanced setting password |
| 76 | base64(float) | 0.0 | Voltage min |
| 77 | base64(float) | 0.0 | Voltage max |
| 78 | base64(float) | 0.0 | Current min |
| 79 | base64(float) | 0.0 | Current max |
| c0 |  i8 | 0 | ? |
| c1 |  i8 | 3 | ? |
| c2 |  i8 | 51 | ? |
| c3 |  i8 | 15 | ? |
| c4 |  i8 | 68 | ? |
| c5 |  i8 | 0xffffffff | ? |
| c6 |  i8 | 0 | Power device id |
| c7 |  i8 | 15 | ? |
| c8 |  i8 | 0 | ? |
| c9 |  i8 | 0 | Debug1 |
| ca |  i8 | 0 | Debug2 |
| cb |  i8 | 0 | Debug3 |
| cc |  i8 | 1 | ? |
| cd |  i8 | 5 | Ready voltage range |
| ce |  i8 | 1 | ? |
| cf |  i8 | 0 | ? |
| d1 | string | 0000 | ? |
| d2 | string | 欢迎使用 | ? |
| d3 | string | LGXC76C43M0044948 | VIN |
| f0 | base64(float) | 0.5 | ? |
| f1 | base64(float) | 1.0 | ? |
| f2 | base64(float) | 1.0 | ? |
| f3 | base64(float) | 0.05 | ? |
| f4 | base64(float) | 0.05 | ? |
| f5 | base64(float) | 10.0 | ? |
| f6 | base64(float) | 0.0 | ? |
| f7 | base64(float) | 85.0 | ? |
| f8 | base64(float) | 1.0 | ? |
| f9 | base64(float) | 100.0 | Current max (Only EV) |
| fa | base64(float) | 420.0 | Voltage max (Only EV) |

## Raw

```
Namespace SYS
  7a              : STR   45c176
  48              : STR   2024-10-01
  53              : I8    32
  f1              : I8    127
  50              : STR   5.42
Namespace User
  fb              : BLOB  CD CC CC 3D  (float:0.100000)
  f3              : BLOB  CD CC 4C 3E  (float:0.200000)
  47              : BLOB  9A 99 99 3E  (float:0.300000)
  46              : BLOB  CD CC CC 3E  (float:0.400000)
  f2              : BLOB  00 00 00 3F  (float:0.500000)
  f1              : BLOB  9A 99 19 3F  (float:0.600000)
  76              : BLOB  00 00 80 3F  (float:1.000000)
  77              : BLOB  00 00 C8 42  (float:100.000000)
  f4              : BLOB  33 33 33 3F  (float:0.700000)
  48              : BLOB  CD CC 4C 3F  (float:0.800000)
  45              : BLOB  66 66 66 3F  (float:0.900000)
  78              : BLOB  00 00 00 40  (float:2.000000)
  79              : BLOB  00 00 C6 42  (float:99.000000)
  4e              : BLOB  00 00 7A 45  (float:4000.000000)
  4d              : BLOB  00 00 7A 45  (float:4000.000000)
  4a              : BLOB  00 00 22 42  (float:40.500000)
  4c              : BLOB  00 00 FA 43  (float:500.000000)
  4b              : BLOB  00 00 2A 42  (float:42.500000)
  f7              : BLOB  CD CC 5C 42  (float:55.200001)
  c5              : I8    -2
  65              : I8    -57
  64              : I8    23
  63              : I8    19
  62              : I8    1
  c0              : I8    1
  e1              : I8    0
  67              : I8    1
  66              : I8    1
  72              : I8    1
  f5              : BLOB  0A D7 1F 41  (float:9.990000)
  70              : I8    0
  74              : STR   9999
  75              : STR   7777
  6e              : I8    1
  69              : I8    -3
  68              : I8    101
  6d              : I8    55
  6a              : I8    92
  6b              : I8    6
  6c              : I8    1
  4f              : U64   2233382994480
  61              : I8    14
  58              : BLOB  9A 99 A9 40  (float:5.300000)
  57              : BLOB  66 66 B6 40  (float:5.700000)
  59              : BLOB  00 00 3C 42  (float:47.000000)
  f0              : BLOB  CD CC 0C 3F  (float:0.550000)
  50              : U64   2705829397120
  51              : U64   3135326126820
  71              : I8    4
  52              : U64   3564822856519
Namespace nimble_bond
Namespace WIFI
```

### base64 float decode

```python
import base64
import struct

b64_str = "AABMQg=="
byte_data = base64.b64decode(b64_str)
float_value = struct.unpack('<f', byte_data)[0]

print(float_value)
```
