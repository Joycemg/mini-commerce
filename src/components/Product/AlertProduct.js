import React, { useEffect, useState } from "react";

export const AlertProduct = () => {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState("")

    useEffect(() => {
        const lastProduct = sessionStorage.getItem("lastProduct")

        if(lastProduct){
            setProduct(lastProduct)
            setShow(true)
        }
        
        return () => {
            sessionStorage.removeItem("lasProduct")
        }

    },[]);
    

    if(show) {
        return(
            <div class="alert" >
                <buttom class="closebtn" onClick={() => setShow(false)}>x
                </buttom>
                <p>Aprovecha para comprar el producto {product} antes que se agote!
                </p>
            </div>
        );
    }else{
        return <></>
    }
}