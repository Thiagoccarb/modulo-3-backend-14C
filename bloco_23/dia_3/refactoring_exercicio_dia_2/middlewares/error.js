const statusCode = require('http-status-codes').StatusCodes;

module.exports = (err, _req, res, _next) => {
  if (err.message) return   res.status(statusCode.BAD_REQUEST).json({ message: err.message });
  res.status(statusCode.INTERNAL_SERVER_ERROR).end();
};