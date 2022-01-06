const { readCep, createCep } = require('../models/cep');
const Joi = require('joi');


const badRequest = 400;
const notFound = 404;

const validateCep = (cep) => {
  if (cep.includes('-')) {
   return /^[0-9]{5}-[0-9]{3}$/.test(cep) &&
    cep.replace('-', '').length === 8 &&
    /^[0-9]{8}$/.test(cep.replace('-', ''));
  } 
  return cep.length === 8 && /^[0-9]{8}$/.test(cep);
};

const read = async (cep) => {
  const validate = validateCep(cep);
  if (!validate) {
    return {
      statusCode: badRequest,
      message: 'CEP inválido'
    };
  };

  const data = await readCep(cep);
  if (!data) {
    return {
      statusCode: notFound,
      message: 'CEP não encontrado'
    }
  };
  return data;
};


const create = async (cep, logradouro, bairro, localidade, uf) => {
  const validate = validateCep(cep);
  if (!validate) {
    return {
      statusCode: badRequest,
      message: 'CEP inválido'
    };
  };
   
  const { error } = Joi.object({
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required().length(2),
  })
    .validate({ logradouro, bairro, localidade, uf });
  // console.log(error.details[0].message)
  if (error) {
    const message = error.details[0].message
    return {
      error : {
        message
      }
    };
  };

  const data = await createCep(cep, logradouro, bairro, localidade, uf);
  return data;
};

module.exports = {
  read,
  create
};

console.log(validateCep('0101w-000'));