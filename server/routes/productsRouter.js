const express = require("express");
const { getProducts } = require("../controllers/ProductsController");
const productRouter = express.Router();

productRouter.get("/", getProducts);

module.exports = productRouter;
