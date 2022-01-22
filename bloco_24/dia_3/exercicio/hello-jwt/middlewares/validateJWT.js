const jwt = require('jsonwebtoken');
const statusCode = require('http-status-codes').StatusCodes;
const secret = 'mySecret';

module.exports = (req, res, next) => {
  try {
    const token = req.headers['authorization'];
    if(!token) {
      return res.status(statusCode.FORBIDDEN).json({
      message: 'token not found'
      })
    }
    const decoded = jwt.verify(token, secret)
    const { data } = decoded;
    req.user = data;
    return res.status(statusCode.OK).json(data);
  } catch (err) {
    return res.status(statusCode.FORBIDDEN).json({ message: err.message });
  }
}