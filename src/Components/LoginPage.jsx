import React from "react";
import {useNavigate} from "react-router-dom";
import './LoginPage.css';

function LoginPage(){
    const navigate = useNavigate();

    const mainPage = () => {
        navigate('/mess')
    }

    return(
        <>
            <h3 className="login-title">LOGIN</h3>

            <div className="login page">
                <input placeholder="Enter UserName" className="username" /><br/>
                <input placeholder="Strong Password" className="password" /><br/>
                <button className="login-btn" onClick={mainPage}>Login</button>
                <p className="forgot-pass">forgot password?</p>
            </div>
            
        </>
    )
}

export default LoginPage;