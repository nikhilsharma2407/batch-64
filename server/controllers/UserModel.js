const { Schema, model } = require("mongoose");

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
  cart: {
    items: [Object],
    totalQuantity: Number,
    totalPrice: Number,
  },
});

userSchema.statics.findUser = async (username) => {
  const user = await UserModel.findOne({ username }, { _id: 0, __v: 0 });
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
  const cart = (await UserModel.findUser(username)).cart;
  return cart
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
  console.log("🚀 ~ updateData:", updateData);
  if (updateData.modifiedCount || true) {
    const data = await UserModel.calculateTotalPrice(username);
    console.log("🚀 ~ data.cart:", data);

    return data;
  }
};

userSchema.statics.removeFromCart = async (username, product) => {
  const userData = await UserModel.updateOne(
    {
      username,
    },
    {
      $addToSet: { "cart.items": { ...product, quantity: 1 } },
    }
  );
  console.log("🚀 ~ userData:", userData);
  return userData;
};

userSchema.statics.increment = async (username, product) => {
  const userData = await UserModel.updateOne(
    {
      username,
    },
    {
      $addToSet: { "cart.items": { ...product, quantity: 1 } },
    }
  );
  console.log("🚀 ~ userData:", userData);
  return userData;
};

userSchema.statics.decrement = async (username, product) => {
  const userData = await UserModel.updateOne(
    {
      username,
    },
    {
      $addToSet: { "cart.items": { ...product, quantity: 1 } },
    }
  );
  console.log("🚀 ~ userData:", userData);
  return userData;
};

const UserModel = model("users", userSchema);
module.exports = UserModel;
