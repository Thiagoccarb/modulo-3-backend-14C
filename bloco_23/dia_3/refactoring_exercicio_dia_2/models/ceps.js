const connection = require('./connection');

const getAll = async () => {
  const [data] = await connection().execute(
    `SELECT * FROM cep_lookup.ceps;`
  );
  if (!data.length) return null;
  return data;
};

const getByCEP = async (cep) => {
  const [data] = await connection().execute(
    `SELECT * FROM cep_lookup.ceps
  WHERE cep = ?;`, [cep]
  );
  if (!data.length) return null;
  return data;
};

const addCEP = async (values) => {
  const { newCep, logradouro, bairro, localidade, uf } = values;
  const [data] = await connection().execute(
    `INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)  VALUES (?, ?, ?, ?, ?)`, [
    newCep,
    logradouro,
    bairro,
    localidade,
    uf
  ]
  );
  return {
    newCep,
    logradouro,
    bairro,
    localidade,
    uf
  };
};

const removeByCep = async (cep) => {
  const [data] = await connection().execute(
    `DELETE FROM cep_lookup.ceps
  WHERE cep = ?;`, [cep]
  );
  console.log(data);
  return data;
};

module.exports = {
  getAll,
  getByCEP,
  addCEP,
  removeByCep,
}