from datetime import datetime

import requests

url = 'http://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=CANControl.bin'

def download_bin(bin_id, next_bin = None):
    r = requests.get(url.format(bin_id))
    if r.status_code != 200:
        print(f'Error({bin_id}): {r.status_code}')
        return False
    data = r.content
    name = bin_id if not next_bin else next_bin
    name = f'CANControl_{name}.bin'
    print(f'Saving {name}')
    with open(f'bin/{name}', 'wb') as f:
        f.write(data)
    return True

for i in range(1, 200):
    if not download_bin(i):
        download_bin('', i)
        break

if __name__ == '__main__':
    print('Done')