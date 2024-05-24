import asyncio
import os
from bleak import BleakScanner, BleakClient
from prompt_toolkit import PromptSession
from prompt_toolkit.patch_stdout import patch_stdout

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


class PowerData:
    activation_time = ''
    ver = 0
    sub_ver = 0
    can = ''
    chip_id = ''
    is_english = 0
    swap_key = 0
    auto_shutdown = 0
    shutdown_current = 0
    is_ntc = 0
    screen_orientation = 0
    min_current_filter = 0
    support_protocol = 0
    would_user_set_logo = 0

    per_charge_voltage = 0
    per_charge_current = 0

    ble_name = ''
    ble_password = ''
    wifi_name = ''
    wifi_password = ''

    output_voltage = 0
    output_current = 0
    output_power = 0
    output_temperature = 0
    input_voltage = 0
    input_current = 0
    input_power = 0
    input_temperature = 0

    status = 0
    fan_speed = 0
    is_can_error = 0

    ampere_hour = 0
    watt_hour = 0
    total_ampere_hour = 0
    total_watt_hour = 0

    error1 = 0
    error2 = 0

    timer = 0
    total_timer = 0

    power_off_timer = 0
    soc = 0

    slot = [
        [0.0, 0.0],
        [0.0, 0.0],
        [0.0, 0.0]
    ]
    current_slot = 0

    power_status = 0
    background_image = 0

    second_voltage = 0
    second_current = 0
    system_power_limit = 0
    init_page_time = 0
    init_page_show_timer = 0
    sleep_time = 0

    over_temp_power_limit = 0
    over_temp_enter = 0
    over_temp_exit = 0

    shutdown_backlight = 0
    screen_backlight = 0
    sleep_backlight = 0

    current_min_limit = 0
    current_max_limit = 0
    voltage_min_limit = 0
    voltage_max_limit = 0
    fan_temp_acceleration = 0
    fan_init_speed = 0
    current_temp_acceleration = 0

    display_voltage_offset = 0
    display_current_offset = 0
    voltage_offset = 0
    current_offset = 0
    soft_start_timer = 0
    show_gif = 0
    second_current_decrease = 0

    zte4875_display_voltage_offset = 0
    zte4875_voltage_offset = 0

    voltage_jump_buffer = 0
    current_jump_buffer = 0


power_data = PowerData()


def notify_callback(sender, data):
    mode = data[0]
    sub_mode = data[1]
    if mode == 0xEE:
        power_data.activation_time = read_c_string_from_bytes(data[10:20])
        power_data.ver = round(int.from_bytes(data[8:10], byteorder='big') * 0.01, 2)
        power_data.can = can_name.get(data[7], f'Unknown({data[1]})')
        power_data.chip_id = f'0x{data[1:7].hex().upper()}'
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
        power_data.output_voltage = ie(data, 1)  # 输出电压
        power_data.output_current = ie(data, 5)  # 输出电流
        power_data.output_power = ie(data, 9)  # 输出功率
        power_data.output_temperature = ie(data, 13)  # 输出温度
        power_data.status = data[34]  # 充电状态 0=等待接入电池 1=正在充电中 2=第二段充电中 3=充电完成 4=充电器已关机 40=预约等待中 43=充电完成(已关机)
        power_data.fan_speed = data[36]  # 风机速度
        power_data.is_can_error = data[38]  # 0=CAN通讯异常
    elif mode == 0x02:
        power_data.input_voltage = ie(data, 1)  # 输入电压
        power_data.input_current = ie(data, 5)  # 输入电流
        power_data.input_power = ie(data, 9)  # 输入功率 (round(r / d * 100, 2) # 充电效率) (round(d - r, 2) # 充电损耗)
        power_data.input_temperature = ie(data, 13)  # 输入温度
        # S = data[17] # 未知
        # p = data[18] # 未知
        # T = data[19] # 未知
    elif mode == 0x03:
        power_data.ampere_hour = ie(data, 1)  # Ah 充入容量
        power_data.watt_hour = ie(data, 5)  # Wh 充入电量
        power_data.total_ampere_hour = ie(data, 9)  # AH 累计容量
        power_data.total_watt_hour = ie(data, 13)  # WH 累计电量
        power_data.error1 = data[17]  # 告警
        power_data.error2 = data[18]  # 告警
    elif mode == 0x04:
        power_data.timer = yt(ie(data, 1))  # 充电时间
        power_data.total_timer = yt(ie(data, 5))  # 累计时间
        power_data.power_off_timer = yt(ie(data, 9))  # 关机剩余时间
        power_data.soc = round(ie(data, 13), 2)  # 电池电量
    elif mode == 0x10:
        power_data.slot[0] = [ie(data, 1), ie(data, 5)]  # 槽位1 电压 电流
        power_data.slot[1] = [ie(data, 9), ie(data, 13)]  # 槽位2 电压 电流
        power_data.current_slot = data[17]  # 槽位
        power_data.power_status = data[18]  # 开机状态
        power_data.background_image = data[19]  # 背景图 0=默认 1=自设
    elif mode == 0x11:
        power_data.slot[2] = [ie(data, 1), ie(data, 5)]  # 槽位3 电压 电流
        power_data.slot[3] = [ie(data, 9), ie(data, 13)]  # 槽位4 电压 电流
        power_data.sub_ver = data[17]  # 子版本
        power_data.is_english = data[18]  # 是否英文
        power_data.swap_key = data[19]  # 对调加减位置
    elif mode == 0x12:
        power_data.second_voltage = ie(data, 1)  # 二段电压
        power_data.second_current = ie(data, 5)  # 二段电流
        power_data.system_power_limit = ie(data, 9)  # 系统功率限制
        # M = ie(data, 13) # 未知
        power_data.init_page_time = data[17]  # 初始页面时间
        power_data.init_page_show_timer = data[18]  # 是否显示倒计时
        power_data.sleep_time = data[19]  # 息屏时间(S)
    elif mode == 0x13:
        power_data.over_temp_power_limit = ie(data, 1)  # 超温限制功率
        power_data.over_temp_enter = ie(data, 5)  # 超温进入（度）
        power_data.over_temp_exit = ie(data, 9)  # 超温退出（度）
        power_data.shutdown_backlight = data[17]  # 关机亮度
        power_data.screen_backlight = data[18]  # 屏幕亮度
        power_data.sleep_backlight = data[19]  # 息屏亮度
    elif mode == 0x14:
        power_data.current_min_limit = ie(data, 1)  # 电流下限
        power_data.current_max_limit = ie(data, 5)  # 电流上限
        power_data.voltage_min_limit = ie(data, 9)  # 电压下限
        power_data.voltage_max_limit = ie(data, 13)  # 电压上限
        power_data.fan_temp_acceleration = data[17]  # 风速温度加速值
        power_data.fan_init_speed = data[18]  # 初始风速值
        power_data.current_temp_acceleration = .1 * data[19]  # 电流加速值
    elif mode == 0x15:
        power_data.display_voltage_offset = .01 * ie(data, 1)  # 显示补偿电压
        power_data.display_current_offset = .01 * ie(data, 5)  # 显示补偿电流
        power_data.voltage_offset = .01 * ie(data, 9)  # 设置电压补偿
        power_data.current_offset = .01 * ie(data, 13)  # 设置电流补偿
        power_data.soft_start_timer = data[17]  # 缓启时间(S)
        power_data.show_gif = data[18]  # 是否显示GIF
        power_data.second_current_decrease = data[19]  # 二段电流缓降
    elif mode == 0x16:
        # ft = ie(data, 1) # 未知
        # Ft = ie(data, 5) # 未知
        power_data.auto_shutdown = ie(data, 9)  # 是否充满关机
        power_data.shutdown_current = ie(data, 13)  # 充满关机电流
        power_data.is_ntc = data[17]  # NTC 0=电源 1=控制板
        power_data.screen_orientation = data[18]  # 屏幕方向
        power_data.min_current_filter = .01 * data[19]  # 最小电流过滤
    elif mode == 0x17:
        power_data.zte4875_display_voltage_offset = .01 * ie(data, 1)  # ZTE4875 显示补偿电压2
        power_data.zte4875_voltage_offset = .01 * ie(data, 5)  # ZTE4875 设置补偿电压2
        power_data.voltage_jump_buffer = ie(data, 9)  # 电压跳动缓冲
        power_data.current_jump_buffer = ie(data, 13)  # 电流跳动缓冲
        power_data.would_user_set_logo = data[17]  # 允许用户设置LOGO
        power_data.support_protocol = data[18]  # 支持协议
        # wt = data[19] # 未知
    elif mode == 0x18:
        power_data.per_charge_voltage = ie(data, 1)  # 预充电电压
        power_data.per_charge_current = ie(data, 5)  # 预充电电流
    elif mode == 0x20:
        power_data.ble_name = read_c_string_from_bytes(data[1:20])  # 蓝牙名称
    elif mode == 0x21:
        power_data.ble_password = read_c_string_from_bytes(data[1:20])  # 蓝牙密码
    elif mode == 0x22:
        power_data.wifi_name = read_c_string_from_bytes(data[1:20])  # WIFI名称
    elif mode == 0x23:
        power_data.wifi_password = read_c_string_from_bytes(data[1:20])  # WIFI密码
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


def switch_protocol(client, protocol: str, chip_id: str = None):
    """
    切换协议
    huawei
    increase
    zte3000
    infy
    eps6020
    zte4875 : need chip_id
    :param chip_id:
    :param client:
    :param protocol:
    :return:
    """
    maps = {
        'huawei': 0x01,
        'increase': 0x02,
        'zte3000': 0x04,
        'infy': 0x08,
        'eps6020': 0x10,
        'zte4875': 0x20,
    }
    if not chip_id:
        e = int(chip_id, 16)
        a = str(e)
        n = 0
        for i in a:
            n += ord(i)
        send_data(client, b'\xC8\x3F' + (int((e // 611) * n) & 0xFFFFFF).to_bytes(3, byteorder='big'))

    send_data(client, b'\xFC\x53' + maps[protocol].to_bytes(2, byteorder='big') + b'\x01')
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


def set_temp_limit_join(client, limit: int):
    """
    设置进入超温限制温度
    0-255
    :param client:
    :param limit:
    :return:
    """
    send_data(client, b'\xF8\x4A' + limit.to_bytes(1, byteorder='big'))
    send_end(client)


def set_temp_limit_exit(client, limit: int):
    """
    设置退出超温限制温度
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


def set_current_voltage_offset(client, offset: float, slot: int, power_type: int, set_voltage: float,
                               set_current: float, output_voltage: float):
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
    e = round(offset / output_voltage, 4)
    a = round(offset / set_voltage, 4)
    send_data(client, b'\xC3' + int(100 * (100 * a)).to_bytes(4, byteorder='big') + int(100 * (100 * e)).to_bytes(4,
                                                                                                                  byteorder='big'))
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
    send_data(client, b'\xA8' + slot.to_bytes(1, byteorder='big') + int(100 * (50 * a)).to_bytes(4, byteorder='big') + (
                set_current * 100).to_bytes(4, byteorder='big'))
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


def set_zte4875_voltage_offset_auto(client, offset: float, output_voltage: int):
    """
    自动zte4875第二电压校准
    :param client:
    :param offset: 当前电压
    :param output_voltage: 设置电压
    :return:
    """
    send_data(client, b'\xC2')
    send_end(client)
    e = round(offset / output_voltage, 4)
    send_data(client, b'\xC4' + int(100 * (100 * round(offset / output_voltage, 4))).to_bytes(4, byteorder='big') + int(
        100 * (100 * e)).to_bytes(4, byteorder='big'))
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
    send_data(client, b'\xC5' + int(100 * (100 * round(offset / set_current, 4))).to_bytes(4, byteorder='big') + int(
        100 * (100 * e)).to_bytes(4, byteorder='big'))
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
    send_data(client,
              b'\xA8' + slot.to_bytes(1, byteorder='big') + int(voltage * 100).to_bytes(4, byteorder='big') + int(
                  current * 100).to_bytes(4, byteorder='big'))
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


def send_password(client, password: str):
    """
    发送密码
    :param client:
    :param password:
    :return:
    """
    send_data(client, b'\xA0' + password.encode('utf-8'))
    send_end(client)


def send_act_time(client, time: str):
    """
    发送激活时间
    :param client:
    :param time:
    :return:
    """
    send_data(client, b'\xFD\x48' + time.encode('utf-8'))
    send_end(client)


def get_system_password(device_id):
    """
    获取系统密码
    :param device_id:
    :return:
    """
    if not device_id:
        return ''
    return hex(int(device_id, 16) + 19880914)[6:10]


def set_enable_custom_background(client, enable: bool):
    """
    设置是否启用自定义背景(隐藏功能，不知道能否使用)
    :param client:
    :param enable:
    :return:
    """
    send_data(client, b'\xF9\x67' + (b'\x00' if enable else b'\x01'))
    send_end(client)


def set_custom_logo(client, logo_offset: int, logo: bytes):
    """
    设置自定义logo
    :param client:
    :param logo_offset: 0=开机图片(jpg:240x240) 1=待机图片(jpg:73x73) 2=充电动图(gif:73x73)
    :param logo: max 20KB
    :return:
    """
    maps = {
        0: 'start.jpg',
        1: 'logo.jpg',
        2: 'logo.gif',
    }
    send_data(client, b'\xF1' + maps[logo_offset].encode('utf-8'))
    for i in range(0, len(logo), 240):
        send_data(client, b'\xF2' + logo[i:i + 240])
    send_data(client, b'\xF3')

def set_per_charge_voltage(client, voltage: float):
    """
    设置预充电压
    :param client:
    :param voltage:
    :return:
    """
    send_data(client, b'\xF8\xF6' + int(voltage * 100).to_bytes(4, byteorder='big'))
    send_end(client)

def set_per_charge_current(client, current: float):
    """
    设置预充电流
    :param client:
    :param current:
    :return:
    """
    send_data(client, b'\xF8\xF5' + int(current * 100).to_bytes(4, byteorder='big'))
    send_end(client)


stop = False


async def read_input():
    session = PromptSession()

    with patch_stdout():
        while True:
            text = await session.prompt_async('Enter text: ')
            print(f"You entered: {text}")
            # 在这里可以根据输入的文本执行相应的逻辑

            # 如果输入特定的文本，退出循环
            if text.lower() == 'quit':
                global stop
                stop = True
                break

async def main():
    global stop
    print("Start")
    try:
        devices = await BleakScanner.discover()

        address = ""
        for d in devices:
            if d.name and d.name.startswith("CAN"):
                address = d.address
                print(d.__str__())
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
                os.system('cls')
                print(
                    f'激活时间: {power_data.activation_time} 系统密码: {get_system_password(power_data.chip_id)} 版本: {power_data.ver}-{power_data.sub_ver} 协议: {power_data.can} 芯片ID: {power_data.chip_id} 英文: {power_data.is_english} 交换上下按键: {power_data.swap_key} NTC: {power_data.is_ntc}')
                print(
                    f'电池电量: {power_data.soc}% 电压: {power_data.output_voltage}V 电流: {power_data.output_current}A 功率: {power_data.output_power}W')
                print(
                    f'充电时间: {power_data.timer} 累计时间: {power_data.total_timer} 关机剩余时间: {power_data.power_off_timer} 开机状态: {power_data.power_status} 背景图: {power_data.background_image}')
                print(
                    f'二段电压: {power_data.second_voltage} 二段电流: {power_data.second_current} 系统功率限制: {power_data.system_power_limit} 初始页面时间: {power_data.init_page_time} 是否显示倒计时: {power_data.init_page_show_timer} 息屏时间: {power_data.sleep_time}')
                print(
                    f'超温限制功率: {power_data.over_temp_power_limit} 超温进入: {power_data.over_temp_enter} 超温退出: {power_data.over_temp_exit} 关机亮度: {power_data.shutdown_backlight} 屏幕亮度: {power_data.screen_backlight} 息屏亮度: {power_data.sleep_backlight}')
                print(
                    f'电流下限: {power_data.current_min_limit} 电流上限: {power_data.current_max_limit} 电压下限: {power_data.voltage_min_limit} 电压上限: {power_data.voltage_max_limit} 风速温度加速值: {power_data.fan_temp_acceleration} 初始风速值: {power_data.fan_init_speed} 电流加速值: {power_data.current_temp_acceleration}')
                print(
                    f'显示补偿电压: {power_data.display_voltage_offset} 显示补偿电流: {power_data.display_current_offset} 设置电压补偿: {power_data.voltage_offset} 设置电流补偿: {power_data.current_offset} 缓启时间: {power_data.soft_start_timer} 是否显示GIF: {power_data.show_gif} 二段电流缓降: {power_data.second_current_decrease}')
                print(
                    f'是否充满关机: {power_data.auto_shutdown} 充满关机电流: {power_data.shutdown_current} NTC: {power_data.is_ntc} 屏幕方向: {power_data.screen_orientation} 最小电流过滤: {power_data.min_current_filter}')
                print(
                    f'ZTE4875 显示补偿电压2: {power_data.zte4875_display_voltage_offset} ZTE4875 设置补偿电压2: {power_data.zte4875_voltage_offset} 电压跳动缓冲: {power_data.voltage_jump_buffer} 电流跳动缓冲: {power_data.current_jump_buffer} 允许用户设置LOGO: {power_data.would_user_set_logo} 支持协议: {power_data.support_protocol}')
                print(
                    f'蓝牙名称: {power_data.ble_name} 蓝牙密码: {power_data.ble_password} WIFI名称: {power_data.wifi_name} WIFI密码: {power_data.wifi_password}')
                print(
                    f'电压跳变缓冲: {power_data.voltage_jump_buffer} 电流跳变缓冲: {power_data.current_jump_buffer} 电流最小过滤: {power_data.min_current_filter}')
                print(
                    f'显示电压补偿: {power_data.display_voltage_offset} 电压补偿: {power_data.voltage_offset} 软启动时间: {power_data.soft_start_timer} 是否显示GIF: {power_data.show_gif}')
                print(f'电流显示补偿: {power_data.display_current_offset} 电流补偿: {power_data.current_offset}')
                if stop:
                    loop.stop()
                    break
                await asyncio.sleep(1)
    except Exception as e:
        print(f"Error: {e}")


loop = asyncio.get_event_loop()
loop.run_until_complete(asyncio.gather(read_input(), main()))
