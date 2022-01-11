const connection = require('./connection');

const readCep = async (cep) => {
  const [data] = await connection().execute(
    `SELECT * FROM cep_lookup.ceps
WHERE cep = ?;`, [cep]
  );
  if (!data.length) return null;
  return data;
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  const [data] = await connection().execute(
    `INSERT INTO cep_lookup.ceps 
(cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)`,
    [cep, logradouro, bairro, localidade, uf],
  )
  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  };
};

module.exports = {
  readCep,
  createCep
};