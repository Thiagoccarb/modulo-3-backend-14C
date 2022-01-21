const express = require('express');
const list = require('./list');
const getById = require('./getById');
const update = require('./update');
const remove = require('./remove');
const create = require('./create');


const router = express.Router({ mergeParams: true })

router.get('/', list);
router.post('/', create);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;