const { User } = require('../models');
const NOT_FOUND = 404;
const INTERNAL_ERROR = 500;
const OK = 200;

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = User.findOne({ where: { id } });
    if (!user)
      return res
        .status(NOT_FOUND)
        .json({ message: 'invalid id' });
    return res
      .status(OK)
      .json(user);
  } catch (err) {
    console.error(err);
    res.
      status(INTERNAL_ERROR)
      .json({ message: 'Internal error' });
  }
};