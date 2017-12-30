# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup
from sets import Set

names = Set()

with open('names-is-male.html', 'rb') as file:
    soup = BeautifulSoup(file, 'html.parser')

    for row in soup.find_all('li'):
        splitted = row.get_text().split(' ')
        if len(splitted) == 4:
            name = splitted[0]
            info = '{} {}'.format(splitted[2].encode('utf8'), splitted[3].encode('utf8'))
            names.add((name, info))
        else:
            names.add(row.get_text())

with open('names-male-is.json', 'wb') as output:
    output.write('{\n')
    for info in names:
        if len(info) == 2:
            print info
            output.write('\t"{}": {{\n'.format(info[0].encode('utf8')))
            output.write('\t\t"type": "male",\n')
            output.write('\t\t"info": "{}"\n'.format(info[1]))
        else:
            output.write('\t"{}": {{\n'.format(info.encode('utf8')))
            output.write('\t\t"type": "male"\n')
        output.write('\t},\n')
    output.write('}')
