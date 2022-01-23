const statusCode = require('http-status-codes').StatusCodes;

module.exports = (req, res, next) => {
  try {
    console.log(req.user);
    const { admin } = req.user;
    if (admin) {
      return res.status(statusCode.OK).json({
        secretInfo: 'Peter Parker é o Homem-Arannha',
      });
    }
    next();
  } catch (err) {
    return res.status(statusCode.FORBIDDEN).json({ message: err.message });
  }
};