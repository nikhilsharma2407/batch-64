const { responseCreator } = require("../utils/responseCreator");
const UserModel = require("./UserModel");

const addToCart = async (req, res, next) => {
  const { username, product } = req.body;
  try {
    const data = await UserModel.addToCart(username, product);
    res.send(responseCreator(`${product.title} added to cart`, data));
  } catch (error) {
    next(error);
  }
};

module.exports = { addToCart };
