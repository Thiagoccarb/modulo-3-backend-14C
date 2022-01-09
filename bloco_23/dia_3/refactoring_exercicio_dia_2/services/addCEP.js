const Ceps = require('../models/ceps');

const addCEP = async (values) => {
  const { newCep } = values;
  const existingCep = await Ceps.getByCEP(newCep);
  if (existingCep) {
    return null;
  };
  const data = await Ceps.addCEP(values);
  return data
};

 module.exports = {
   addCEP,
 };