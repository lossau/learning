import datetime
from nameko.rpc import rpc


class Logger(object):
    name = "logger"

    def __init__(self):
        self.timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")

    @rpc
    def log_error(self, payload):
        print("[ERROR] [{0}]: {1}".format(self.timestamp, payload))

    @rpc
    def log_info(self, payload):
        print("[INFO] [{0}]: {1}".format(self.timestamp, payload))
