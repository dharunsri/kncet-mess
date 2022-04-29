import React from "react";
import {useNavigate} from 'react-router-dom';
import ExpandMenu from "./ExpandMenu";
import './FoodMenu.css';
import AddTokens from "./AddTokens";

function FoodMenu(){
    const navigate = useNavigate();
    const date = new Date();
    const show_date = `${date.getDate()} ${date.toLocaleString('default',{month:"long"})}, ${date.getFullYear()} [ ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} ]`
    
    const PaymentPage = () => {
        navigate('/payment');
    }

    return(
        <div className="menu-page">
            <h2>{show_date}</h2>
            <ExpandMenu title="Monday">
            <div className="heading">
                    <h3>LUNCH MENU</h3>
                </div>
                <div className="menu-items">
                <div className="veg-menu-items">
                    <h4 className="veg">Veg-Menu</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Sambar</li>
                    <li>Rasam</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens/>
                </div>
                </div>

                <div className="non_veg-menu-items">
                <h4 className="non-veg">Non-Veg-Menu</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Chicken Gravy</li>
                    <li>Chicken fry</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens/>
                </div>
                </div>
            </div>
            <div>
                <button className="place-order" onClick={PaymentPage}>Place my order</button>
            </div>
                
            </ExpandMenu>
            <ExpandMenu title="Tuesday">
            <div className="heading">
                    <h3>LUNCH MENU</h3>
                </div>
                <div className="menu-items">
                <div className="veg-menu-items">
                    <h4 className="veg">Veg-Menu</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Sambar</li>
                    <li>Rasam</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens/>
                </div>
                </div>

                <div className="non_veg-menu-items">
                <h4 className="non-veg">Non-Veg-Menu</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Chicken Gravy</li>
                    <li>Chicken fry</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens/>
                </div>
                </div>
            </div>
            <div>
                <button className="place-order" onClick={PaymentPage}>Place my order</button>
            </div>
            </ExpandMenu>
            <ExpandMenu title="Wednesday">
            <div className="heading">
                    <h3>LUNCH MENU</h3>
                </div>
                <div className="menu-items">
                <div className="veg-menu-items">
                    <h4 className="veg">Veg-Menu</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Sambar</li>
                    <li>Rasam</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens/>
                </div>
                </div>

                <div className="non_veg-menu-items">
                <h4 className="non-veg">Non-Veg-Menu</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Chicken Gravy</li>
                    <li>Chicken fry</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens/>
                </div>
                </div>
            </div>
            <div>
                <button className="place-order" onClick={PaymentPage}>Place my order</button>
            </div>
            </ExpandMenu>
            <ExpandMenu title="Thursday">
            <div className="heading">
                    <h3>LUNCH MENU</h3>
                </div>
                <div className="menu-items">
                <div className="veg-menu-items">
                    <h4 className="veg">Veg-Menu</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Sambar</li>
                    <li>Rasam</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens/>
                </div>
                </div>

                <div className="non_veg-menu-items">
                <h4 className="non-veg">Non-Veg-Menu</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Chicken Gravy</li>
                    <li>Chicken fry</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens/>
                </div>
                </div>
            </div>
            <div>
                <button className="place-order" onClick={PaymentPage}>Place my order</button>
            </div>
            </ExpandMenu>
            <ExpandMenu title="Friday">
            <div className="heading">
                    <h3>LUNCH MENU</h3>
                </div>
                <div className="menu-items">
                <div className="veg-menu-items">
                    <h4 className="veg">Veg-Menu</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Sambar</li>
                    <li>Rasam</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens/>
                </div>
                </div>

                <div className="non_veg-menu-items">
                <h4 className="non-veg">Non-Veg-Menu</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Chicken Gravy</li>
                    <li>Chicken fry</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens/>
                </div>
                </div>
            </div>
            <div>
                <button className="place-order" onClick={PaymentPage}>Place my order</button>
            </div>
            </ExpandMenu>
            <ExpandMenu title="Saturday">
            <div className="heading">
                    <h3>LUNCH MENU</h3>
                </div>
                <div className="menu-items">
                <div className="veg-menu-items">
                    <h4 className="veg">Veg-Menu</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Sambar</li>
                    <li>Rasam</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens/>
                </div>
                </div>

                <div className="non_veg-menu-items">
                <h4 className="non-veg">Non-Veg-Menu</h4>
                <ol className="varities">
                    <li>Rice</li>
                    <li>Chicken Gravy</li>
                    <li>Chicken fry</li>
                    <li>Curd</li>
                </ol>
                <div className="add-tokens">
                <AddTokens/>
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

export default FoodMenu;