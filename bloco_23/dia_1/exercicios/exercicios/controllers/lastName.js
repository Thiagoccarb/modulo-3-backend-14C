module.exports = (req, _res, next) => {
  const { lastName } = req.body;
  if (!lastName) {
    next({ statusCode: 400, message: `O campo 'lastName' é obrigatório` })
  }
  next();
}; 