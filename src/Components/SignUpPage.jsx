import React from "react";
import {useNavigate} from "react-router-dom";
import './LoginPage.css';
var amt = window.location.search.substring(1);
var amt2;
// if("usernot"==amt)
//       document.getElementsById("usr").style.display="inline"
if("already"===amt){
    amt2="inline"
}else{
    amt2="none"
}
function SignUpPage(){
    const navigate = useNavigate();

    const Login = () => {
         navigate('/')
    }

    return(
        <>
            <h3 className="login-title">Register Now</h3>

            <div className="login page">
                <form action="http://127.0.0.1:5000" method="post">
                <input placeholder="Enter your mail id" className="username" type="email" required name="username" /><br/>
                <p className="usr-error" style={{display:amt2}}>already a user</p>
                <input placeholder="Strong Password" className="password" required type="password" name="12345"/><br/>
                <button className="login-btn" >SignUp</button><br/>
                <p className="new">Already a user? </p>
                <p className="reg" onClick={Login}> Login</p>
                </form>
            </div>
            
        </>
    )
}

export default SignUpPage;