const statusCode = require('http-status-codes').StatusCodes;

const Service = require('../services/list');

module.exports = async (_req, res, next) => {
  try {
    const data = await Service.getAllCeps();
    if (!data) {
      return res.status(statusCode.NOT_FOUND).json({ message: 'No data registered' })
    }
    return res.status(statusCode.OK).json(data);
  } catch (err) {
    next(err);
  }
};