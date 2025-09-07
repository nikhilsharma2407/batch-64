const { sign, verify } = require("jsonwebtoken");
const { errorCreator } = require("./responseCreator");

const SECRET_KEY = process.env.SECRET_KEY || "$2b$10$Rim17d3wcd1Uy0/DTbziNO";

const generateToken = (userData, time='1h') => {
  const { username = "" } = userData;
  const token = sign({ username }, SECRET_KEY, {
    expiresIn: time,
  });

  return token;
};

const verifyToken = (token) => {
  if (!token) {
    errorCreator("Token missing, Please login to continue", 401);
  }
  return verify(token, SECRET_KEY);
};

module.exports = { generateToken, verifyToken };
