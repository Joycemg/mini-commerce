import React from 'react';
import { ShoppingCart } from './shoppingCart/ShoppingCart';

import "../assets/css/cssStyle.css"

export const HeaderApp = () => (
    <div className='Header'>

        <div className="Header--item-center">
            <h1>Mini-Ecommerce</h1>
        </div>

        <div>
           <ShoppingCart/>
        </div>
    </div>
);

