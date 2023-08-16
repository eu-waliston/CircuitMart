const express = require("express");
const user = express.Router();
const auth = require("../auth/auth");

const {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUserById,
  createUserWithAuth
} = require("../controller/User");

user.get("/user", getAllUsers);

user.get("/user/:id", getUserById);

user.put("/user/:id", updateUser);

user.post("/user", createUser);

user.get("/register", auth, createUserWithAuth)

user.delete("/user/:id", deleteUserById);

module.exports = user;