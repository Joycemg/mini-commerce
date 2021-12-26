import React from 'react';
import { DropDawn } from './shoppingCart/show_cart';

import "../assets/css/cssStyle.css"

export const HeaderApp = () => (
    <div className='Header'>

        <div className="Header--item-center">
            <h1>Mini-Ecommerce</h1>
        </div>

        <div>
           <DropDawn/>
        </div>
    </div>
);

