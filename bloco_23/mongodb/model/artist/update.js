const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (artist) => {
  const { _id, ...dataWithoutId } = artist;
  await (await connection()).collection('artist').updateOne(
    {
      _id,
    },
    {
      $set: dataWithoutId,
    }
  );
  return artist; // good practice do return updated object(artist)
};