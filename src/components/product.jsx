import React from "react";
import { BsCartPlusFill } from "react-icons/bs";

export const Product = ({item}) => {

    const { title, image, price, description } = item;
    return(
        <div className="product">
            <div> <h3>{title}</h3> </div>
            <div className="product-grid">
                <img className="imgProduct" src={image} alt="img"/> 
                <a href='#' className="product-grid-cart--bottom"><BsCartPlusFill/></a>
            </div>
            <div className="bottom"> <a href='#'>Precio: {price}$</a> </div>
        </div>
    );
};