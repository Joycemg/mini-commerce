import Dexie from "dexie";

const db = new Dexie("ShoppingEcommerce");

db.version(2).stores({
    carrito: '++id, price, title, category'
})

export default db;