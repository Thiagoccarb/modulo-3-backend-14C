module.exports = (req, _res, next) => {
  const { password } = req.body;
  const minLength = 5
  const msg1 = `O campo 'password' é obrigatório`
  const msg2 = `O campo 'password' deve ter pelo menos 6 caracteres`
  try {
    if (!password) {
      next({ statusCode: 400, message: msg1 })
    }
    if (typeof(password) !== 'string' || password.length <= minLength) {
      next({ statusCode: 400, message: msg2 })
    }
    next();
  }catch (err) {
    next(err)
  }
}; 