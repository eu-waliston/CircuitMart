const Product = require("../Model/producst.model");

async function getAllProducts(req, res) {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getProductsById(req, res) {
  const id = req.params.id;
  try {
    const producsFinded = await Product.findById(id);
    res.status(200).json(producsFinded);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function CreateProduct(req, res) {
  const newProduct = new Product(req.body);
  try {
    newProduct.save();
    res.status(200).send(newProduct);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updateProduct(req, res) {
  const id = req.params.id;
  try {
    await Product.findByIdAndUpdate(id, {
      imgURL: req.body.imgURL,
      name: req.body.name,
      price: req.body.price,
      discount: req.body.discount,
      installments: req.body.installments,
      flag: req.body.flag,
    });
    let updateProduct = await Product.find()
    res.status(200).send(updateProduct);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteProduct(req, res) {
  let product = req.params.id;
  try {
    await Product.findByIdAndDelete(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getAllProducts,
  getProductsById,
  updateProduct,
  CreateProduct,
  deleteProduct,
};
