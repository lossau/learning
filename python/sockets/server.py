import socket

HOST = ''
PORT = 5000
udp = socket.socket(
    socket.AF_INET,
    socket.SOCK_DGRAM)

udp.bind((HOST, PORT))

while True:
    msg, client = udp.recvfrom(1024)

    # if msg.startswith('+'):
    #     soma = int(msg[2]) + int(msg[4])
    #     print soma
    # elif msg.startswith('-'):
    #     dif = int(msg[2]) - int(msg[4])
    #     print dif
    print msg

udp.close()
