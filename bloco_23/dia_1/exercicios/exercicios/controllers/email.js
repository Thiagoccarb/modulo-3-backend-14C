module.exports = (req, _res, next) => {
  const { email } = req.body;
  if (!email) {
    next({ statusCode: 400, message: `O campo 'email' é obrigatório` })
  }
  next();
}; 