const express = require("express");
const root = express.Router();
const { RootRouter } = require("../controller/Root")

root.get("/", RootRouter);

module.exports = root;