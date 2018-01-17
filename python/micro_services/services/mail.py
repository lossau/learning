import smtplib
from email.mime.text import MIMEText
from nameko.rpc import rpc, RpcProxy


class Email(object):
    name = "mail"

    logger = RpcProxy('logger')

    @rpc
    def send(self, to, subject, contents):

        payload = MIMEText(contents)
        me = "test@email.com"

        payload['Subject'] = subject
        payload['From'] = me
        payload['To'] = to

        try:
            server = smtplib.SMTP('smtp.gmail.com:587')
            username = ""
            password = ""
            server.starttls()
            server.login(username, password)
            server.sendmail(me, [to], payload.as_string())
        except Exception as e:
            self.logger.log_error("Unable to send email - {0}".format(e))
        else:
            self.logger.log_info("Email sent successfully")

        server.quit()
