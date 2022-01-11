const connection = require('./connection');

const getByID = async (ID) => {
  const [data] = await connection().execute(
    `SELECT * FROM test.test
  WHERE id = ?;`, [ID]
  );
  if (!data.length) return null;
  return {
    ID,
    title,
    directedBy,
    releaseYear,
  };
};

module.exports = {
  getByID,
};