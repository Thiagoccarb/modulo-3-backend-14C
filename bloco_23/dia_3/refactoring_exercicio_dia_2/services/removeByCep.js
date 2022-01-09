const Ceps = require('../models/ceps');

const remove = async (cep) => {
  const data = Ceps.removeByCep(cep);
  return data
};

module.exports = {
  remove,
};