import React from "react";
import Json from "../listPro/products.json"
import {Product} from "./product"



export const ListProduct = () => {
    const products = Json.products;


    return(
        <div className="Products">
            {products.map((product, index) => <Product key={index} title={product.title} />)}
        </div>
    );

};