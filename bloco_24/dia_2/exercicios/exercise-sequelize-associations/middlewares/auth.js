const jwt = require('jsonwebtoken');
const joi = require('joi');

const regexCapitalLetter = /^(?=.*[a-z])[a-z]*[A-Z][a-z]*$/;
const OK = 200;
const { JWT_SECRET } = process.env;

const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };


module.exports = async (req, res, next) => {
  try {
    const userData = { login, password }
    const { login, password } = req.body;
    const { error } = joi.object({
      login: joi.string().min(5).required(),
      password: joi.string().min(7).regex(regexCapitalLetter),
    }).validate(userData);
    if (error) {
      next({
        code: 400,
        message: error.details[0].message,
      });
    }
    const token = jwt.sign({ userData }, JWT_SECRET, jwtConfig);
    return res.status(OK).json({ token });
  } catch (err) {
    next(err);
  }
};