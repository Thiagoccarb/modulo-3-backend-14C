const connection = require('../connection');
const { ObjectId } = require('mongodb');

module.exports = async (id) => {
  return (await connection()).collection('artists').deleteOne({
    _id: ObjectId(id) // o id está vindo como string, portanto precisa ser transformado
  })
  null;
}