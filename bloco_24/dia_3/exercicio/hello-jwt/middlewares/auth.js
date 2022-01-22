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
    const { data, data: { admin } } = decoded;
    if(!admin) {
      return res.status(statusCode.FORBIDDEN).json({ message: 'restricted access' });
    }
    req.user = data;
    next();
  } catch (err) {
    return res.status(statusCode.FORBIDDEN).json({ message: err.message });
  }
}