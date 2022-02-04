const jwt = require('jsonwebtoken');

const { User } = require('../models');
const { JWT_SECRET } = process.env

module.exports = async (req, res) => {
  try {
    const { username, password, id } = req.body;

    if (!username || !password)
      return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

    const user = await User.findOne({ where: { id } });

    if (!user || user.password !== password)
      return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

    const token = jwt.sign({ username }, JWT_SECRET);

    return res.status(201).json({
      message: 'Login efetuado com sucesso',
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
