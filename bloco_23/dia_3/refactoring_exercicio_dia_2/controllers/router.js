const express = require('express');

const router = express.Router(
  {
    mergeParams: true,
  }
);

router.get('/', require('./list'));
router.get('/cep/:cep', require('./findByCEP'));
router.post('/cep', require('./addCEP'));
router.delete('/cep/:cep', require('./removeByCep'));

module.exports = router;