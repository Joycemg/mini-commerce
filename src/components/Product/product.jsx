import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { saveLastInterestProduct } from "../../app/services/storageServices";
import db from '../../app/db/db'

export const Product = ({item}) => {

    const { title, image, price, description, count = item.rating.count} = item;


    const addProductToCart = (product) => {
        db.carrito.add({
            title: product.title,
            price: product.price,
            category: product.category
        })
    }
    return(
        <div className="product">
            <h3>{title}</h3>
            <div>
                <img className="imgProduct" src={image} alt="img"/> 
                <p>Quedan: {count}</p>
            </div>
            <div className='box-info'>
                    <p>{description}</p>
                <div className="buttom"> 
                    <button className='buttom-product' onClick={() => addProductToCart(item)} ><BsCartPlusFill/></button>
                    <button className="buttom-product" onClick={() => saveLastInterestProduct(title)}>
                        <p>Precio: {price}$</p>
                    </button>
                </div>
            </div>
        </div>
    );
};