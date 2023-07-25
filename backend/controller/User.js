const User = require("../models/user.model");

async function getAllUsers(req, res) {
  try {
    const user = User.findOne({});
    res.status(200).json(user);
  } catch (error) {}
    res.status(500).json(error)
}



module.exports = {
    getAllUsers
}