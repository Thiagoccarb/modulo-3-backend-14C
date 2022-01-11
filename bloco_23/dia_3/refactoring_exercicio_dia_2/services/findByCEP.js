const Ceps = require('../models/ceps');

const formatCEP = require('../helpers/formatCep');


const getByCEP = async (cep) => {
  const formatedCEP = formatCEP(cep);
  const data = await Ceps.getByCEP(cep);
  return data
};

 module.exports = {
   getByCEP,
 };