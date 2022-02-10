const { User } = require('../models');

module.exports = async (_req, res) => {
    const users = await User.findAll();
    console.log(users);
    res.status(200).json(users);
};