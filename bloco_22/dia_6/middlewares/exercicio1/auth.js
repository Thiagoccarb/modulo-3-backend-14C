
const auth = (req, res, next) => {
  const regexPassword = /^[0-9]*$/;
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  const { username, email, password } = req.body;
  try {
    if( username.length <= 3 ) {
      throw new Error('username must have more than 3 caracteres');
    }
    if(!regexEmail.test(email)) {
      throw new Error('invalid email');
    }
    if(password.length <= 4 || password.length >= 8 || !regexPassword.test(password)) {
      throw new Error('invalid password');
    }
    return res.status(201).json({ message: 'user created' });
    next();
  }catch(err) {
    next(err)
  }
};

module.exports = auth;