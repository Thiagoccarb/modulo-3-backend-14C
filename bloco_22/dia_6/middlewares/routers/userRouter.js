const router = require('express').Router();

const { auth, login } = require('../exercicio1/index');
router.post('/register', auth);
router.post('/login', login);

module.exports = router;