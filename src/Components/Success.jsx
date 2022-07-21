import React from "react";

function Success(){
    const mainPage = () => window.location.replace("http://localhost:3000/");
    return(
        <>
            <h1>Payment Succesful!!</h1>
            <h1>Check Your Mail For Mess Token.</h1>
            <button onClick={mainPage}>LogOut</button>
        </>
    )
}

export default Success;