const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, default: "" },
  email: { type: String, required: true,unique: true, default: "" },
  password: { type: String, required: true, default: "" },
  datNasc: { type: String, required: true, default: "" },
  role: { type: String, required: true, default: "" },
  token: {type: String}
});

module.exports = mongoose.model("User", userSchema);
