# CANControl Reverse Engineering

## Image

### PCB Image

#### Control board (1.0mm)

| TOP                   | BOTTOM                   |
| --------------------- | ------------------------ |
| ![](images/top.jpg)   | ![](images/bottom.jpg)   |
| ![](images/top_1.png) | ![](images/bottom_1.png) |

- Screw specification M3 \* 2

#### Fan board (1.6mm)

| TOP                     | BOTTOM                     |
| ----------------------- | -------------------------- |
| ![](images/fan_top.jpg) | ![](images/fan_bottom.jpg) |

### Test

![](images/test.jpg)

## Support protocol

### Huawei R48xx protocol

| Device        | Support |
| ------------- | ------- |
| Huawei R48100 | ✅      |
| Huawei R4875  | ✅      |
| Huawei R4850  | ✅      |
| Huawei R4830  | ✅      |
| Huawei R4815  | ✅      |

### ZTE 3000 protocol

| Device            | Support       |
| ----------------- | ------------- |
| ZTE ZXD 3000 V5.5 | ✅            |
| ZTE ZXD 3000 V5.6 | ✅            |
| ZTE ZXD 3000 V5.7 | ✅            |
| ZTE ZXD 3000 V5.8 | ✅            |
| ZTE ZXD 4000      | ⚠️ (Unstable) |

### ZTE 4875 protocol

| Device            | Support      |
| ----------------- | ------------ |
| ZTE ZXEPS R4875F1 | ✅           |
| ZTE ZXEPS R4850F1 | ⚠️ (No test) |
| ZTE ZXD 3000 V6.6 | ⚠️ (No test) |

### EPS6020 protocol

| Device  | Support |
| ------- | ------- |
| EPS4820 | ✅      |
| EPS6020 | ✅      |
| EPS7220 | ✅      |

### Increase protocol

| Device                 | Support |
| ---------------------- | ------- |
| Increase TR72-3500     | ✅      |
| Increase TR48-3000     | ✅      |
| Increase TR240-6000    | ✅      |
| Increase EVR500-10000  | ✅      |
| Increase EVR700-15000C | ✅      |
| Increase other models  | ✅      |

### INFY protocol

| Device            | Support      |
| ----------------- | ------------ |
| INFY REG50010S    | ✅           |
| INFY other models | ⚠️ (No test) |

## GPIO

### LCD Screen ST7789

| ESP32 | LCD  |
| ----- | ---- |
| IO23  | SDIN |
| IO22  | CS   |
| IO19  | CLK  |
| IO17  | RES  |
| IO16  | D/C  |
| IO14  | BLK  |

### LCD Touch CST816

| ESP32 | LCD |
| ----- | --- |
| IO26  | SDA |
| IO25  | SCL |
| IO32  | RST |
| IO27  | INT |

### CAN

| ESP32 | CAN |
| ----- | --- |
| IO5   | TX  |
| IO4   | RX  |

### KEY

Low level trigger

| ESP32 | KEY                       |
| ----- | ------------------------- |
| IO2   | UP KEY                    |
| IO0   | CENTER KEY & DOWNLOAD KEY |
| IO15  | DOWN_KEY                  |

### FAN PWM

| ESP32 | Position |
| ----- | -------- |
| IO27  | PCB      |
| IO13  | FAN PCB  |

### NTC

- IO38
- IO33
- IO35

## Tips

If you want to replicate this project, please use the firmware '[dump_no_nvs.bin](dump/lcd/5.31/dump_no_nvs.bin)' and activate it using '[active.py](tools/activation/python/activation.py)'.

## Mini program

Set voltage input '8888' to enter advanced settings

Set voltage input 'FFF8 key float_value' save to user settings

## Uart Command

| Command   | Example                   | Description                                         |
| --------- | ------------------------- | --------------------------------------------------- |
| Restart   | Restart=1                 | Restart                                             |
| Active    | Active=\<code\>           | Activation chip                                     |
| GetID     | GetID=1                   | Get chip id, Not work!                              |
| SetMSG    | SetMSG=1,2,3,4,5          | Set nvs data: 1 = ?, 2 = 53, 3 = 54, 4 = 6e, 5 = f2 |
| SetLOGO=S | SetLOGO=S                 | Clear memory logo data                              |
| SetLOGO=E | SetLOGO=E                 | Save memory logo data to lfs                        |
| SetLOGO   | SetLOGO=\<data,data,...\> | Put logo data to memory (480 byte)                  |

### Set logo

[bitmap_tool.py](tools/bitmap_tool.py)

```
SetLOGO=S
SetLOGO=0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,3,0,0,0,0,0,0,252,15,0,0,0,0,0,128,255,31,0,0,0,0,0,96,128,63,0,0,0,0,0,24,0,127,0,0,0,0,0,4,0,126,0,0,0,0,0,1,0,126,0,0,0,0,0,0,0,254,0,0,0,0,0,0,0,254,0,0,0,0,0,0,0,254,0,0,0,0,0,0,0,126,0,0,0,0,0,0,0,126,0,0,0,128,0,0,0,126,0,0,0,192,1,0,0,126,0,0,240,224,7,0,0,63,0,0,248,192,1,0,0,63,0,0,248,128,0,0,128,63,0,0,248,0,0,0,128,31,0,0,248,0,0,0,192,31,0,0,248,0,0,0,192,15,0,0,248,128,227,255,224,7,0,0,248,224,195,255,225,7,0,0,248,224,131,255,247,3,0,0,248,224,3,255,255,1,0,0,248,224,3,254,255,1,0,0,248,255,3,248,255,0,0,0,252,255,3,240,255,0,0,0,250,254,3,224,255,3,0,0,251,224,3,224,255,7,0,0,249,224,3,192,255,15,0,128,249,224,3,192,255,31,0,128,248,224,3,224,255,63,0,192,248,224,3,248,255,127,0,96,248,224,3,252,255,255,0,96,248,224,3,254,254,255,0,96,248,224,3,127,254,255,1,48,248,224,131,63,254,255,3,48,248,192,227,31,254,255,3,48,0,0,240,15,0,0,0,56,0,0,252,7,0,0,0,56,0,0,254,1,0,0,0,56,0,128,255,0,0,0,0,120,0,224,127,0,0,0,0,248,0,252,31,0,0,0,0,252,129,255,15,0,0,0,0,248,255,255,3,0,0,0,0,248,255,255,0,0,0,0,0,248,255,63,0,0,0,0,0,240,255,15,0,0,0,0,0,240,255,3,0,0,0,0,0,192,127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
SetLOGO=E
```

## Thanks

- [Hacking a Smart Home Device](https://jmswrnr.com/blog/hacking-a-smart-home-device)
- [esp32knife](https://github.com/jmswrnr/esp32knife)
- [ghidra](https://github.com/NationalSecurityAgency/ghidra)
- [SVD-Loader-Ghidra](https://github.com/leveldown-security/SVD-Loader-Ghidra)
