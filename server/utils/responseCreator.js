const responseCreator = (message, data) => {
  return {
    success: true,
    message,
    data,
  };
};

const errorCreator = (message, statusCode) => {
  const err = new Error(message);
  err.status = statusCode;
  throw err;
};

module.exports = {responseCreator, errorCreator}