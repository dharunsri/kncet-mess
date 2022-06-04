import React from "react";
import {useNavigate} from "react-router-dom";
import './LoginPage.css';

var amt = window.location.search.substring(1);
var amt1,amt2;
// if("usernot"==amt)
//       document.getElementsById("usr").style.display="inline"
if("usernot"===amt){
    amt2="inline"
}else{
    amt2="none"
}
if("passnot"===amt){
    amt1="inline"
}else{
    amt1="none"
}


function LoginPage(){
    const navigate = useNavigate();

    const admin = () => {
        navigate('/Admin');
    }

    const SignUpPage = () => {
        navigate('/signup');
    }



    return(
        <>
            <p onClick={admin}>Go to admin page</p>
            <h3 className="login-title">LOGIN</h3>

            <div className="login page">
                <form action="http://127.0.0.1:5000/Login" method="post">
                <input placeholder="Enter your mail id" className="username" type="email" required name="username" /><br/>
                <p id="usr" style={{display:amt2}} className="usr-error">user not found</p>        
                <input placeholder="Strong Password" className="password" required type="password" name="12345"/><br/>
                <p className="pass-error" style={{display:amt1}}>mismatch password</p> 
                <button className="login-btn" >Login</button><br/>
                <p className="new">New user? </p>
                <p className="reg" onClick={SignUpPage}> Register now</p>
                </form>
            </div>
            
            
            
        </>
    )
}

export default LoginPage;