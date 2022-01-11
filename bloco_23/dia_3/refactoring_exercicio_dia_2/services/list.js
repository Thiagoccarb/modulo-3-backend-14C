const Ceps = require('../models/ceps');

const getAllCeps = async () => {
  const data = await Ceps.getAll();
  return data
};

module.exports = {
  getAllCeps
}