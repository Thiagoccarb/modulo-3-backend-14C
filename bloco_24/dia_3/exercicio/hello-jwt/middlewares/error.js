const statusCode = require('http-status-codes').StatusCodes;

module.exports = (err, _req, res, _next) => {
  console.error(err);
  if (err.isJoi) {
    return res.status(statusCode.UNPROCESSABLE_ENTITY).json({
      message: err.details[0].message
    });
  }
  res.status(statusCode.INTERNAL_SERVER_ERROR).json({
    message: 'internal server error',
  })
};
