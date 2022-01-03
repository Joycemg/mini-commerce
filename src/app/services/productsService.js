import db from "../db/db"

export const getProductByID = async (id) =>{
    const productFromDB = await db.carrito.get(Number(id))
    return productFromDB
}

export const getAllProducts = async () => {
    const allProductsFromDB = await db.carrito.toArray()
    return allProductsFromDB
}