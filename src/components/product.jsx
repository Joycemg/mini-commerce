import React from "react";
import { BsCartPlusFill } from "react-icons/bs";

export const Product = ({item}) => {

    const { title, image, price, description } = item;
    return(
        <div className="product">
            <div> <h3>{title}</h3> </div>
            <div className="product-grid">
                <img className="imgProduct" src={image} alt="img"/> 
            </div>
            <div className="bottom"> 
                <h2>Precio: {price}$</h2>
                <a href="#"><BsCartPlusFill/></a>
            </div>
        </div>
    );
};