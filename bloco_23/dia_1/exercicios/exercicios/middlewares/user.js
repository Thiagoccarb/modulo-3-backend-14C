const router = require('express').Router();
const { create, read, readId, update } = require('../models/user');

router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const add = await create(firstName, lastName, email, password);
    return res.status(201).json(add);
  } catch (err) {
    next(err)
  }
});

router.get('/', async (req, res, next) => {
  try {
    const data = await read();
    if (!data) return res.status(200).send([]);
    return res.status(200).json(data);
  } catch (err) {
    next({ statusCode: 400, message: err.message })
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await readId(parseInt(id, 10));
    if (!data) return res.status(404).end();
    return res.status(200).json(data);
  } catch (err) {
    next({ statusCode: 400, message: err.message })
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    console.log(id);
    const data = await update(
      firstName,
      lastName,
      email,
      password,
      id)
    if (!data) return res.status(404).end();
    return res.status(200).json(data);
  } catch (err) {
    next({ statusCode: 400, message: err.message })
  }
});

module.exports = router;