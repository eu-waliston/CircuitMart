const express = require("express");
const root = express.Router();

root.get("/", (req, res) => {
  try {
    res.status(200).json("<h1>Products Back-end</h1>");
  } catch (error) {
    res.status(500).json(error);
  }
});
