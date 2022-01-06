const connection = require('./connection');

const read = async () => {
  const [data] = await connection().execute(
    `SELECT * FROM model_example.user;`,
  )
  if (!data.length) return null;
  return data;
};

const readId = async (id) => {
  const [data] = await connection().execute(
    `SELECT * FROM model_example.user
  WHERE id = ?;`, [id]
  );
  if (!data.length) return null;
  return data;
};

const create = async (firstName, lastName, email, password) => {
  const [data] = await connection().execute(
    `INSERT INTO model_example.user 
(first_name, last_name, email, password) VALUES (?, ?, ?, ?)`,
    [firstName, lastName, email, password],
  )
  return {
    id: data.insertId,
    firstName,
    lastName,
    email,
    password
  };
};

const update = async (firstName, lastName, email, password, id) => {
  const [data] = await connection().execute(
    `UPDATE model_example.user 
SET first_name = ?,
last_name = ?,
email = ?,
password = ?
WHERE id = ?;`,
    [firstName, lastName, email, password, parseInt(id,10)],
  );
  if(data.affectedRows === 0) return null;
  return {
    id: parseInt(id,10),
    firstName,
    lastName,
    email,
    password
  };
};

module.exports = {
  create,
  read,
  readId,
  update,
};