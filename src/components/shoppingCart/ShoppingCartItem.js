import React, { useEffect, useState } from 'react'
import {useLiveQuery} from "dexie-react-hooks"
import db from '../../app/db/db'
import { Link } from 'react-router-dom'

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
                <Link to={`/product/${product.id}`} className="dropdown-content-product--un" key={product.id}> {product.title} - ${product.price} - {product.category  }
            </Link>
        </div>)}
            <Link to="/purchase" className='price-total'>Total: {totalPrice}</Link>
        </div>
    )
}