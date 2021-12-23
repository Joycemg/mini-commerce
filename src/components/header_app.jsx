import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import "../assets/css/cssStyle.css"
export const HeaderApp = () => (
    <div className='Header'>

        <div className="Header--item-center">
            <h1>Mini-Ecommerce</h1>
        </div>

        <div className="Header-cart">
           <BsFillCartFill className="" size="30"/>
        </div>
    </div>
);

