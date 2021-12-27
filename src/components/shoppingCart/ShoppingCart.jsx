import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { ShoppingCartItem } from "./ShoppingCartItem";

export const ShoppingCart = () => {
    return(
    <div className="Header-div-cart">
        <buttom  className="Header-cart">
            <BsFillCartFill className="Header-cart-icon" size="40"/>
            <div className="dropdown-content">
                <ShoppingCartItem/>
           </div>
        </buttom>
    </div>)
}