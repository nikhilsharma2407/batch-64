const { Schema, model } = require("mongoose");
const { errorCreator } = require("../utils/responseCreator");
const { compare } = require("bcrypt");

const productSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: [true, "Product title is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  rating: {
    rate: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
});

productSchema.statics.getProducts = async (limit, page) => {
  const skip = (page - 1) * limit;
  const totalCount = await ProductModel.find().countDocuments();
  console.log("🚀 ~ totalCount:", totalCount);
  const products = await ProductModel.aggregate([
    { $skip: skip },
    { $limit: limit },
  ]);

  return { products, totalCount };
};

const ProductModel = model("products", productSchema);
module.exports = ProductModel;
