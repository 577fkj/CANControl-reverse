import requests
import os
import json
import hashlib

CANControl_save_path = 'CANControl'
NewUI_save_path = 'NewUI'
NewTest_save_path = 'NewTest'
Test2_save_path = 'Test2'
DEVID_save_path = 'devid'

if not os.path.exists(CANControl_save_path):
    os.makedirs(CANControl_save_path)
if not os.path.exists(NewUI_save_path):
    os.makedirs(NewUI_save_path)
if not os.path.exists(NewTest_save_path):
    os.makedirs(NewTest_save_path)
if not os.path.exists(Test2_save_path):
    os.makedirs(Test2_save_path)
if not os.path.exists(DEVID_save_path):
    os.makedirs(DEVID_save_path)

# CANControl.bin
# NewUI.bin
# NewTest.bin
# Test2.bin
# DEVID.bin
base_url = 'http://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc={}'

def md5(data: bytes) -> str:
    m = hashlib.md5()
    m.update(data)
    return m.hexdigest()

def get_version(data: bytes) -> str:
    # find version string '00 35 2E ? ? 00'
    versions = []
    for i in range(len(data) - 5):
        if (data[i] == 0x00 and 
            data[i + 1] == 0x35 and 
            data[i + 2] == 0x2E and 
            data[i + 5] == 0x00 and
            0x30 <= data[i + 3] <= 0x39 and
            0x30 <= data[i + 4] <= 0x39):
            versions.append(float(data[i + 1:i + 5].decode('utf-8')))
    
    if not versions:
        return 'Unk'
    
    versions.sort(reverse=True)
    version = versions[0]
    return f"{version:.2f}"

def download(count: int, file: str) -> bytes:
    if not file.endswith('.bin'):
        file += '.bin'  
    if count == -1:
        count = ''
    url = base_url.format(count, file)
    r = requests.get(url)
    if r.status_code != 200:
        print(f'Error({count}): {r.status_code}')
        return None
    data = r.content
    return data

def save_file(name: str, data: bytes):
    with open(name, 'wb') as f:
        f.write(data)
    print(f'Saved {name}')

def download_fw(count: int, file: str, save_path: str, file_name_count: int = -1) -> dict:
    data = download(count, file)
    if data is None:
        return {
            'count': count,
            'version': 'Unk',
            'md5': 'Unk',
            'size': 0
        }
    if count == -1:
        count = file_name_count
    m5 = md5(data)
    version = get_version(data)
    file_name = f"{count}_{file}_{version}_{m5}.bin"
    return {
        'count': count,
        'version': version,
        'md5': m5,
        'size': len(data),
        
        'data': data,
        'path': os.path.join(save_path, file_name)
    }

def download_device_id(count: str, file: str, save_path: str, file_name_count: int = -1) -> dict:
    data = download(count, file)
    if data is None:
        return {
            'count': count,
            'md5': 'Unk',
            'device_id_count': 0,
            'size': 0
        }
    if count == -1:
        count = file_name_count
    m5 = md5(data)
    file_name = f"{count}_{file}_{m5}.bin"
    return {
        'count': count,
        'md5': m5,
        'device_id_count': len([device_id for device_id in data.decode().split(' ') if device_id != '']),
        'size': len(data),

        'data': data,
        'path': os.path.join(save_path, file_name)
    }

def download_file(result: list, file: str, save_path: str, start: int, max_count: int = 999):
    print(f'Downloading {file} from {start} to {max_count}')

    download = download_fw
    if file == 'DEVID':
        download = download_device_id

    error_count = 0
    error_info = []
    for i in range(start, max_count):
        info = download(i, file, save_path)
        if info['size'] == 0:
            error_info.append(info)
            error_count += 1
            if error_count > 5:
                print('Too many errors, stopping download')
                count = result[-1]['count'] + 1
                last = download(-1, file, save_path, count)
                last['count'] = count
                if result[-1]['md5'] == last['md5']:
                    print('Last file is the same as the last one, skipping')
                else:
                    save_file(last['path'], last['data'])
                    del last['data']
                    del last['path']
                    result.append(last)
                break
        else:
            for j in range(len(error_info)):
                result.append(error_info[j])
            error_info = []
            error_count = 0

            if len(result) > 0 and result[-1]['md5'] == info['md5']:
                print('File is the same as the last one, skipping')
                continue

            save_file(info['path'], info['data'])
            del info['data']
            del info['path']

            result.append(info)

def download_all(max_count: int = 999):
    bin_info = load_bin_info()
    CANControl = bin_info['CANControl']
    NewUI = bin_info['NewUI']
    NewTest = bin_info['NewTest']
    Test2 = bin_info['Test2']
    DEVID = bin_info['DEVID']

    CANControl_start = CANControl[-1]['count'] if CANControl else 0
    NewUI_start = NewUI[-1]['count'] if NewUI else 0
    NewTest_start = NewTest[-1]['count'] if NewTest else 0
    Test2_start = Test2[-1]['count'] if Test2 else 0
    DEVID_start = DEVID[-1]['count'] if DEVID else 0

    try:
        download_file(CANControl, 'CANControl', CANControl_save_path, CANControl_start, max_count)
        download_file(NewUI, 'NewUI', NewUI_save_path, NewUI_start, max_count)
        download_file(NewTest, 'NewTest', NewTest_save_path, NewTest_start, max_count)
        download_file(Test2, 'Test2', Test2_save_path, Test2_start, max_count)
        download_file(DEVID, 'DEVID', DEVID_save_path, DEVID_start, max_count)
    finally:
        bin_info['CANControl'] = CANControl
        bin_info['NewUI'] = NewUI
        bin_info['NewTest'] = NewTest
        bin_info['Test2'] = Test2
        bin_info['DEVID'] = DEVID
        save_bin_info(bin_info)

def load_bin_info() -> dict:
    if os.path.exists('bin_info.json'):
        with open('bin_info.json', 'r') as f:
            bin_info = json.load(f)
            print('Loaded bin_info.json')
            return bin_info
    else:
        return {
            'CANControl': [],
            'NewUI': [],
            'NewTest': [],
            'Test2': [],
            'DEVID': []
        }

def save_bin_info(bin_info: dict):
    with open('bin_info.json', 'w') as f:
        json.dump(bin_info, f, indent=4)
    print('Saved bin_info.json')

if __name__ == '__main__':
    download_all()