const connection = require('../connection');

module.exports = async (artist) => {
  return (await connection()).collection('artists').insertOne(artist); // insetOne returns a promise;
}