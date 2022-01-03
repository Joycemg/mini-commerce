import React from "react"

import { ListProduct } from "../components/Product/list_product";
import { AlertProduct } from "../components/Product/AlertProduct";
import "../assets/css/cssStyle.css"

export const Home = () => (
    <div className="container">

        <AlertProduct />
        <ListProduct />
    </div>
)
