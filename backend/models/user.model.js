const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, default: "" },
  email: { type: String, required: true, default: "" },
  password: { type: String, required: true, default: "" },
  datNasc: { type: String, required: true, default: "" },
  role: { type: String, required: true, default: "" },
});

module.exports = mongoose.model("User", userSchema);
