import requests

url = 'http://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=CANControl.bin'
new_ui = 'http://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=NewUI.bin'
test_new_ui = 'http://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=NewTest.bin'

def download(url, file_name, save_dir, bin_id, next_bin = None):
    r = requests.get(url.format(bin_id))
    if r.status_code != 200:
        print(f'Error({bin_id}): {r.status_code}')
        return False
    data = r.content
    name = bin_id if not next_bin else next_bin
    name = f'{file_name}_{name}.bin'
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

for i in range(1, 200):
    if not download_bin(i):
        download_bin('', i)
        break

for i in range(1, 200):
    if not download_new_ui(i):
        download_new_ui('', i)
        break

for i in range(1, 200):
    if not download_test_new_ui(i):
        download_test_new_ui('', i)
        break

if __name__ == '__main__':
    print('Done')