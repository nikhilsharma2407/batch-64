const signup = (req, res) => {
  const userdata = req.body;
//   const data = UserModel.createUser(userdata);
  res.send({ message: `${userdata.username} account created successfully!!!` });
};

const login = (req, res) => {};

module.exports = { signup, login };
