const express = require("express");
const products = express.Router();

const { getAllProducts, getProductsById, updateProduct, CreateProduct, deleteProduct} = require("../controller/Products")

//Get all products
products.get("/products", getAllProducts);

//Get product by id
products.get("/products/:id", getProductsById);

//Create a products
products.post("/products", CreateProduct);

//Update a product 
products.put("/products/:id", updateProduct);

products.delete("/products/:id", deleteProduct)
