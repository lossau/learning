from random import randint


def naive(a, b):
    x = a
    y = b
    z = 0
    while x > 0:
        z = z + y
        x = x - 1
    return z


def russian(a, b):
    x = a
    y = b
    z = 0
    while x > 0:
        if x % 2 == 1:
            z = z + y
        x = x >> 1
        y = y << 1
    return z

for i in range(10):
    a = randint(0, 999)
    b = randint(0, 999)
    print "{0}:{1} - {2}".format(
        a, b, russian(a, b))
