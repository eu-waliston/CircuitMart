const express = require("express");
const products = express.Router();

const { getAllProducts, getProductsById, updateProduct, CreateProduct, deleteProduct} = require("../controller/Products")

products.get("/products", getAllProducts);

products.get("/products/:id", getProductsById);

products.post("/products", CreateProduct);

products.put("/products/:id", updateProduct);

products.delete("/products/:id", deleteProduct)
