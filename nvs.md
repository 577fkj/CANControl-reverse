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
| 53 | u8 | 0 | CAN Protocol |
| 54 | u8 | 2 | Screen protocol |
| 55 | u8 | 0 | Enable wifi |
| 56 | u8 | 0 | Enable USART input |
| f1 | u8 | 31 | Support CAN protocol |
| f2 | u8 | 0 | EV Protocol type |
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
| 41 | ?(float) | 0.0 | All work time |
| 42 | ?(float) | 0.0 | All ampere hour |
| 43 | ?(float) | 0.0 | All watt hout |
| 44 | ?(float) | 0.0 | Set current offset |
| 45 | ?(float) | 0.0 | Current display offset |
| 46 | ?(float) | 0.0 | Set voltage offset |
| 47 | ?(float) | 0.0 | Voltage display offset |
| 4a | ?(float) | 0.0 | Temp limit join |
| 4b | ?(float) | 0.0 | Temp limit exit |
| 4c | ?(float) | 0.0 | Temp limit power |
| 4e | ?(float) | 0.0 | Max power |
| 4d | ?(float) | 0.0 | Power limit |
| 4f | u64 | ? | ? |
| 50 | u64 | ? | ? |
| 51 | u64 | ? | ? |
| 52 | u64 | ? | ? |
| 57 | ?(float) | 0.0 | ? |
| 58 | ?(float) | 0.0 | ? |
| 59 | ?(float) | 0.0 | ? |
| 61 | u8 | 0 | ? |
| 62 | u8 | 0 | Use NTC |
| 63 | u8 | 8 | ? |
| 64 | u8 | 10 | ? |
| 65 | u8 | 50 | ? |
| 66 | u8 | 0 | ? |
| 67 | u8 | 0 | ? |
| 68 | u8 | 100 | Shutdown backlight |
| 69 | u8 | 0 | Startup backlight |
| 6a | u8 | 50 | ? |
| 6b | u8 | 10 | ? |
| 6c | u8 | 1 | ? |
| 6d | u8 | 60 | ? |
| 6e | u8 | 3 or 1 | ? |
| 6f | u8 | 1 | ? |
| 70 | u8 | 0 | ? |
| 71 | u8 | 1 | ? |
| 72 | u8 | 1 | ? |
| 73 | u8 | 0 | Huawei current point |
| 73 | string | 0 | Ble name |
| 74 | string | 0000 | Ble password |
| 75 | string | 8888 | Advanced setting password |
| 76 | ?(float) | 0.0 | Voltage min |
| 77 | ?(float) | 0.0 | Voltage max |
| 78 | ?(float) | 0.0 | Current min |
| 79 | ?(float) | 0.0 | Current max |
| c0 | u8 | 0 | ? |
| c1 | u8 | 3 | ? |
| c2 | u8 | 51 | ? |
| c3 | u8 | 15 | ? |
| c4 | u8 | 68 | ? |
| c5 | u8 | 0xffffffff | ? |
| c6 | u8 | 0 | Power device id |
| c7 | u8 | 15 | ? |
| c8 | u8 | 0 | ? |
| c9 | u8 | 0 | Debug1 |
| ca | u8 | 0 | Debug2 |
| cb | u8 | 0 | Debug3 |
| cc | u8 | 1 | ? |
| cd | u8 | 5 | Ready voltage range |
| ce | u8 | 1 | ? |
| cf | u8 | 0 | ? |
| d1 | string | 0000 | ? |
| d2 | string | 欢迎使用 | ? |
| d3 | string | LGXC76C43M0044948 | VIN |
| f0 | ?(float) | 0.5 | ? |
| f1 | ?(float) | 1.0 | ? |
| f2 | ?(float) | 1.0 | ? |
| f3 | ?(float) | 0.05 | ? |
| f4 | ?(float) | 0.05 | ? |
| f5 | ?(float) | 10.0 | ? |
| f6 | ?(float) | 0.0 | ? |
| f7 | ?(float) | 85.0 | ? |
| f8 | ?(float) | 1.0 | ? |
| f9 | ?(float) | 100.0 | Current max (Only EV) |
| fa | ?(float) | 420.0 | Voltage max (Only EV) |
