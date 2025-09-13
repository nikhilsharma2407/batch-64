const { verifyToken } = require("../utils/jwtUtils");
const { responseCreator } = require("../utils/responseCreator");
const UserModel = require("./UserModel");

const addToCart = async (req, res, next) => {
  // console.log("🚀 ~ authController ~ req.headers:", req.headers?.authorization);
  // const token = req.headers.authorization?.split(" ")[1];
  // const { username } = verifyToken(token);
  const { username } = res.locals.userdata;
  const { product } = req.body;
  try {
    const data = await UserModel.addToCart(username, product);
    res.send(responseCreator(`${product.title} added to cart`, data));
  } catch (error) {
    next(error);
  }
};

module.exports = { addToCart };
