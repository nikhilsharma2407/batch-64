const { Schema, model } = require("mongoose");
const { errorCreator } = require("../utils/responseCreator");
const { compare } = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "is required"],
  },
  password: {
    type: String,
    required: [true, "is required"],
  },
  name: {
    type: String,
    required: [true, "is required"],
  },
  email: {
    type: String,
    required: [true, "is required"],
  },
  secret: {
    type: String,
  },
  cart: {
    items: [Object],
    totalQuantity: Number,
    totalPrice: Number,
  },
  orders: {
    type: [Object],
    default: [],
  },
});

userSchema.statics.findUser = async (username) => {
  const user = (
    await UserModel.findOne({ username }, { _id: 0, __v: 0 })
  )?.toObject();
  if (!user) {
    const err = new Error("Username doesn't exist");
    err.status = 404;
    throw err;
  }
  return user;
};

userSchema.statics.createUser = async (userdata) => {
  const data = await UserModel.create(userdata);
  return data;
};

userSchema.statics.calculateTotalPrice = async (username) => {
  const pipeLine = [
    {
      $match: {
        username,
      },
    },
    {
      $addFields: {
        "cart.totalQuantity": {
          $reduce: {
            input: "$cart.items",
            initialValue: 0,
            in: {
              $add: ["$$value", "$$this.quantity"],
            },
          },
        },
        "cart.totalPrice": {
          $round: [
            {
              $reduce: {
                input: "$cart.items",
                initialValue: 0,
                in: {
                  $add: [
                    "$$value",
                    { $multiply: ["$$this.price", "$$this.quantity"] },
                  ],
                },
              },
            },
            2,
          ],
        },
      },
    },
    {
      $merge: {
        into: "users",
        on: "_id",
        whenMatched: "merge",
        whenNotMatched: "discard",
      },
    },
  ];
  await UserModel.aggregate(pipeLine);

  const { secret, password, ...userData } = await UserModel.findUser(username);
  return userData;
};

userSchema.statics.addToCart = async (username, product) => {
  const updateData = await UserModel.updateOne(
    {
      username,
    },
    {
      $addToSet: { "cart.items": { ...product, quantity: 1 } },
    }
  );
  if (updateData.modifiedCount) {
    const data = await UserModel.calculateTotalPrice(username);
    console.log("🚀 ~ data.cart:", data);

    return data;
  }
};

userSchema.statics.removeFromCart = async (username, product) => {
  const updateData = await UserModel.updateOne(
    {
      username,
      "cart.items.id": product.id,
    },
    {
      $pull: { "cart.items": { id: product.id } },
    }
  );
  if (updateData.modifiedCount) {
    const data = await UserModel.calculateTotalPrice(username);
    return data;
  }
};

userSchema.statics.increment = async (username, product) => {
  const updateData = await UserModel.updateOne(
    {
      username,
      "cart.items.id": product.id,
    },
    {
      $inc: { "cart.items.$.quantity": 1 },
    }
  );
  if (updateData.modifiedCount) {
    const data = await UserModel.calculateTotalPrice(username);
    return data;
  }
};

userSchema.statics.decrement = async (username, product) => {
  const updateData = (
    await UserModel.findOneAndUpdate(
      {
        username,
        "cart.items.id": product.id,
      },
      {
        $inc: { "cart.items.$.quantity": -1 },
      },
      { new: true }
    )
  ).cart.items;
  console.log("🚀 ~ updateData:decrement", updateData);

  if (updateData.find(({ id }) => id === product.id)?.quantity === 0) {
    return UserModel.removeFromCart(username, product);
  }
  const data = await UserModel.calculateTotalPrice(username);
  return data;
};

userSchema.statics.getCartItems = async (username) => {
  const cartItems = await UserModel.findOne({ username }, { cart: 1 });
  return cartItems.cart;
};

userSchema.statics.clearCart = async (username) => {
  const updateData = await UserModel.findOneAndUpdate(
    { username },
    {
      $set: { "cart.items": [], "cart.totalQuantity": 0, "cart.totalPrice": 0 },
    },
    { new: true }
  );

  return updateData.cart;
};

userSchema.statics.updatePassword = async ({
  username,
  passwordHash,
  newPassword,
}) => {
  const userdata = await UserModel.findUser(username);
  const oldPwdHash = userdata.password;
  const isSame = await compare(newPassword, oldPwdHash);

  if (isSame) {
    errorCreator("New password cannot be same as old password!!!", 403);
  }

  const updateData = await UserModel.updateOne(
    { username },
    {
      $set: { password: passwordHash },
    }
  );
  if (updateData.modifiedCount) {
    return true;
  }
};

userSchema.statics.updateOrders = async (username, order) => {
  await UserModel.clearCart(username);
  return UserModel.updateOne(
    { username },
    {
      $push: { orders: order },
    }
  );
};

const UserModel = model("users", userSchema);
module.exports = UserModel;
