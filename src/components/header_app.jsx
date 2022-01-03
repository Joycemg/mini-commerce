import React from 'react';
import { ShoppingCart } from './shoppingCart/ShoppingCart';

import "../assets/css/cssStyle.css"
import { Link } from 'react-router-dom';

export const HeaderApp = () => (
    <div className='Header'>

        <div className="Header--item-center">
            <Link to='/'> 
                <h1>Mini-Ecommerce</h1>
            </Link>
        </div>

        <div>
           <ShoppingCart/>
        </div>
    </div>
);

