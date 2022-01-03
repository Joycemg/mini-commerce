import React from "react";
import { DetailCart } from "../components/shoppingCart/DetailCart";

export const PurchaseView = ({ history }) => {
    const handlecancelButton = () => {
        history.push("/")
    }
    return (
        <div>
            <h1> Pagina del carrito de compras</h1>
            <DetailCart />
            <div>
                <button>Comprar</button>
                <button onClick={handlecancelButton}>Cancelar</button>
            </div>
        </div>
    )
}