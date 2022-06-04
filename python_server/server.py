from flask import Flask,request,redirect
import mysql.connector
import qrcode
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.base import MIMEBase
from email import encoders
mydb = mysql.connector.connect(
  host ="localhost",
  user ="root",
  password ="",
  database="kncet_mess"
)

def sendEmail(to, content,m):
    msg = MIMEMultipart()
    msg['Subject'] = 'Mess Token'
    msg['From'] = 'tecboy2020@gmail.com'
    msg['To'] = to
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    body=m
    msgText = MIMEText('<b>%s</b>' % (body), 'html')
    msg.attach(msgText)
    # Enable low security in gmail
      # Open PDF file in binary mode
    filename="mess.png"
    with open(content, "rb") as attachment:
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

















def register(username,password):
    mycursor = mydb.cursor()
    mycursor.execute("SELECT username FROM new_mess where username='"+username+"'")
    myresult = mycursor.fetchall()
    if(len(myresult)==0):
        mycursor1 = mydb.cursor()
        sql = "INSERT INTO new_mess (username, password) VALUES (%s, %s)"
        val = (username,password)
        mycursor1.execute(sql, val)
        mydb.commit()
        username=username.split("@")[0]
        mycursor2 = mydb.cursor()
        mycursor2.execute("create table "+username+"(veg int,non_veg int,total_token int,date text,transid text,total_amount int)")
        return 1
    else:
        return 0
        

userid=""
passid=""
def setPass(r,r1):
    userid=r
    passid=r1
def login(username,paw):
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * from new_mess where username='"+username+"'")
    b= mycursor.fetchall()
    if(len(b)==1):
        if(b[0][1]==paw):
            return 1
        else:
            return -1
    else:
        print("please register")
        return  0
    

    
app = Flask(__name__)

@app.route('/Login',methods=['POST'])

def Login():
 
    if(request.method=='POST'):
        r=request.form['username']
        r1=request.form['12345']
        res=login(r,r1)
        if(res==1):
            return redirect("http://localhost:3000/mess?"+r+"|"+r1)
        
        elif(res==-1):
            return redirect("http://localhost:3000?passnot")
        else:
            return redirect("http://localhost:3000?usernot")
                    
    return "404 page"

@app.route('/',methods=['POST'])
def Register():
 
    if(request.method=='POST'):
        r=request.form['username']
        r1=request.form['12345']
        res=register(r,r1)
    
      
    if(res==1):
        return redirect("http://localhost:3000/mess?"+r+"|"+r1)
    else:
        return redirect("http://localhost:3000/signup?already")

    
@app.route('/getinfo',methods=['POST'])
def GetInfo():
    if(request.method=='POST'):
        r=request.form["veg"]
        r1=request.form["nonveg"]
        r2=int(r)+int(r1)
        r=int(r)/60
        r1=int(r1)/70
        r3=request.form["date"].replace("%20"," ")
        r4=request.form["username"].replace("%20"," ")
        r5=request.form["password"].replace("%20"," ")
        r6=request.form["id"].replace("%20"," ")
        print(r,r1,r2,r3,r4,r5,r6)
        fn=r4.split("@")[0]
        m=str(r3)+ "- "+str(r)+" Veg Tokens, "+str(r1)+" - "+" Non Veg Token  "+ "Total="+str(r2)
        if(login(r4,r5)==1):
             mycursor1 = mydb.cursor()
             sql = "INSERT INTO "+ fn +" VALUES (%s, %s,%s,%s,%s,%s)"
             val = (r,r1,r+r1,r3,r6,r2)
             mycursor1.execute(sql, val)
             mydb.commit()
             img = qrcode.make(r4+"|"+r6)
             img.save(fn+".png")
             sendEmail(r4,fn+".png",m)
             
             return redirect("http://localhost:3000/mess?"+r4+"|"+r5)
            
        
        return "404 page"


    
@app.route('/admin',methods=['POST'])
def adminpage():
     if(request.method=='POST'):
            
        r=request.form["id1"]
        print(r+"guhj")
        return "gg"
    
# main driver function
if __name__ == '__main__':
  
    # run() metd of Flask class runs the application 
    # on the local development server.
    app.run()
