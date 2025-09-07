const errorHandler = (err, req, res, next) => {
  console.log("🚀 ~ errorHandler ~ err:message", err.message);
  console.log("🚀 ~ errorHandler ~ err:", err);
  if (err.message === "jwt expired"){
    err.message = 'Session expied, please login again to continue.'
  }
  if (err.code === 11000) {
    err.status = 403;
    err.message = "This username already exists, Please try something else!!!";
  }

  res.status(err.status || 500);
  res.send({ success: false, message: err.message });
};

module.exports = errorHandler;
