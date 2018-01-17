import random

min = 1
max = 6

jogar_denovo = "sim"

while jogar_denovo == "sim" or jogar_denovo == "s":
    print "Jogando os dados..."
    print "Os valores sao...."
    print random.randint(min, max)
    print random.randint(min, max)

    jogar_denovo = raw_input("Jogar os dados novamente?")
