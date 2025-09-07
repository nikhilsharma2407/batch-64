const { generateToken } = require("../utils/jwtUtils");
const { genPassworhHash, verifyPassword } = require("../utils/passwordUtil");
const { errorCreator, responseCreator } = require("../utils/responseCreator");
const UserModel = require("./UserModel");

const signup = async (req, res, next) => {
  try {
    const { password, ...userdata } = req.body;

    userdata.password = await genPassworhHash(password);

    const data = await UserModel.createUser(userdata);
    res.status(201);
    res.send(`User account - ${data.username} created successfully!!!`);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const { password: passwordHash, ...userdata } = await UserModel.findUser(
      username
    );

    // password validation
    const isPwdVerified = await verifyPassword(password, passwordHash);
    if (isPwdVerified) {
      const token = generateToken(userdata,'1m');
      res.send(
        responseCreator(`${username} logged in successfully!!!`, {
          ...userdata,
          token,
        })
      );
    } else {
      errorCreator("Incorrect Password", 401);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, login };
