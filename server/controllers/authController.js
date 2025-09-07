// 1 if token is valid->username
// 2 get the latest userInfo from the db based on token

const authController = async (req, res, next) => {
  try {
    // get token from req
    console.log("🚀 ~ authController ~ req.headers:", req.headers);
    
  } catch (error) {
    next(error);
  }
};

module.exports = { authController };
