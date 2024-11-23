import requests
import os

url = 'http://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=CANControl.bin'
new_ui = 'http://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=NewUI.bin'
test_new_ui = 'http://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=NewTest.bin'

def get_version(data):
    # find version string '00 35 2E ? ? 00'
    version = b'Unk'
    for i in range(len(data) - 5):
        if data[i] == 0x00 and data[i + 1] == 0x35 and data[i + 2] == 0x2E and data[i + 5] == 0x00:
            version = data[i + 1:i + 5]
            break
    return version.decode('utf-8')

def download(url, file_name, save_dir, bin_id, next_bin = None):
    r = requests.get(url.format(bin_id))
    if r.status_code != 200:
        print(f'Error({bin_id}): {r.status_code}')
        return False
    data = r.content
    file_id = bin_id if not next_bin else next_bin
    name = f'{file_name}_{file_id}.bin'
    version = get_version(data)
    if os.path.exists(f'{save_dir}/{name}'):
        os.remove(f'{save_dir}/{name}')
    name = f'{file_id}_{file_name}_{version}.bin'
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

new_files = os.listdir('bin_new')
test_files = os.listdir('bin_test')
files = os.listdir('bin')

new_files = [int(f.split('_')[0]) for f in new_files]
test_files = [int(f.split('_')[0]) for f in test_files]
files = [int(f.split('_')[0]) for f in files]

new_files.sort()
test_files.sort()
files.sort()

new_start = new_files[-1] if new_files else 1
test_start = test_files[-1] if test_files else 1
start = files[-1] if files else 1

print(f'New start: {new_start}')
print(f'Test start: {test_start}')
print(f'Bin start: {start}')

for i in range(start, 500):
    if not download_bin(i):
        download_bin('', i)
        break

for i in range(new_start, 500):
    if not download_new_ui(i):
        download_new_ui('', i)
        break

for i in range(test_start, 500):
    if not download_test_new_ui(i):
        download_test_new_ui('', i)
        break

if __name__ == '__main__':
    print('Done')