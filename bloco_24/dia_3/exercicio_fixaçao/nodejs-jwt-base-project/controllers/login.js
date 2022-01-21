const { User } = require('../models');
const jwt = require('jsonwebtoken'); // declarando a variável da biblioteca;

/* Sua chave secreta. É com ela que os dados do seu usuário serão encriptados.
   Em projetos reais, armazene-a numa variável de ambiente e tenha cuidado com ela, pois só quem tem acesso
   a ela poderá criar ou alterar tokens JWT. */
const secret = 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

    const user = await User.findOne({ where: { username } });

    if (!user || user.password !== password)
      return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });
    /* Criamos uma config básica para o nosso JWT, onde:
        expiresIn -> significa o tempo pelo qual esse token será válido;
        algorithm -> algoritmo que você usará para assinar sua mensagem
                    (lembra que falamos do HMAC-SHA256 lá no começo?). */

    /* A propriedade expiresIn aceita o tempo de forma bem descritiva. Por exemplo: '7d' = 7 dias. '8h' = 8 horas. */
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user }, secret, jwtConfig);

    return res.status(200).json({ token });

    // return res.status(200).json({ message: 'Login efetuado com sucesso'});
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
