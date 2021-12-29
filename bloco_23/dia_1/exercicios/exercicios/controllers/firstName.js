module.exports = (req, _res, next) => {
  const { firstName } = req.body;
  try {
    if (!firstName) {
      next({ statusCode: 400, message: `O campo 'firstName' é obrigatório` })
    }
    next();
  }catch (err) {
    next(err)
  }
}; 