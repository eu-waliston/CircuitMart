const express = require("express");
const user = express.Router();

const {getAllUsers} = require("../controller/User");

//get all users
user.get("/user", getAllUsers);

