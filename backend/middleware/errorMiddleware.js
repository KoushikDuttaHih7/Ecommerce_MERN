const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong MongoDb Id Error
  if (err.name === "CastError") {
    const message = `Resouce not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // mongoose dublicate key error
  if (err.code === 11000) {
    const message = `Dublicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT Error
  if (err.name === "JsonWebTokenError") {
    const message = `JSON WEB TOKEN is Invalid,try again`;
    err = new ErrorHandler(message, 400);
  }

  // JWT Expire Error
  if (err.name === "TokenExpiredError") {
    const message = `JSON WEB TOKEN is Expired,try again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    message: err.message,
  });
};
