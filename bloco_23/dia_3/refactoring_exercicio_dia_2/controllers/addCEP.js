const statusCode = require('http-status-codes').StatusCodes;

const Service = require('../services/addCEP');
const Joi = require('joi');
const formatCEP = require('../helpers/formatCep');

module.exports = async (req, res, next) => {
  try {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    const newCep = formatCEP(cep);

    const schema = Joi.object({
      newCep: Joi.string()
        .length(8)
        .regex(/^\d{4}-\d{3}$/)
        .required(),
      logradouro: Joi.string()
        .required(),
      bairro: Joi.string()
        .required(),
      localidade: Joi.string()
        .required(),
      uf: Joi.string()
        .length(2)
        .required(),
    })
      .validate({ newCep, logradouro, bairro, localidade, uf });
    if (schema.error) {
      return next(schema.error);
    }
    const info = { newCep, logradouro, bairro, localidade, uf }
    const data = await Service.addCEP(info);
    if (!data) {
      return res.status(statusCode.CONFLICT).json({
        message: 'CEP already registered',
      });
    }
    return res.status(statusCode.CREATED).json({
      cep,
      logradouro,
      bairro,
      localidade,
      uf
    });
  } catch (err) {
    next(err);
  }
};