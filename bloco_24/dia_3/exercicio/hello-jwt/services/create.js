const { Member } = require('../models');
const find = require('./find');

module.exports = async (username, password, admin) => {
  const person = await find(username);
  if (person) {
    return null;
  }
  const newUser = Member.create({ username, password, admin });
  return newUser;
};