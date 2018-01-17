# -*- coding: utf-8 -*-
# Tendo uma lista1[1,2,3] e lista2[None,4,None] é necessário fazer o seguinte calculo
# elemento da lista1 * elemento da lista 2. Obs. o valor None deve ser considerado 0.

# A saida deve ser: [0, 8, 0]

l1, l2 = [1, 2, 3], [None, 4, 3]
lr = []

for i, v1 in enumerate(l1):
    v2 = 0 if l2[i] is None else l2[i]
    lr.append(v1 * v2)

print lr
