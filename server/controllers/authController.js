// 1 if token is valid->username
// 2 get the latest userInfo from the db based on token

const { verifyToken } = require("../utils/jwtUtils");
const { errorCreator } = require("../utils/responseCreator");
const UserModel = require("./UserModel");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {*} next
 */
const authController = async (req, res, next) => {
  try {
    const { authToken } = req.cookies;
    const { username } = verifyToken(authToken);
    const { password, secret, ...userdata } = await UserModel.findUser(
      username
    );
    if (userdata) {
      // res.locals -> placeholder for us to store some values
      res.locals.userdata = userdata;
      next();
    } else {
      errorCreator("UserAccount doesn't exist");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authController;
