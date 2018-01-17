import socket

# HOST = '192.168.0.28'
HOST = '127.0.0.1'
PORT = 5000
udp = socket.socket(
    socket.AF_INET,
    socket.SOCK_DGRAM)

print 'Para sair use crtl+x\n'
msg = raw_input()
while msg != '\x18':
    udp.sendto(msg, (HOST, PORT))
    msg = raw_input()

udp.close()
