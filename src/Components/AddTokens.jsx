import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./FoodMenu.css";
import {additems, minusItems} from './FoodMenu';

function AddTokens(props){
    let [num, setNum] = useState(0);
    let [amt, setAmt] = useState(props.data);
    const inc = () => {
        setNum(Number(num)+1);
        additems(amt);
    };

    const dec = () => {
        if(num>0){
            setNum(num-1);
            minusItems(amt);
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
                </div>
                <div className="price"><br/>
                <h5 className="total-amount">Total Amount:</h5>
                <input className="total-amount-box" type="text" value={num*amt} />
                </div>
            </div>
        </div>
        </>
    )
}

export default AddTokens;