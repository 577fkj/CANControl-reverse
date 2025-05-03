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

```csv
# NVS csv file
key,type,encoding,value
SYS,namespace,,
50,data,string,5.42
53,data,i8,32
f1,data,i8,63
54,data,i8,0
f2,data,i8,0
7a,data,string,45c176
48,data,string,2025-5-4
User,namespace,,
6e,data,i8,0
4f,data,u64,21474836481500
4f,data,u64,21474836481000
61,data,i8,10
61,data,i8,15
58,data,base64,AABMQg==
57,data,base64,AAAwQQ==
59,data,base64,AABQQQ==
f0,data,base64,zczMPQ==
71,data,i8,2
50,data,u64,24481313588700
75,data,string,7777
47,data,base64,YxCAPw==
47,data,base64,4C2APw==
f2,data,base64,xCCAPw==
76,data,base64,AAAgQg==
77,data,base64,AADGQg==
f4,data,base64,MzMzPw==
48,data,base64,zcxMPg==
4e,data,base64,AAB6RQ==
4d,file,binary,blob_data\4d.bin
79,data,base64,AADIQg==
4a,data,base64,AAA0Qg==
4c,data,base64,AAAWRA==
4b,data,base64,AAC0Qg==
f7,data,base64,AADwQg==
c5,data,i8,-2
65,data,i8,112
64,data,i8,9
63,data,i8,6
62,data,i8,1
e1,data,i8,1
66,data,i8,1
67,data,i8,0
72,data,i8,0
70,data,i8,1
70,data,i8,0
70,data,i8,1
6e,data,i8,1
69,data,i8,-3
68,data,i8,104
6a,data,i8,55
6b,data,i8,3
6c,data,i8,0
phy,namespace,,
cal_data,file,binary,blob_data\cal_data.bin
cal_mac,data,base64,5GW4dRpc
cal_version,data,u32,4670
nimble_bond,namespace,,
WIFI,namespace,,
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
