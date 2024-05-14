import asyncio
from bleak import BleakScanner, BleakClient

SERVICE_NOTIFY_UUID = '0000fff1-0000-1000-8000-00805f9b34fb'
SERVICE_WRITE_UUID = '0000fff2-0000-1000-8000-00805f9b34fb'

can_name = {
    1: 'Huawei',
    2: 'Increase',
    4: 'ZTE3000',
    8: 'INFY',
    16: 'EPS6020',
    32: 'ZTE4875',
}


def read_c_string_from_bytes(data):
    null_index = data.find(b'\0')  # 查找null字节的索引
    if null_index != -1:
        c_string = data[:null_index]  # 提取null字节之前的部分
        decoded_string = c_string.decode('utf-8')  # 解码为字符串
        return decoded_string
    else:
        return None


def ie(data, offset):
    return round(0.01 * int.from_bytes(data[offset:offset + 4], byteorder='big'), 2)


def yt(t):
    e = t // 3600
    a = (t % 3600) // 60
    n = t % 60
    return f"{str(int(e)).zfill(2)}:{str(int(a)).zfill(2)}:{str(int(n)).zfill(2)}"

r = 0
b = []
G = []
v = []
x = []
E = 0


def notify_callback(sender, data):
    global r, b, G, E, v, x
    print("Received:")
    mode = data[0]
    sub_mode = data[1]
    if mode == 0xEE:
        act = read_c_string_from_bytes(data[10:20])
        cver = round(int.from_bytes(data[8:10], byteorder='big') * 0.01, 2)
        scan = can_name.get(data[7], f'Unknown({data[1]})')
        sid = data[1:7].hex().upper()
        print(f"Act: {act}")
        print(f"Cver: {cver}")
        print(f"Scan: {scan}")
        print(f"ID: 0x{sid}")
    elif mode == 0xA1:
        if sub_mode == 0x01:
            print("Password change")
            ...  # 显示密码界面
    elif mode == 0xA0:
        if sub_mode == 0x00:
            print("Need password")
            ...  # 需要输入密码
        elif sub_mode == 0x01:
            print("Password correct")
            ...  # 密码正确
    elif mode == 0xF1 and sub_mode == 0x01:
        ...  # 继续发送下一包
    elif mode == 0xF2 and sub_mode == 0x01:
        ...  # 继续发送下一包
    elif mode == 0xF3 and sub_mode == 0x01:
        ...  # 发送完成
    elif mode == 0x01:
        i = ie(data, 1)
        o = ie(data, 5)
        r = ie(data, 9)
        s = ie(data, 13)
        c = data[34]
        u = data[36]
        f = data[38]
        print(f"i: {i}, o: {o}, r: {r}, s: {s}, c: {c}, u: {u}, f: {f}")
        """
        if ("0" == f) {
          Gt = "CAN通讯异常"
        } else if (0 == i) {
          Gt = "充电器输出异常" 
        } else if (4 == c) {
          Gt = "充电器已关机"
        } else if (0 == c) {
          Gt = "等待接入电池"
        } else if (1 == c) {
          Gt = "正在充电中"
        } else if (2 == c) {
          Gt = "第二段充电中"
        } else if (40 == c) {
          Gt = "预约等待中"
        } else if (3 == c) {
          Gt = "充电完成"
        } else if (43 == c) {
          Gt = "充电完成(已关机)"
        }
        t.setData({
          STR: Gt,
          NFS: u,
          OL: f,
          OV: i,
          OA: o,
          OW: r,
          OT: s
        });
        """
    elif mode == 0x02:
        """
        F = ie(Et, 2)
          h = ie(Et, 10)
          d = ie(Et, 18)
          l = ie(Et, 26)
          S = oe(Et, 34)
          p = oe(Et, 36)
          T = oe(Et, 38);
          var $t = Number(r / d * 100).toFixed(2)
          Lt = Number(d - r).toFixed(2);
          t.setData({
            IV: F,
            IA: h,
            IW: d,
            IT: l,
            ST0: S,
            ST1: p,
            ST2: T,
            EEI: d ? $t : "0.00",
            EES: d ? Lt : "0.00"
          })
        """
        F = ie(data, 1)
        h = ie(data, 5)
        d = ie(data, 9)
        l = ie(data, 13)
        S = data[17]
        p = data[18]
        T = data[19]

        if d == 0:
            t = "0.00"
            Lt = "0.00"
        else:
            t = round(r / d * 100, 2)
            Lt = round(d - r, 2)
        print(f"F: {F}, h: {h}, d: {d}, l: {l}, S: {S}, p: {p}, T: {T}, t: {t}, Lt: {Lt}")
    elif mode == 0x03:
        """
        B = ie(Et, 2)
          C = ie(Et, 10)
          D = ie(Et, 18)
          m = ie(Et, 26)
          w = oe(Et, 34)
          O = oe(Et, 36)
          t.setData({
            Ah: B,
            Wh: C,
            AH: D,
            WH: m,
            SWT: w,
            SMT: O
          });
        """
        B = ie(data, 1)
        C = ie(data, 5)
        D = ie(data, 9)
        m = ie(data, 13)
        w = data[17]
        O = data[18]
        print(f"B: {B}, C: {C}, D: {D}, m: {m}, w: {w}, O: {O}")
    elif mode == 0x04:
        """
        t.setData({
          Ti: Yt(ie(Et, 2)),
          TI: Yt(ie(Et, 10)),
          NSD: Yt(ie(Et, 18)),
          SOC: Number(ie(Et, 26)).toFixed(0)
        });
        """
        Ti = yt(ie(data, 1))
        TI = yt(ie(data, 5))
        NSD = yt(ie(data, 9))
        SOC = round(ie(data, 13))
        print(f"Ti: {Ti}, TI: {TI}, NSD: {NSD}, SOC: {SOC}")
    elif mode == 0x10:
        """
                  v = [ie(Et, 2, 1), ie(Et, 10, 1)]
          x = [ie(Et, 18, 1), ie(Et, 26, 1)]
          E = oe(Et, 34)
          A = oe(Et, 36)
          I = oe(Et, 38)
          if (1 == E) {
            k = v[1]
            y = v[0]
          } else if (2 == E) {
            k = x[1]
            y = x[0]
          } else if (3 == E) {
            k = b[1]
            y = b[0]
          } else if (4 == E) {
            k = G[1]
            y = G[0]
          }
          t.setData({
            KS1: v,
            KS2: x,
            KSi: E,
            PON: A,
            KON: I,
            SV: y.toFixed(2),
            SA: k.toFixed(2)
          });
        """
        v = [ie(data, 1), ie(data, 5)]
        x = [ie(data, 9), ie(data, 13)]
        E = data[17]
        A = data[18]
        I = data[19]

        k = 0
        y = 0
        if E == 1:
            k = v[1]
            y = v[0]
        elif E == 2:
            k = x[1]
            y = x[0]
        elif E == 3:
            k = b[1]
            y = b[0]
        elif E == 4:
            k = G[1]
            y = G[0]
        print(f"v: {v}, x: {x}, E: {E}, A: {A}, I: {I}, k: {k}, y: {y}")
    elif mode == 0x11:
        """
        b = [ie(Et, 2, 1), ie(Et, 10, 1)]
          G = [ie(Et, 18, 1), ie(Et, 26, 1)]
          R = oe(Et, 34)
          N = oe(Et, 36)
          $ = oe(Et, 38)
          xt.SetCFG("UEN", N)
          if (1 == E) {
            k = v[1]
            y = v[0]
          } else if (2 == E) {
            k = x[1]
            y = x[0]
          } else if (3 == E) {
            k = b[1]
            y = b[0]
          } else if (4 == E) {
            k = G[1]
            y = G[0]
          }
          t.setData({
            KS3: b,
            KS4: G,
            CAN: R,
            UEN: N,
            KRC: $,
            SV: y.toFixed(2),
            SA: k.toFixed(2)
          });
        """
        b = [str(ie(data, 1)), str(ie(data, 5))]
        G = [str(ie(data, 9)), str(ie(data, 13))]
        R = data[17]
        N = data[18]
        KCR = data[19]
        if 1 == E:
            k = v[1]
            y = v[0]
        elif 2 == E:
            k = x[1]
            y = x[0]
        elif 3 == E:
            k = b[1]
            y = b[0]
        elif 4 == E:
            k = G[1]
            y = G[0]
        print(f"KS3: {b}, KS4: {G}, CAN: {R}, UEN: {N}, KRC: {KCR}, SV: {round(y, 2)}, SA: {round(k, 2)}")
    elif mode == 0x12:
        """
        L = ie(Et, 2)
          U = ie(Et, 10)
          W = ie(Et, 18)
          M = ie(Et, 26)
          V = oe(Et, 34)
          K = oe(Et, 36)
          P = oe(Et, 38)
          t.setData({
            SV2: L,
            SA2: U,
            SMW: W,
            UMW: M,
            WTi: V,
            ETi: K,
            Sleep: P
          });
        """
        L = ie(data, 1)
        U = ie(data, 5)
        W = ie(data, 9)
        M = ie(data, 13)
        V = data[17]
        K = data[18]
        P = data[19]
        print(f'SV2: {L}, SA2: {U}, SMW: {W}, UMW: {M}, WTi: {V}, ETi: {K}, Sleep: {P}')
    elif mode == 0x13:
        """
        H = ie(Et, 2)
          Y = ie(Et, 10)
          j = ie(Et, 18)
          q = oe(Et, 34)
          Z = oe(Et, 36)
          _ = oe(Et, 38)
          t.setData({
            TMW: H,
            UMT: Y,
            OMT: j,
            LEDK0: q,
            LEDK1: Z,
            LEDK2: _
          });
        """
        H = ie(data, 1)
        Y = ie(data, 5)
        j = ie(data, 9)
        q = data[17]
        Z = data[18]
        _ = data[19]
        print(f'TMW: {H}, UMT: {Y}, OMT: {j}, LEDK0: {q}, LEDK1: {Z}, LEDK2: {_}')
    elif mode == 0x14:
        """
        z = ie(Et, 2)
          Q = ie(Et, 10)
          J = ie(Et, 18)
          X = ie(Et, 26)
          tt = oe(Et, 34)
          et = oe(Et, 36)
          at = .1 * oe(Et, 38)
          t.setData({
            LSA: z,
            HSA: Q,
            LSV: J,
            HSV: X,
            UFS: tt,
            LFS: et,
            AFS: at.toFixed(1)
          })
        """
        z = ie(data, 1)
        Q = ie(data, 5)
        J = ie(data, 9)
        X = ie(data, 13)
        tt = data[17]
        et = data[18]
        at = .1 * data[19]
        print(f'LSA: {z}, HSA: {Q}, LSV: {J}, HSV: {X}, UFS: {tt}, LFS: {et}, AFS: {round(at, 1)}')
    elif mode == 0x15:
        """
          nt = .01 * ie(Et, 2)
          it = .01 * ie(Et, 10)
          ot = .01 * ie(Et, 18)
          rt = .01 * ie(Et, 26)
          st = oe(Et, 34)
          ct = oe(Et, 36)
          ut = oe(Et, 38)
          t.setData({
            OVT: nt.toFixed(4),
            OAT: it.toFixed(4),
            OVD: ot.toFixed(4),
            OAD: rt.toFixed(4),
            UHQ: st,
            GIF: ct,
            CKA2: ut
          });
        """
        nt = .01 * ie(data, 1)
        it = .01 * ie(data, 5)
        ot = .01 * ie(data, 9)
        rt = .01 * ie(data, 13)
        st = data[17]
        ct = data[18]
        ut = data[19]
        print(
            f'OVT: {round(nt, 4)}, OAT: {round(it, 4)}, OVD: {round(ot, 4)}, OAD: {round(rt, 4)}, UHQ: {st}, GIF: {ct}, CKA2: {ut}')
    elif mode == 0x16:
        """
        ft = ie(Et, 2)
          Ft = ie(Et, 10)
          ht = ie(Et, 18)
          dt = ie(Et, 26)
          lt = oe(Et, 34)
          St = oe(Et, 36)
          pt = .01 * oe(Et, 38)
          t.setData({
            L2V: ft,
            H2V: Ft,
            USD: ht,
            NTC: lt,
            DDT: St,
            CLV: pt,
            SDU: dt
          });
        """
        ft = ie(data, 1)
        Ft = ie(data, 5)
        ht = ie(data, 9)
        dt = ie(data, 13)
        lt = data[17]
        St = data[18]
        pt = .01 * data[19]
        print(f'L2V: {ft}, H2V: {Ft}, USD: {ht}, NTC: {lt}, DDT: {St}, CLV: {pt}, SDU: {dt}')
    elif mode == 0x17:
        """
        Tt = .01 * ie(Et, 2)
          gt = .01 * ie(Et, 10)
          Bt = ie(Et, 18)
          Ct = ie(Et, 26)
          Dt = oe(Et, 34)
          mt = oe(Et, 36)
          wt = oe(Et, 38)
          t.setData({
            O2D: gt.toFixed(4),
            O2T: Tt.toFixed(4),
            OVS: Bt,
            OAS: Ct,
            UEG: Dt,
            UCN: mt,
            MFS: wt
          });
        """
        Tt = .01 * ie(data, 1)
        gt = .01 * ie(data, 5)
        Bt = ie(data, 9)
        Ct = ie(data, 13)
        Dt = data[17]
        mt = data[18]
        wt = data[19]
        print(f'O2D: {round(gt, 4)}, O2T: {round(Tt, 4)}, OVS: {Bt}, OAS: {Ct}, UEG: {Dt}, UCN: {mt}, MFS: {wt}')
    elif mode == 0x20:
        """
        var Ut = ee(Et.substring(2, 40));
          t.setData({
            SSID: Ut
          })
        """
        Ut = read_c_string_from_bytes(data[1:20])
        print(f"SSID: {Ut}")
    elif mode == 0x21:
        """
        UPWD: ee(Et.substring(2, 40))
        """
        print(f"UPWD: {read_c_string_from_bytes(data[1:20])}")
    elif mode == 0x22:
        """
        WID: ee(Et.substring(2, 40))
        """
        print(f"WID: {read_c_string_from_bytes(data[1:20])}")
    elif mode == 0x23:
        """
        WPD: ee(Et.substring(2, 40))
        """
        print(f"WPD: {read_c_string_from_bytes(data[1:20])}")
    else:
        print("{0}: ({1}){2}".format(sender, len(data), data))


def send_data(client, data):
    client.write_gatt_char(SERVICE_WRITE_UUID, data)


def send_end(client):
    """
    发送结束
    :param client:
    :return:
    """
    send_data(client, b'\xFF')


def set_password(client, password: str):
    """
    设置密码
    :param client:
    :param password:
    :return:
    """
    send_data(client, b'\xFA75' + password.encode('utf-8'))
    send_end(client)


def reset_img_and_settings(client):
    """
    重置图片和设置
    :param client:
    :return:
    """
    send_data(client, b'\xF6\x01')

def restart(client):
    """
    重启设备
    :param client:
    :return:
    """
    send_data(client, b'\xF0\x01')

def reset_statistical(client):
    """
    重置统计数据
    :param client:
    :return:
    """
    send_data(client, b'\xAA\x01')


def set_max_power(client, power: int):
    """
    设置最大功率
    :param client:
    :param power:
    :return:
    """
    power = int(100 * power).to_bytes(4, byteorder='big')
    send_data(client, b'\xF8\x4E' + power)
    send_data(client, b'\xF8\x4D' + power)
    send_end(client)

def set_would_user_set_logo(client, is_user_set_logo: bool):
    """
    设置是否用户设置logo
    :param client:
    :param is_user_set_logo:
    :return:
    """
    send_data(client, b'\xF9\xC0' + (b'\x00' if is_user_set_logo else b'\x01'))
    send_end(client)

def set_is_ntc(client, is_ntc: bool):
    """
    设置是否NTC
    :param client:
    :param is_ntc:
    :return:
    """
    send_data(client, b'\xF9\x62' + (b'\x00' if is_ntc else b'\x01'))
    send_end(client)

def switch_protocol(client, protocol: str, zte4875_device_id: str=None):
    """
    切换协议
    huawei
    increase
    zte3000
    infy
    eps6020
    zte4875
    :param client:
    :param protocol:
    :return:
    """
    maps = {
        'huawei': 0x0101,
        'increase': 0x0201,
        'zte3000': 0x0401,
        'infy': 0x0801,
        'eps6020': 0x1001,
        'zte4875': 0x2001,
    }
    if not zte4875_device_id:
        e = int(zte4875_device_id, 16)
        a = str(e)
        n = 0
        for i in a:
            n += ord(i)
        send_data(client, b'\xC8\x3F' + (int((e // 611) * n) & 0xFFFFFF).to_bytes(3, byteorder='big'))

    send_data(client, b'\xFC\x53' + maps[protocol].to_bytes(2, byteorder='big'))
    send_end(client)

def set_shutdown_backlight(client, level: int):
    """
    设置关机背光
    0-255
    :param client:
    :param level:
    :return:
    """
    send_data(client, b'\xF9\x68' + level.to_bytes(1, byteorder='big'))
    send_end(client)

def set_startup_backlight(client, level: int):
    """
    设置开机背光
    10-255
    :param client:
    :param level:
    :return:
    """
    send_data(client, b'\xF9\x69' + level.to_bytes(1, byteorder='big'))
    send_end(client)

def set_sleep_backlight(client, level: int):
    """
    设置休眠背光
    0-255
    :param client:
    :param level:
    :return:
    """
    send_data(client, b'\xF9\x6A' + level.to_bytes(1, byteorder='big'))
    send_end(client)

def set_sleep_time(client, time: int):
    """
    设置休眠时间
    5-255
    :param client:
    :param time:
    :return:
    """
    send_data(client, b'\xF9\x6D' + time.to_bytes(1, byteorder='big'))
    send_end(client)

def set_startup_time(client, time: int):
    """
    设置初始页面显示时间
    3-15
    :param client:
    :param time:
    :return:
    """
    send_data(client, b'\xF9\x6B' + time.to_bytes(1, byteorder='big'))
    send_end(client)

def set_show_startup_time(client, is_show: bool):
    """
    设置是否显示初始页面时间
    :param client:
    :param is_show:
    :return:
    """
    send_data(client, b'\xF9\x6C' + (b'\x00' if is_show else b'\x01'))
    send_end(client)

def set_show_gif(client, is_show: bool):
    """
    设置是否显示GIF
    :param client:
    :param is_show:
    :return:
    """
    send_data(client, b'\xF9\x6F' + (b'\x00' if is_show else b'\x01'))
    send_end(client)

def color_to_bytes(color: int):
    color1 = color >> 16
    color2 = (color >> 8) & 0xFF
    color3 = color & 0xFF
    return ((color1 >> 3 << 11) + (color2 >> 2 << 5) + (color3 >> 3)).to_bytes(2, byteorder='big')


def set_color(client, offset: int, color: int):
    """
    设置颜色
    offset: 0-8
    0: 顶部状态
    1: 输出电压
    2: 输出电流
    3: 设置电压电流
    4: 统计信息
    5: 自定义信息
    6: 充电功率
    7: 温度
    8: 电池电量
    :param client:
    :param offset: offset 0-8
    :param color: RGB（0xFFFFFF）
    :return:
    """
    maps = {
        0: b'\x00\x00\xf0\x1c',
        1: b'\x00\x20\x9f\x26',
        2: b'\x00\x47\x9f\x26',
        3: b'\x00\x6e\x9f\x26',
        4: b'\x00\x96\x9f\x3e',
        5: b'\xa3\x20\x4d\x4d',
        6: b'\x50\xd6\x4f\x1a',
        7: b'\x00\xd6\x4f\x1a',
        8: b'\xa3\x77\x4d\x68',
    }
    if offset == 8:
        offset = 0x3801
    else:
        offset = 0x5300 + offset
    send_data(client, b'\xF5' + offset.to_bytes(2, byteorder='big') + color_to_bytes(color) + maps[offset])

def set_decrease_current(client, enable: bool):
    """
    设置二段电流缓降
    :param client:
    :param enable:
    :return:
    """
    send_data(client, b'\xF9\x72' + (b'\x00' if enable else b'\x01'))
    send_end(client)

def set_english(client, enable: bool):
    """
    设置英文
    :param client:
    :param enable:
    :return:
    """
    send_data(client, b'\xF9\x70' + (b'\x00' if enable else b'\x01'))
    send_end(client)

def set_ble_name(client, name: str):
    """
    设置蓝牙名称
    :param client:
    :param name:
    :return:
    """
    send_data(client, b'\xFA\x73' + name.encode('utf-8'))
    send_end(client)

def set_ble_password(client, password: str):
    """
    设置蓝牙密码
    :param client:
    :param password:
    :return:
    """
    send_data(client, b'\xFA\x74' + password.encode('utf-8'))
    send_end(client)

def set_swap_key(client, key: bool):
    """
    设置对调加减位置
    :param client:
    :param key:
    :return:
    """
    send_data(client, b'\xF9\x66' + (b'\x00' if key else b'\x01'))
    send_end(client)

def set_screen_orientation(client, orientation: int):
    """
    设置屏幕方向
    0: 0
    1: 90
    2: 180
    3: 270
    :param client:
    :param orientation:
    :return:
    """
    send_data(client, b'\xF9\x6E' + orientation.to_bytes(1, byteorder='big'))
    send_end(client)

def set_wifi_name(client, name: str):
    """
    设置WiFi名称
    :param client:
    :param name:
    :return:
    """
    send_data(client, b'\xAB\x00' + name.encode('utf-8'))
    send_end(client)

def set_wifi_password(client, password: str):
    """
    设置WiFi密码
    :param client:
    :param password:
    :return:
    """
    send_data(client, b'\xAB\x01' + password.encode('utf-8'))
    send_end(client)

def update_fw(client, fw_type='NewUI', version='0'):
    """
    更新固件
    fw_type: CANControl NewUI NewTest
    version:
        0 最新
        8 NewUI(5.29)
    :param client:
    :param version:
    :return:
    """
    # get version hex
    send_data(client, b'\xA7' + ord(version).to_bytes(4, byteorder='little') + fw_type.encode('utf-8'))

def set_temp_acceleration_value(client, value: int):
    """
    设置温度加速值
    3-15
    :param client:
    :param value:
    :return:
    """
    send_data(client, b'\xF9\x63' + value.to_bytes(1, byteorder='big'))
    send_end(client)

def set_current_acceleration_value(client, value: float):
    """
    设置温度加速值
    0.1-2.0
    :param client:
    :param value:
    :return:
    """
    send_data(client, b'\xF9\x64' + int(value * 10).to_bytes(1, byteorder='big'))
    send_end(client)

def set_fan_init_speed(client, speed: int):
    """
    设置风扇初始速度
    0-255
    :param client:
    :param speed:
    :return:
    """
    send_data(client, b'\xF9\x65' + speed.to_bytes(1, byteorder='big'))
    send_end(client)

def set_temp_limit(client, limit: int):
    """
    设置超温限制温度
    0-255
    :param client:
    :param limit:
    :return:
    """
    send_data(client, b'\xF8\x4A' + limit.to_bytes(1, byteorder='big'))
    send_end(client)

def set_temp_limit_exit(client, limit: int):
    """
    设置超温退出温度
    0-255
    :param client:
    :param limit:
    :return:
    """
    send_data(client, b'\xF8\x4B' + limit.to_bytes(1, byteorder='big'))
    send_end(client)

def set_temp_limit_power(client, limit: int):
    """
    设置超温限制功率
    0-255
    :param client:
    :param limit:
    :return:
    """
    send_data(client, b'\xF8\x4C' + limit.to_bytes(1, byteorder='big'))
    send_end(client)

def start_voltage_offset(client):
    """
    开始校正电压
    :param client:
    :return:
    """
    send_data(client, b'\xC1')
    send_end(client)
def set_current_voltage_offset(client, offset: float, slot: int, power_type: int, set_voltage: float, set_current: float, output_voltage: float):
    """
    设置当前校正电压
    10-1000
    :param client:
    :param offset:
    :param slot: 1-4 预设电流档位
    :param power_type: can_name id
    :param set_voltage:
    :param set_current:
    :param output_voltage:
    :return:
    """
    """
      Pt("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
        var e = Number(t / i).toFixed(4);
        var a = Number(t / y).toFixed(4);
        jt("C3" + ae(100 * a) + ae(100 * e))
        if (2 == R) {
          jt("F876" + ae(20 * a))
          jt("F877" + ae(100 * a))
        } else if (1 == R) {
          jt("F876" + ae(41 * a))
          jt("F877" + ae(58.5 * a))
        } else if (4 == R) {
          jt("F876" + ae(41 * a))
          jt("F877" + ae(59 * a))
        } else if (16 == R) {
          jt("F876" + ae(44 * a))
          jt("F877" + ae(61 * a))
        } else if (32 == R) {
          jt("F876" + ae(41.2 * a))
          jt("F877" + ae(59.4 * a))
        }
        jt("FF")
        jt("A80" + E + ae(50 * a) + ae(k))
        jt("FF")
      }))
    """
    e = round(offset / output_voltage, 4)
    a = round(offset / set_voltage, 4)
    send_data(client, b'\xC3' + int(100 * (100 * a)).to_bytes(4, byteorder='big') + int(100 * (100 * e)).to_bytes(4, byteorder='big'))
    min_voltage = 0
    max_voltage = 0
    if power_type == 2:
        min_voltage = 20
        max_voltage = 100
    elif power_type == 1:
        min_voltage = 41
        max_voltage = 58.5
    elif power_type == 4:
        min_voltage = 41
        max_voltage = 59
    elif power_type == 16:
        min_voltage = 44
        max_voltage = 61
    elif power_type == 32:
        min_voltage = 41.2
        max_voltage = 59.4
    send_data(client, b'\xF8\x76' + int(100 * (min_voltage * a)).to_bytes(4, byteorder='big'))
    send_data(client, b'\xF8\x77' + int(100 * (max_voltage * a)).to_bytes(4, byteorder='big'))
    send_end(client)
    send_data(client, b'\xA8' + slot.to_bytes(1, byteorder='big') + int(100 * (50 * a)).to_bytes(4, byteorder='big') + (set_current * 100).to_bytes(4, byteorder='big'))
    send_end(client)

def set_display_voltage_offset(client, offset: float):
    """
    设置显示电压补偿
    0.1-5
    :param client:
    :param offset:
    :return:
    """
    send_data(client, b'\xFB\x47' + int(100 * (offset * 100)).to_bytes(4, byteorder='big'))
    send_end(client)

def set_voltage_offset(client, offset: float):
    """
    设置电压补偿
    0.1-5
    :param client:
    :param offset:
    :return:
    """
    send_data(client, b'\xFB\x46' + int(100 * (offset * 100)).to_bytes(4, byteorder='big'))
    send_end(client)

def set_voltage_range(client, start: float, end: float):
    """
    设置电压范围
    10-1000
    :param client:
    :param start:
    :param end:
    :return:
    """
    send_data(client, b'\xF8\x76' + int(start * 100).to_bytes(4, byteorder='big'))
    send_data(client, b'\xF8\x77' + int(end * 100).to_bytes(4, byteorder='big'))
    send_end(client)

def set_voltage_jump_buffer(client, buffer: float):
    """
    设置电压跳变缓冲
    0.00-1.00
    :param client:
    :param buffer:
    :return:
    """
    send_data(client, b'\xF8\xF3' + int(buffer * 100).to_bytes(4, byteorder='big'))
    send_end(client)

def set_zte4875_voltage_offset(client, offset: float, output_voltage: int):
    """
    设置zte4875第二电压校准
    :param client:
    :param offset:
    :param output_voltage:
    :return:

    var e = Number(t / i).toFixed(4);
        jt("C4" + ae(100 * Number(t / y).toFixed(4)) + ae(100 * e))
        jt("FF")
    """
    send_data(client, b'\xC2')
    send_end(client)
    e = round(offset / output_voltage, 4)
    send_data(client, b'\xC4' + int(100 * (100 * round(offset / output_voltage, 4))).to_bytes(4, byteorder='big') + int(100 * (100 * e)).to_bytes(4, byteorder='big'))
    send_end(client)

def set_zte4875_display_voltage_offset(client, offset: float):
    """
    设置zte4875显示电压补偿
    0.1-5
    :param client:
    :param offset:
    :return:
    """
    send_data(client, b'\xFB\xF2' + int(100 * (offset * 100)).to_bytes(4, byteorder='big'))
    send_end(client)

def set_zte4875_voltage_offset(client, offset: float):
    """
    设置zte4875电压补偿
    0.1-5
    :param client:
    :param offset:
    :return:
    """
    send_data(client, b'\xFB\xF1' + int(100 * (offset * 100)).to_bytes(4, byteorder='big'))
    send_end(client)

def set_current_current_offset(client, offset: float, set_current: float, current_output: float):
    """
    设置当前电流校准
    3-100
    :param client:
    :param offset:
    :return:
    """
    send_data(client, b'\xC0')
    send_end(client)
    e = round(offset / current_output, 4)
    send_data(client, b'\xC5' + int(100 * (100 * round(offset / set_current, 4))).to_bytes(4, byteorder='big') + int(100 * (100 * e)).to_bytes(4, byteorder='big'))
    send_end(client)

def set_current_display_offset(client, offset: float):
    """
    设置显示电流补偿
    0.1-5
    :param client:
    :param offset:
    :return:
    """
    send_data(client, b'\xFB\x45' + int(100 * (offset * 100)).to_bytes(4, byteorder='big'))
    send_end(client)

def set_current_jump_buffer(client, buffer: float):
    """
    设置电流跳变缓冲
    0.00-1.00
    :param client:
    :param buffer:
    :return:
    """
    send_data(client, b'\xF8\xF4' + int(buffer * 100).to_bytes(4, byteorder='big'))
    send_end(client)

def set_current_min_filter(client, filter: float):
    """
    设置电流最小过滤
    0.00-1.00
    :param client:
    :param filter:
    :return:
    """
    send_data(client, b'\xF8\x48' + int(filter * 100).to_bytes(4, byteorder='big'))
    send_end(client)

def set_current_offset(client, offset: float):
    """
    设置电流补偿
    0.1-5
    :param client:
    :param offset:
    :return:
    """
    send_data(client, b'\xFB\x44' + int(100 * (offset * 100)).to_bytes(4, byteorder='big'))
    send_end(client)

def set_current_range(client, start: float, end: float):
    """
    设置电流范围
    :param client:
    :param start:
    :param end:
    :return:
    """
    send_data(client, b'\xF8\x78' + int(start * 100).to_bytes(4, byteorder='big'))
    send_data(client, b'\xF8\x79' + int(end * 100).to_bytes(4, byteorder='big'))
    send_end(client)

def set_power_on_or_off(client, is_on: bool):
    """
    设置开机或关机
    :param client:
    :param is_on:
    :return:
    """
    send_data(client, b'\xA6' + (b'\x01' if is_on else b'\x00'))
    send_end(client)

def set_power_limit(client, limit: int):
    """
    设置功率限制
    300-N
    :param client:
    :param limit:
    :return:
    """
    send_data(client, b'\xF8\x4D' + (limit * 100).to_bytes(1, byteorder='big'))
    send_end(client)

def set_appointment_time(client, time: int):
    """
    设置预约时间
    0-1200
    :param client:
    :param time:
    :return:
    """
    send_data(client, b'\xA9' + time.to_bytes(2, byteorder='big'))
    send_end(client)

def set_slot_voltage_current(client, slot: int, voltage: float, current: float):
    """
    设置预设电压电流
    :param client:
    :param slot: 0-4
    :param voltage:
    :param current:
    :return:
    """
    send_data(client, b'\xA8' + slot.to_bytes(1, byteorder='big') + int(voltage * 100).to_bytes(4, byteorder='big') + int(current * 100).to_bytes(4, byteorder='big'))
    send_end(client)

def set_soft_start(client, time: int):
    """
    设置软启动时间
    5-20
    :param client:
    :param time:
    :return:
    """
    send_data(client, b'\xF9\x61' + time.to_bytes(1, byteorder='big'))
    send_end(client)

def set_voltage_current(client, voltage: float, current: float, slot: int):
    """
    设置电压电流
    10-1000
    :param client:
    :param voltage:
    :param current:
    :param slot: 1-4
    :return:
    """
    send_data(client, b'\xA1' + str(voltage).encode())
    set_slot_voltage_current(client, slot, voltage, current)

def set_second_current(client, current: float):
    """
    设置二段电流
    :param client:
    :param current:
    :return:
    """
    send_data(client, b'\xF8\x57' + int(current * 100).to_bytes(4, byteorder='big'))
    send_end(client)

def set_second_voltage(client, voltage: float):
    """
    设置二段电压
    :param client:
    :param voltage:
    :return:
    """
    send_data(client, b'\xF8\x58' + int(voltage * 100).to_bytes(4, byteorder='big'))
    send_end(client)

def set_delay_time(client, time: int):
    """
    设置关机延时时间(min)
    0-600
    :param client:
    :param time:
    :return:
    """
    send_data(client, b'\xF8\x59' + (time * 100).to_bytes(4, byteorder='big'))
    send_end(client)

def set_shutdown_current(client, current: float):
    """
    设置关机电流
    0.00-2.00
    :param client:
    :param current:
    :return:
    """
    send_data(client, b'\xF8\xF0' + int(current * 100).to_bytes(4, byteorder='big'))
    send_end(client)

async def main():
    devices = await BleakScanner.discover()

    address = ""
    for d in devices:
        if d.name and d.name.startswith("CAN"):
            address = d.address
            print(d)
            break

    if not address:
        print("No device found")
        return

    async with BleakClient(address) as client:
        if not client.is_connected:
            await client.connect()
        print(f"Connected: {client.is_connected}")

        paired = await client.pair(protection_level=2)
        print(f"Paired: {paired}")

        await client.start_notify(SERVICE_NOTIFY_UUID, notify_callback)
        print("Start notify")

        while client.is_connected and paired:
            await asyncio.sleep(1)


asyncio.run(main())
