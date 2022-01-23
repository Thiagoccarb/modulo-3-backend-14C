const joi = require('joi');
const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const statusCode = require('http-status-codes').StatusCodes;

const secret = 'mySecret';

module.exports = rescue((req, res, next) => {
  const { username, password } = req.body;
  const schema = joi.object({
    username: joi.string().required().min(5),
    password: joi.string().min(5),
  });
  const { error } = schema.validate({ username, password });
  if (error) return next(error);
  const admin = false;
  const data = {
    username,
    admin: username === 'admin' && password === 's3nh4s3gur4'
      ? true : admin,
  };
  const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };
  const token = jwt.sign({ data }, secret, jwtConfig);
  return res.status(statusCode.CREATED).json(token);
});