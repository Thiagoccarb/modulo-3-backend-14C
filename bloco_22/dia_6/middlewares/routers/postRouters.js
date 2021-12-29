const router = require('express').Router();

const { all, id, validate } = require('../exercicio3/');
router.get('/', all);
router.get('/:id',validate, id);

module.exports = router;