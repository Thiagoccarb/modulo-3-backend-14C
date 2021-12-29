module.exports = async (req, _res, next) => {
  const { authorization } = req.headers;
  const regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{12,}$/g;
  try {
    if (!regex.test(authorization)) {
      throw new Error('invalid token!')
    }
    next()
  } catch (err) {
    next(err)
  }
};