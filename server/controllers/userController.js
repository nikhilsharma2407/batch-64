const { generateToken } = require("../utils/jwtUtils");
const { genPassworhHash, verifyPassword } = require("../utils/passwordUtil");
const { errorCreator, responseCreator } = require("../utils/responseCreator");
const { generateQRcode, verifyOTP } = require("../utils/totpUtil");
const UserModel = require("./UserModel");

/**
 *
 * @param {*} req
 * @param {import("express").Response} res
 * @param {*} next
 */
const signup = async (req, res, next) => {
  try {
    const { password, ...userdata } = req.body;

    userdata.password = await genPassworhHash(password);
    const { qrCode, secret } = await generateQRcode(userdata.username);
    userdata.secret = secret;
    const data = await UserModel.createUser(userdata);
    res.status(201);
    res.send(
      responseCreator(
        `User account - ${data.username} created successfully!!!`,
        qrCode
      )
    );
  } catch (error) {
    next(error);
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {*} next
 */

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const { password: passwordHash, ...userdata } = await UserModel.findUser(
      username
    );

    // password validation
    const isPwdVerified = await verifyPassword(password, passwordHash);
    if (isPwdVerified) {
      const token = generateToken(userdata);
      res.cookie("authToken", token, { maxAge: 3600_000, httpOnly: true });
      res.send(
        responseCreator(`${username} logged in successfully!!!`, userdata)
      );
    } else {
      errorCreator("Incorrect Password", 401);
    }
  } catch (error) {
    next(error);
  }
};

const loginWithCookie = (req, res, next) => {
  const userdata = res.locals.userdata;
  res.send(
    responseCreator(`${userdata.username} logged in successfully!!!`, userdata)
  );
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {*} next
 */

const logout = (req, res, next) => {
  res.clearCookie("authToken");
  res.locals.userdata = null;
  res.send(responseCreator("Logged out successfully!!!"));
};

const resetPassword = async (req, res, next) => {
  try {
    const { username, password: newPassword, otp } = req.body;
    // find user
    // get secret from user DB
    // verify otp
    // reset the pwd
    const { secret } = await UserModel.findUser(username);
    const isVerified = verifyOTP(secret, otp);
    if (isVerified) {
      const passwordHash = await genPassworhHash(newPassword)
      await UserModel.updatePassword({username, passwordHash, newPassword});
      res.send(responseCreator("Password updated successfully!!!"));
    } else {
      errorCreator("Invalid OTP!!!", 401);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, login, loginWithCookie, logout, resetPassword };
