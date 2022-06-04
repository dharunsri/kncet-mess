import React from "react";
import {useNavigate} from 'react-router-dom';
import{ExpandMenu} from "./ExpandMenu";
import './FoodMenu.css';
import AddTokens from "./AddTokens";
var id = window.location.search.substring(1).split("|");
var daycount=-7;
var items=0
var nonitem=0
var dateorder;

function setDate(s){
    dateorder=s;


}
function additems(value){
    if(value==60){
    items+= parseInt(value);
}
else{
    nonitem+= parseInt(value);
}
}

function minusItems(value){
    if(value==60){
        items-= parseInt(value);
    }
    else{
        nonitem-= parseInt(value);
    }

}

function generateDate(num){
    console.log(num);
    var someDate = new Date();
    var numberOfDaysToAdd = num;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    result = new Date(result);

    var dd = String(result.getDate());
    var yyyy = result.getFullYear();
    var month = result.toLocaleString('en-us', { month: 'long' });
    var today = dd +" "+ month + "," + yyyy;
    daycount=daycount+1; 
    return today;
}
function generateDay(num){
    var someDate = new Date();
    var numberOfDaysToAdd = num;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    result = new Date(result);


    var day=result.toLocaleDateString('en-us', { weekday: 'long' });


   
    
    if(day=="Sunday"){
 daycount=daycount+1;
   return "Monday";
    }
    return day;
}

function FoodMenu(){
    const navigate = useNavigate();
    const date = new Date();
    const show_date = `${date.getDate()} ${date.toLocaleString('default',{month:"long"})}, ${date.getFullYear()} [ ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} ]`
    
    const PaymentPage = () => {
        var nextPage = '/payment?'+items+"|"+nonitem+"|"+dateorder+"|"+id[0]+"|"+id[1];
        navigate(nextPage);
        window.location.reload();
    }

    return(
        <div className="menu-page">
            <h2>{show_date}</h2>
            
            <ExpandMenu title={generateDay(daycount)} date={generateDate(daycount)}>
            <div className="heading">
                    <h3>LUNCH MENU</h3>
                </div>
                <div className="menu-items">
                <div className="veg-menu-items">
                    <h4 className="veg">Veg-Menu [Rs.60]</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Sambar</li>
                    <li>Rasam</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens data = "60" />
                </div>
                </div>

                <div className="non_veg-menu-items">
                <h4 className="non-veg">Non-Veg-Menu [Rs.70] </h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Chicken Gravy</li>
                    <li>Chicken fry</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens data = "70"/>
                </div>
                </div>
            </div>
            <div>
                <button className="place-order" onClick={PaymentPage}>Place my order</button>
            </div>
                
            </ExpandMenu>
            <ExpandMenu title={generateDay(daycount)} date={generateDate(daycount)}>
            <div className="heading">
                    <h3>LUNCH MENU</h3>
                </div>
                <div className="menu-items">
                <div className="veg-menu-items">
                    <h4 className="veg">Veg-Menu [Rs.60]</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Sambar</li>
                    <li>Rasam</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens data = "60" />
                </div>
                </div>

                <div className="non_veg-menu-items">
                <h4 className="non-veg">Non-Veg-Menu [Rs.70] </h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Chicken Gravy</li>
                    <li>Chicken fry</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens data = "70"/>
                </div>
                </div>
            </div>
            <div>
                <button className="place-order" onClick={PaymentPage}>Place my order</button>
            </div>
            </ExpandMenu>
            <ExpandMenu title={generateDay(daycount)} date={generateDate(daycount)}>
            <div className="heading">
                    <h3>LUNCH MENU</h3>
                </div>
                <div className="menu-items">
                <div className="veg-menu-items">
                    <h4 className="veg">Veg-Menu [Rs.60]</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Sambar</li>
                    <li>Rasam</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens data = "60" />
                </div>
                </div>

                <div className="non_veg-menu-items">
                <h4 className="non-veg">Non-Veg-Menu [Rs.70] </h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Chicken Gravy</li>
                    <li>Chicken fry</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens data = "70"/>
                </div>
                </div>
            </div>
            <div>
                <button className="place-order" onClick={PaymentPage}>Place my order</button>
            </div>
            </ExpandMenu>
            <ExpandMenu title={generateDay(daycount)} date={generateDate(daycount)}>
            <div className="heading">
                    <h3>LUNCH MENU</h3>
                </div>
                <div className="menu-items">
                <div className="veg-menu-items">
                    <h4 className="veg">Veg-Menu [Rs.60]</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Sambar</li>
                    <li>Rasam</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens data = "60" />
                </div>
                </div>

                <div className="non_veg-menu-items">
                <h4 className="non-veg">Non-Veg-Menu [Rs.70] </h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Chicken Gravy</li>
                    <li>Chicken fry</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens data = "70"/>
                </div>
                </div>
            </div>
            <div>
                <button className="place-order" onClick={PaymentPage}>Place my order</button>
            </div>
            </ExpandMenu>
            <ExpandMenu title={generateDay(daycount)} date={generateDate(daycount)}>
            <div className="heading">
                    <h3>LUNCH MENU</h3>
                </div>
                <div className="menu-items">
                <div className="veg-menu-items">
                    <h4 className="veg">Veg-Menu [Rs.60]</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Sambar</li>
                    <li>Rasam</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens data = "60" />
                </div>
                </div>

                <div className="non_veg-menu-items">
                <h4 className="non-veg">Non-Veg-Menu [Rs.70] </h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Chicken Gravy</li>
                    <li>Chicken fry</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens data = "70"/>
                </div>
                </div>
            </div>
            <div>
                <button className="place-order" onClick={PaymentPage}>Place my order</button>
            </div>
            </ExpandMenu>
            <ExpandMenu title={generateDay(daycount)} date={generateDate(daycount)}>
            <div className="heading">
                    <h3>LUNCH MENU</h3>
                </div>
                <div className="menu-items">
                <div className="veg-menu-items">
                    <h4 className="veg">Veg-Menu [Rs.60]</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Sambar</li>
                    <li>Rasam</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens data = "60" />
                </div>
                </div>

                <div className="non_veg-menu-items">
                <h4 className="non-veg">Non-Veg-Menu [Rs.70] </h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Chicken Gravy</li>
                    <li>Chicken fry</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens data = "70"/>
                </div>
                </div>
            </div>
            <div>
                <button className="place-order" onClick={PaymentPage}>Place my order</button>
            </div>
        </ExpandMenu>
            <button className="back" onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}

export  {FoodMenu, additems, minusItems,setDate};
