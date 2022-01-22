const statusCode = require('http-status-codes').StatusCodes;
const rescue = require('express-rescue');
const create = require('../services/create');

const createRandomNumber = () => {
  const random = Math.floor(Math.random() * 100);
  return random;
};

const validateKeys = (username, password) => {
  if (!username || typeof username !== 'string') return null;
  if (!password || typeof password !== 'string') return null;
  return true;
};

module.exports = rescue(async (req, res, next) => {
  const number = createRandomNumber();
  const admin = number > 50 ? true : null;
  const { username, password } = req.body;
  const validation = validateKeys(username, password);
  if (!validation) {
    return res.status(statusCode.UNPROCESSABLE_ENTITY).json({
      message: 'invalid username or password',
    });
  }
  const newPerson = await create(username, password, admin);
  if (!newPerson) {
    return res.status(statusCode.CONFLICT).json({
      message: 'user already exists',
    });
  }
  req.user = newPerson;
  res.status(statusCode.CREATED).json(newPerson);
  next();
});