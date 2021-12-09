const router = require('express').Router();
const { updateTeams, showTeams } = require('../exercicio4/');
router.get('/', showTeams);
router.post('/', updateTeams);

module.exports = router;