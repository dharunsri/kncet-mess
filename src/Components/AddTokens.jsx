import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./FoodMenu.css";
import FoodMenu from "./FoodMenu";

function AddTokens(props){
    let [amt] = useState(props.data);
    let [num, setNum] = useState(0);
    const inc = () => {
        setNum(Number(num)+1);
    };
    const dec = () => {
        if(num>0){
            setNum(num-1);
        }
    };
    let handleChange = (e) => {
        setNum(e.target.value);
    }



    return(
        <>
        <div className="col-xl-1">
            <div class="input-group">
                <div className="token-title">
                    Add Tokens: 
                </div>
                <div className="minus">
                    <button class="btn btn-outline-primary" type="button" onClick={dec}>-</button>
                </div>
                <div>
                    <input className="input" size={1} type="text" class="form-control" value={num} onChange={handleChange}/>
                </div>
                <div>
                    <button class="btn btn-outline-primary" type="button" onClick={inc}>+</button>
                </div><br/>
            </div>
            <div className="total-price">
                <h5 id="amount-title">Total Price: </h5>
                <input id="total-amount" type="text" value={num*amt} size={1} /> 
            </div>
        </div>
        </>
    )
}

export default AddTokens;
