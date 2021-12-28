import React, { useEffect, useState } from 'react'
import {useLiveQuery} from "dexie-react-hooks"
import db from '../../app/db/db'

export const ShoppingCartItem = () => {

    const [productsCart, setProductsCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


    const getTotalPrice = () => {
        const total = productsCart?.reduce((totalPrice, currentProduct) => {
            return totalPrice + currentProduct.price
        }, 0)
        setTotalPrice(total)
    }

    useLiveQuery(async () => {
        const productsDB = await db.carrito.toArray()
        setProductsCart(productsDB)
    })

    useEffect(() => {
        if(productsCart.length > 0) {
            getTotalPrice()
        }
    }, [productsCart])

    return(
        <div className='dropdown-content-cart'>
            {productsCart?.map((product, index) => 
            <div key={index} className="dropdown-content-product"> 
                <a href="#" className="dropdown-content-product--un" key={product.id}> {product.title} - ${product.price} - {product.category  }
            </a>
        </div>)}
            <p className='price-total'>Total: {totalPrice}</p>

        </div>
    )
}