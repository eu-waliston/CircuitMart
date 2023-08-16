const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  imgURL: { type: String, required: true, default: "" },
  name: { type: String, required: true, default: "" },
  price: { type: Number, required: true, default: "" },
  discount: { type: String, required: true, default: "" },
  installments: { type: String, required: true, default: "" },
  flag: { type: String },
});

module.exports = mongoose.model("Product", productsSchema);
