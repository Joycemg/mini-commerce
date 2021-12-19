import React from "react";

export const Product = ({item}) => {

    const { title, image, price, description } = item;
    return(
        <div className="product">
            <div> <h3>{title}</h3> </div>
            <div> <img src={image} alt="img"/> </div>
            <div className="bottom"> <a href='#'>Precio: {price}$</a> </div>
            <div className="descripcion">{description}</div>
        </div>
    );
};