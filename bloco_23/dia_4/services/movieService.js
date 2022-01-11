 const MovieModel = require('../models/movieModel');

 const getByID = async (ID) => {
  const data = await MovieModel.getByID(ID);
  if(!data) return null;
  return data;
 }


// regras de negócio

module.exports = {
  getByID,
}