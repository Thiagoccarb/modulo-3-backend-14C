const statusCode = require('http-status-codes').StatusCodes;

const Service = require('../services/findByCEP');
const Joi = require('joi');
const formatCEP = require('../helpers/formatCep');


module.exports = async (req, res, next) => {
  try {
    const { cep } = req.params;
    const newCep = formatCEP(cep);

    const schema = Joi.object({
      newCep: Joi.string()
        .length(9)
        .regex(/^\d{5}-\d{3}$/)
        .required(),
    })
    .validate({ newCep });
    if (schema.error) {
      return next({ message: 'CEP com formato inválido' });
    }

    const data = await Service.getByCEP(newCep);
    if (!data) return res.status(statusCode.NOT_FOUND).json({ message: 'CEP não encontrado' });
    return res.status(statusCode.OK).json(data[0]);
  } catch (err) {
    next(err);
  };
};