const router = require('express').Router();
const { read, create } = require('../services/cep');

const badRequest = 400;
const internalError = 500;

router.get('/ping', (_req, res, next) => {
  try {
    res.status(200).json({ message: 'pong!' });
  } catch (err) {
    next({
      statusCode: badRequest,
      message: err.message,
    });
  };
});

router.get('/cep/:cep', async (req, res, next) => {
  try {
    const {cep } = req.params;
    const task = await read(cep);
    if (task.message) {
      return next({
        statusCode: task.statusCode,
        message: task.message,
      });
    }
    return res.status(200).json(task[0]);
  } catch (err) {
    next({
      statusCode: internalError,
      message: err.message,
    });
  };
});

router.post('/cep', async (req, res, next) => {
  try {
    const { cep, logradouro, bairro, localidade, uf} = req.body;
    const [existingCep] = await read(cep);

    if (existingCep.cep) {
      return next({
        statusCode: 409,
        message: 'CEP já existente',
      });
    }
    const task = await create(cep, logradouro, bairro, localidade, uf);
    const { error, statusCode} = task;

    if (statusCode) {
      return next({
        statusCode: task.statusCode,
        message: task.message,
      });
    }
    if (error) {
      return next({
        statusCode: badRequest,
        message: error.message
      });
    }
    return res.status(201).json(task);
  } catch (err) {
    next({
      statusCode: internalError,
      message: err.message,
    })
  }
})

module.exports = router;