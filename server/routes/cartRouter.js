const express = require("express");
const { addToCart } = require("../controllers/cartController");
const cartRouter = express.Router();

cartRouter.post("/add", addToCart);

module.exports = cartRouter;
