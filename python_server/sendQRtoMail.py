import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.base import MIMEBase
from email import encoders

def sendEmail(to, content):
    msg = MIMEMultipart()
    msg['Subject'] = 'Mess Token'
    msg['From'] = 'tecboy2020@gmail.com'
    msg['To'] = to
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    body="Mess Token"
    msgText = MIMEText('<b>%s</b>' % (body), 'html')
    msg.attach(msgText)
    # Enable low security in gmail
      # Open PDF file in binary mode
    filename="mess.png"
    with open(filename, "rb") as attachment:
        part = MIMEBase("application", "octet-stream")
        part.set_payload(attachment.read())
    encoders.encode_base64(part)

    part.add_header(
                    "Content-Disposition",
                    f"attachment; filename= {filename}",
            )

    msg.attach(part)
    server.login('tecboy2020@gmail.com', 'pjlndpderifzsjgx')
    server.sendmail('tecboy2020@gmail.com', to, msg.as_string())
    server.close()
    print("successfully")
sendEmail('arunsundarkongu@gmail.com',"")
