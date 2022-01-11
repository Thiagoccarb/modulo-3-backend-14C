const { create, read, readId, update } = require('../models/user');

const readUser = async () => {
  const data = await read();
  return data;
};

const createUser = async (firstName, lastName, email, password) => {
  const minLength = 5
  const msg1 = `O campo 'password' é obrigatório`
  const msg2 = `O campo 'password' deve ter pelo menos 6 caracteres`

  if (!firstName || typeof firstName !== 'string') {
    return { message: 'Insira um nome válido' };
  }
  if (!lastName || typeof firstName !== 'string') {
    return { message: 'Insira um sobrenome válido' };
  }
  if (!email || typeof firstName !== 'string') {
    return { message: 'Insira um email válido' };
  }
  if (!password ) {
    return { message: msg1 };
  }
  if (password.length <= minLength ) {
    return { message: msg2 };
  }
  const data = await create(firstName, lastName, email, password);
  return data;
};


module.exports = {
  readUser,
  createUser
};