import os

services_path = "./services"
services = []

for file in os.listdir(services_path):
    if file.endswith(".py"):
        services.append(file[:-3])

shell_command = "nameko run {0}".format(" ".join(services))

os.chdir(services_path)
os.system(shell_command)
