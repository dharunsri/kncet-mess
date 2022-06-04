import React, {useState} from "react";
import "./Payment.css";

var amt = window.location.search.substring(1).split("|");
const total=parseInt(amt[0])+parseInt(amt[1]);

function myFunction(s)
{
    var formData = new FormData(); 
    formData.append("veg",amt[0]);
    formData.append("nonveg",amt[1]);
    formData.append("date",amt[2])
    formData.append("username",amt[3])
    formData.append("password",amt[4])
    formData.append("id",s)
    
    var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function()
        {
            if(xmlHttp.readyState === 4 && xmlHttp.status === 200)
            {
                alert(xmlHttp.responseText);
            }
        }
        xmlHttp.open("post", "http://127.0.0.1:5000/getinfo"); 
        xmlHttp.send(formData); 
}

function Payment(){

    const handleSubmit = (e) =>{
      e.preventDefault();
      var options = {
          key: "rzp_test_ja2fMuG74ap9Gc",
          key_secret: "yItRgDJtqb5WbnPMOiUdneKE",
          amount: total*100,
          currency: "INR",
          name: "KNCET",
          description: "Mess Food Token Booking",
          handler: function(response){
              myFunction(response.razorpay_payment_id);
              window.location.replace("http://localhost:3000/");
            
          },
          prefill: {
              name:"KNCET",
              email: "tecboy2020@gmail.com",
              contact:"8489335923"
          },
          notes:{
              address: "Namakkal-Trichy State Highway, Tholurpatti Post, Thottiam Taluk Trichy District, TamilNadu"
          },
          theme:{
              color:"#3399cc"
          }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }

    return(
        <>
        <div>
            <h5 className="amount-title">Total Amount You Need To Pay</h5>
            <h1>{total}</h1><br/>
            <button className="pay-button" onClick={handleSubmit}>Proceed To Pay</button>
        </div>
        </>
    );
}


export default Payment;