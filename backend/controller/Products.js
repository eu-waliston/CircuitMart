const Product = require("../models/producst.model");

async function getAllProducts(req,res) {
    try {
        const products = Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(erorr)
    }
}

async function getProductsById(req,res) {
    const id = req.params.id;
    try {
        const producsFinded = Product.findById(id);
        res.status(200).json(producsFinded)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function CreateProduct(req,res) {
    const newProduct = new Product(req.body);
    try {
        newProduct.save();
        res.status(200).send(newProduct)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function updateProduct(req,res) {
    const id = req.params.id;
    try {
        const productUpdated = Product.findByIdAndUpdate(id)
        res.status(200).send(productUpdated)    
    } catch (error) {
        res.status(500).json(error)
    }
}

async function deleteProduct(req,res) {
    let product = req.params.id;
    try {
        Product.findByIdAndDelete(product);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllProducts,
    getProductsById,
    updateProduct,
    CreateProduct,
    deleteProduct
}