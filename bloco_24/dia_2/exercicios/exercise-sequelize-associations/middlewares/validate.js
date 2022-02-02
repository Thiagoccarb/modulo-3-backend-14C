const jwt = require('jsonwebtoken');

const unauthorized = 404;

const { JWT_SECRET } = process.env;

const jwtConfig = { algorithms: ['HS256'] };

module.exports = async (req, res, next) => {
  try {
    const authorization = 'authorization';
    const token = req.headers[authorization];
    if (!token) {
      return res.status(unauthorized).json({
        message: 'forbbiden access',
      });
    }
    jwt.verify({ token, JWT_SECRET, jwtConfig });
    return next();
  } catch (err) {
    next(err);
  }
};