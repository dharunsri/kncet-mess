import React, {useState} from "react";
import "./Payment.css";

function Payment(){
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) =>{
      e.preventDefault();
      var options = {
          key: "rzp_test_ja2fMuG74ap9Gc",
          key_secret: "yItRgDJtqb5WbnPMOiUdneKE",
          amount: amount*100,
          currency: "INR",
          name: "KNCET",
          description: "Mess Food Token Booking",
          handler: function(response){
              alert(response.razorpay_payment_id);
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
            <input className="amount-field" placeholder="Enter Amount" type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} /> <br/>
            <button className="pay-button" onClick={handleSubmit}>Proceed To Pay</button>
        </div>
        </>
    );
}


export default Payment;