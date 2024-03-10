import requests

url = 'http://bin.bemfa.com/b/{}3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=CANControl.bin'

for i in range(200):
    r = requests.get(url.format(i))
    if r.status_code != 200:
        print(f'Error: {r.status_code}')
        continue
    print(f'Writing {i}')
    with open(f'bin\CANControl_{i}.bin', 'wb') as f:
        f.write(r.content)

if __name__ == '__main__':
    print('Done')