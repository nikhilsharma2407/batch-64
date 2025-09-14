const express = require("express");
const {
  addToCart,
  increment,
  decrement,
  getCartItems,
  clearCart,
  removeFromCart,
} = require("../controllers/cartController");
const authController = require("../controllers/authController");
const cartRouter = express.Router();

cartRouter.post("/add", authController, addToCart);
cartRouter.post("/remove", authController, removeFromCart);
cartRouter.patch("/increment", authController, increment);
cartRouter.patch("/decrement", authController, decrement);
cartRouter.get("/get-cart-items", authController, getCartItems);
cartRouter.delete("/clear-cart", authController, clearCart);

module.exports = cartRouter;
