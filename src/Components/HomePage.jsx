import React from "react";
import "./HomePage.css"
import {useNavigate} from "react-router-dom";

function HomePage(){
    const navigate = useNavigate();

    const FoodMenu = () => {
        navigate('/menu')
    }

    return(
        <div className="Home-page">
            <header>
                <h1 id="title">Welcome To The KNCET Mess!</h1>
                <button className="explore" onClick={FoodMenu}><span class="text">Explore</span></button>
            </header>
        </div>
    )
}

export default HomePage;