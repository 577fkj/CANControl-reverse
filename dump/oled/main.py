import json
import os
import re

with open("dump.txt", 'r') as f:
    dump = f.read()

with open('map.txt', 'r') as f:
    maps = f.read()

mapt = maps.split('\n')
maps = {}
for i in mapt:
    tmp = i.split(' ')
    if tmp[0] == '':
        continue
    if len(tmp) == 2:
        maps[tmp[0].replace('\n', '')] = tmp[1].replace('\n', '')
    else:
        maps[tmp[0]] = ''

print(json.dumps(maps, indent=4))

def replace_with_keys(data: str, key: str, new_data: str, index=0):
    int_str = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    next_inedx = data.find(key, index)
    if next_inedx == -1:
        return data
    if len(key) == 2 and key[-1] in int_str and next_inedx+len(key) < len(data) and data[next_inedx+len(key)] in int_str:
        return replace_with_keys(data, key, new_data, next_inedx+len(key))
    else:
        data = data[:next_inedx] + new_data + data[next_inedx+len(key):]
        return replace_with_keys(data, key, new_data, next_inedx+len(new_data))

dump = dump.split('\n')

if not os.path.exists('output'):
    os.mkdir('output')

curr_file = None

result = []

for i in range(len(dump)):
    if dump[i] == '':
        result.append('')
        continue

    if dump[i].startswith('<S>'):
        print(dump[i].replace('<S>', ''))
        name = dump[i].replace('<S>', '')
        if not name.endswith('.lua'):
            name += '.lua'
        curr_file = open('output/' + name, 'w')
        result.append("-- " + name)
        continue
    if dump[i].startswith('<E>'):
        curr_file.close()
        continue

    res = dump[i]
    for key in maps.keys():
        # dump = dump.replace(key, maps[key])
        res = replace_with_keys(res, key, maps[key])
    result.append(res)

    curr_file.write(res + '\n')

with open('fix.lua', 'w') as f:
    f.write('\n'.join(result))