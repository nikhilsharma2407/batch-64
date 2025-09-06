const { errorCreator, responseCreator } = require("../utils/responseCreator");
const UserModel = require("./UserModel");

const signup = async (req, res, next) => {
  try {
    const userdata = req.body;
    const data = await UserModel.createUser(userdata);
    res.status(201);
    res.send(`User account - ${data.username} created successfully!!!`);
  } catch (error) {
    next(error);
    console.log("🚀 ~ signup ~ error:");
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userdata = await UserModel.findUser(username);

    // password validation
    if (userdata.password === password) {
      res.send(responseCreator(`${username} logged in successfully!!!`, userdata))
    } else {
      errorCreator("Incorrect Password", 401);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, login };
