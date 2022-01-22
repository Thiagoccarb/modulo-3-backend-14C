const express = require('express');

const login = require('./login');
const validationJWT = require('../middlewares/validateJWT');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');


const router = express.Router({ mergeParams: true });

router.post('/login', login);
router.get('/users/me', validationJWT);
router.get('/top-secret', auth, admin);


module.exports = router;