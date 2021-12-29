const token = require('../../token');

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  const regexPassword = /^[0-9]*$/;
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

  try {
    if (!regexEmail.test(email)) {
      throw new Error('invalid email');
    }
    if(password.length <= 4 || password.length >= 8 || !regexPassword.test(password)) {
      throw new Error('invalid password');
    }
    return res.status(200).json({
      message: 'login successful',
      token: token(12)
    });
    next();
  } catch (err) {
    next(err);
  }
}