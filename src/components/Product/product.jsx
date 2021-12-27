import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { saveLastInterestProduct } from "../../app/services/storageServices";

export const Product = ({item}) => {

    const { title, image, price, description, count = item.rating.count} = item;
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
                    <BsCartPlusFill/>
                    <button onClick={() => saveLastInterestProduct(title)}>
                        <p>Precio: {price}$</p>
                    </button>
                </div>
            </div>
        </div>
    );
};