const { verifyToken } = require("../utils/jwtUtils");
const { responseCreator } = require("../utils/responseCreator");
const UserModel = require("./UserModel");

const addToCart = async (req, res, next) => {
  // console.log("🚀 ~ authController ~ req.headers:", req.headers?.authorization);
  // const token = req.headers.authorization?.split(" ")[1];
  // const { username } = verifyToken(token);
  const { username } = res.locals.userdata;
  const product = req.body;
  try {
    const data = await UserModel.addToCart(username, product);
    res.send(responseCreator(`${product.title} added to cart`, data));
  } catch (error) {
    next(error);
  }
};

const removeFromCart = async (req, res, next) => {
  const { username } = res.locals.userdata;
  const product = req.body;
  try {
    const data = await UserModel.removeFromCart(username, product);
    res.send(responseCreator(`${product.title} removed to cart`, data));
  } catch (error) {
    next(error);
  }
};

const increment = async (req, res, next) => {
  const { username } = res.locals.userdata;
  const product = req.body;
  try {
    const data = await UserModel.increment(username, product);
    res.send(responseCreator(`${product.title} added to cart`, data));
  } catch (error) {
    next(error);
  }
};

const decrement = async (req, res, next) => {
  const { username } = res.locals.userdata;
  const product = req.body;
  try {
    const data = await UserModel.decrement(username, product);
    res.send(responseCreator(`${product.title} removed from cart`, data));
  } catch (error) {
    next(error);
  }
};

const getCartItems = async (req, res, next) => {
  const { username } = res.locals.userdata;
  const product = req.body;
  try {
    const data = await UserModel.getCartItems(username);
    res.send(responseCreator(`fetched cart items`, data));
  } catch (error) {
    next(error);
  }
};

const clearCart = async (req, res, next) => {
  const { username } = res.locals.userdata;
  const product = req.body;
  try {
    const data = await UserModel.clearCart(username);
    res.send(responseCreator(`cart cleared`, data));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  increment,
  decrement,
  getCartItems,
  clearCart,
};
