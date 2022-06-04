import React from "react";
import {useNavigate} from "react-router-dom";
import './AdminPage.css';

function AdminPage(){
    const navigate = useNavigate();


    const AllDetails = () => {
        navigate('/all-details');
    }

    return(
        <>
            <h3 className="Admin-title">ADMIN LOGIN</h3>

            <div className="Admin page">
                <form method="post">
                <input placeholder="Enter your mail id" className="username" type="email" required name="username" /><br/>
                <p className="usr-error">Admin not found</p>        
                <input placeholder="Strong Password" className="password" required type="password" name="12345"/><br/>
                <p className="pass-error">mismatch password</p> 
                <button className="Admin-btn" onClick={AllDetails}>Login</button><br/>
                </form>
            </div>
            
            
        </>
    )
}

export default AdminPage;