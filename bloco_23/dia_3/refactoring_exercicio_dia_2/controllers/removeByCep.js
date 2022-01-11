const statusCode = require('http-status-codes').StatusCodes;

const Service = require('../services/removeByCep');
const formatCEP = require('../helpers/formatCep');


module.exports = async (req, res, next) => {
  try {
    const { cep } = req.body; 
    const formatedCep = formatCEP(cep);
    const data = await Service.remove(formatedCep);
    return res.status(statusCode.ACCEPTED).end();
    
  } catch (err) {
    next(err);
  }
};