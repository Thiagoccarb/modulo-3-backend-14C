const router = require('express').Router({ mergeParams: true });

const plans = require('./plans');

router.post('/', plans.create);

module.export = router;