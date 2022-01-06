const { readUser, createUser } = require('../services/user');

const router = require('express').Router();


router.get('/', async (_req, res, next) => {
  try {
    const data = await readUser();
    if (!data) return res.status(200).send([]);
    return res.status(200).json(data);
  } catch (err) {
    next({ statusCode: 400, message: err.message })
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const task = await createUser(firstName, lastName, email, password);
    if (task.message) {
      return next({ statusCode: 400, message: task.message })
    }
    return res.status(200).json(task);
  } catch (err) {
    next(err)
  }
});

module.exports = router;
