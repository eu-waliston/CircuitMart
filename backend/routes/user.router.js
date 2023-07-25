const express = require("express");
const user = express.Router();

const {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUserById,
} = require("../controller/User");

user.get("/user", getAllUsers);

user.get("/user/:id", getUserById);

user.put("/user/:id", updateUser);

user.post("/user", createUser);

user.delete("/user/:id", deleteUserById);

module.exports = user;