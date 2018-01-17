# TODO
# juntar as linhas repetidas em uma so
# pegar e somar os precos

from xml.etree import cElementTree as etree
import pprint

with open('order.xml', 'rt') as f:
    tree = etree.parse(f)

products = {}
products_tmp = {}

for node in tree.findall('.//SaleLine'):

    name = node.attrib.get('productName')
    line = node.attrib.get('lineNumber')
    qty = node.attrib.get('qty')
    variation = node.attrib.get('variation')
    addedQty = node.attrib.get('addedQty')
    level = node.attrib.get('level')
    itemPrice = node.attrib.get('itemPrice')

    if level == '0':
        if int(qty) > 0:

            if not products:
                # products[line] = {'name': name, 'qty': qty, 'price': itemPrice, 'sub': []}
                products_tmp[line] = {'name': name, 'qty': qty, 'price': itemPrice, 'sub': []}
            else:
                for key in products:
                    if name in products[key].values():
                        products[key]['qty'] = str(int(products[key]['qty']) + 1)
                    else:
                        # products[line] = {'name': name, 'qty': qty, 'price': itemPrice, 'sub': []}
                        products_tmp[line] = {'name': name, 'qty': qty, 'price': itemPrice, 'sub': []}
    elif level == '1':
        if variation == 'No/Remove':
            status = 'removed'
            name = name[3:]
            products_tmp[line]['sub'].append({'name': name, 'status': status})
        elif int(addedQty) > 0:
            status = 'added'
            print name
            products_tmp[line]['sub'].append({'name': name, 'status': status})
    elif level == '2':
        if int(qty) > 0:
            products_tmp[line]['sub'].append({'name': name, 'qty': qty})


for key in products_tmp:
    products[key] = products_tmp[key]

pprint.pprint(products)

print '---------------------------------------------------------------------------------'

result = {}
for key, value in products.items():
    if value not in result.values():
        result[key] = value
    else:
        for k, v in result.items():
            if value in result.values() and v == value:
                print k, key
                result[k]['qty'] = str(int(result[k]['qty']) + 1)

pprint.pprint(result)
