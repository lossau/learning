from nameko.rpc import rpc, RpcProxy


class Compute(object):
    name = "compute"
    mail = RpcProxy('mail')
    logger = RpcProxy('logger')

    @rpc
    def calculate(self, operation, value, other, email_addr=""):
        operations = {'sum': lambda x, y: x + y,
                      'mul': lambda x, y: x * y,
                      'div': lambda x, y: x / y,
                      'sub': lambda x, y: x - y}
        try:
            result = operations[operation](value, other)
        except Exception as e:
            self.logger.log_error("Unable to calculate - {0}".format(e))
            if email_addr != "":
                self.mail.send.async(
                    email_addr,
                    "An error occurred during calculation",
                    str(e))
        else:
            self.logger.log_info("Result computed successfully: {0}".format(result))
            if email_addr != "":
                self.mail.send.async(
                    email_addr,
                    "Your operation is complete!",
                    "The result is: %s" % result)
            return result
