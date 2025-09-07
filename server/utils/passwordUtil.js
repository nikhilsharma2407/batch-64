const { hash, genSalt, compare } = require("bcrypt");

const genPasswordHash = async (password) => {
  const salt = await genSalt();
  console.log("🚀 ~ genPassworhHash ~ salt:", salt);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

const verifyPassword = (password, hash) => {
  return compare(password, hash);
};

module.exports = { genPassworhHash: genPasswordHash, verifyPassword };

genSalt(10).then(console.log)