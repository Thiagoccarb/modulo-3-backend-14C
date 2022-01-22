const express = require('express');

const login = require('./login');
const validationJWT = require('../middlewares/validateJWT');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const signUp = require('./signUp');

const router = express.Router({ mergeParams: true });

router.get('/users/me', validationJWT);
router.post('/login', login);
router.post('/signup', signUp);
router.get('/top-secret', auth, admin);

module.exports = router;