import React, { useEffect, useState } from "react";
import db from "../app/db/db";
import {getProductByID} from "../app/services/productsService"

export const ProductView = ({match})=>{

    const [productDetail, setProductDetail] = useState(null)


    useEffect(() =>{
        const {params} = match
        getProductByID(params.id)
            .then((productFromDB) => setProductDetail(productFromDB))
            .catch((err) => console.log(err))
    },[match])
    return(
        <div>
            <h1>
                {productDetail && JSON.stringify(productDetail)}
            </h1>
        </div>
    )
}