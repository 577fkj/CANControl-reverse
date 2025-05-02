import requests
import os

url = 'http://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=CANControl.bin'
new_ui = 'http://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=NewUI.bin'
test_new_ui = 'http://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=NewTest.bin'
test2_new_ui = 'http://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=Test2.bin'

devid = 'https://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=DEVID.bin'

def get_version(data):
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
    print(f'Version: {version:.2f}')
    return f"{version:.2f}"

def download(url, file_name, save_dir, bin_id, next_bin = None, find_version = True):
    r = requests.get(url.format(bin_id))
    if r.status_code != 200:
        print(f'Error({bin_id}): {r.status_code}')
        return False
    data = r.content
    file_id = bin_id if not next_bin else next_bin
    name = f'{file_name}_{file_id}.bin'
    if find_version:
        version = '_' + get_version(data)
    else:
        version = ''
    if os.path.exists(f'{save_dir}/{name}'):
        os.remove(f'{save_dir}/{name}')
    name = f'{file_id}_{file_name}{version}.bin'
    print(url.format(bin_id))
    print(f'Saving {name}')
    with open(f'{save_dir}/{name}', 'wb') as f:
        f.write(data)
    return True

def download_new_ui(bin_id, next_bin = None):
    return download(new_ui, 'NewUI', 'bin_new', bin_id, next_bin)

def download_bin(bin_id, next_bin = None):
    return download(url, 'CANControl', 'bin', bin_id, next_bin)

def download_test_new_ui(bin_id, next_bin = None):
    return download(test_new_ui, 'NewTest', 'bin_test', bin_id, next_bin)

def download_test2_new_ui(bin_id, next_bin = None):
    return download(test2_new_ui, 'Test2', 'bin_test2', bin_id, next_bin)

def download_devid(bin_id, next_bin = None):
    return download(devid, 'DEVID', 'devid', bin_id, next_bin, False)

new_files = os.listdir('bin_new')
test_files = os.listdir('bin_test')
test2_files = os.listdir('bin_test2')
files = os.listdir('bin')
devid_files = os.listdir('devid')

new_files = [int(f.split('_')[0]) for f in new_files]
test_files = [int(f.split('_')[0]) for f in test_files]
test2_files = [int(f.split('_')[0]) for f in test2_files]
files = [int(f.split('_')[0]) for f in files]
devid_files = [int(f.split('_')[0]) for f in devid_files]

new_files.sort()
test_files.sort()
test2_files.sort()
files.sort()
devid_files.sort()

new_start = new_files[-1] if new_files else 1
test_start = test_files[-1] if test_files else 1
test2_start = test2_files[-1] if test2_files else 1
start = files[-1] if files else 1
devid_start = devid_files[-1] if devid_files else 1

print(f'New start: {new_start}')
print(f'Test start: {test_start}')
print(f'Test2 start: {test2_start}')
print(f'Bin start: {start}')
print(f'Devid start: {devid_start}')

for i in range(start, 999):
    if not download_bin(i):
        download_bin('', i)
        break

for i in range(new_start, 999):
    if not download_new_ui(i):
        download_new_ui('', i)
        break

for i in range(test_start, 999):
    if not download_test_new_ui(i):
        download_test_new_ui('', i)
        break

for i in range(test2_start, 999):
    if not download_test2_new_ui(i):
        download_test2_new_ui('', i)
        break

for i in range(devid_start, 999):
    if not download_devid(i):
        download_devid('', i)
        break

if __name__ == '__main__':
    print('Done')