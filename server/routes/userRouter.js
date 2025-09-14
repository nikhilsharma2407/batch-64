const express = require("express");
const {
  login,
  signup,
  loginWithCookie,
  resetPassword,
} = require("../controllers/userController");
const authController = require("../controllers/authController");
const userRouter = express.Router();

userRouter.post("/login", login);

userRouter.get("/login", authController, loginWithCookie);

userRouter.post("/signup", signup);

userRouter.patch("/reset-password", resetPassword);

module.exports = userRouter;
