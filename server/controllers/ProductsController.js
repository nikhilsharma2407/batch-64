const { responseCreator } = require("../utils/responseCreator");
const ProductModel = require("./ProductsModel");

const getProducts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    //we can also use parseInt(limit)
    const products = await ProductModel.getProducts(+limit, +page);
    res.send(responseCreator("fetched products", products));
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts };
