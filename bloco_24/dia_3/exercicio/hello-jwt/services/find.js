const { Member } = require('../models');

module.exports = async (username) => {
  const data = await Member.findOne({
    where: { username },
  });
  console.log(data);
  if (!data) return null;
  return data;
};