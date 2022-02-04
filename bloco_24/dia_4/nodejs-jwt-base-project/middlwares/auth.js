const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const { User } = require('../models');
const NOT_FOUND = 404;
const INTERNAL_ERROR = 500;
const message = 'Token não informado';

module.exports = async (req, res, next) => {
  try {
    const { hearders: { authorization } } = req;
    if (!authorization)
      return res.status(NOT_FOUND).json({ msg });
    const token = jwt.verify(authorization, JWT_KEY);
    next();
  } catch (err) {
    return res.status(INTERNAL_ERROR).json({ message: 'Internal error' })
  }
};