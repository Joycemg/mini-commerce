import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../app/services/productsService";

export const DetailCart = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
            .then((allProductsFromDB) => setProducts(allProductsFromDB))
    })




    return (

        <table>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
            {products.length > 0 && products.map((product, index) => (
                <>
                    <tr>
                        <td> {product.id}</td>
                        <td> {product.title}</td>
                        <td> {product.category}</td>
                        <td> {product.price}</td>
                    </tr>
                </>
            ))}
        </table>
    )
}