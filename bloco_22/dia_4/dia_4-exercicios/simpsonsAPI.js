const fs = require('fs/promises');
const express = require('express');
const app = express();
const readFile = require('./readFile');
const writeFile = require('./writeFile');

// --------parte do exercicio 5 ---------------------
// app.get('/simpsons', async (req, res, next) => {
//   try {
//     const simpsons = await readFile('simpsons.json');
//     return res.status(200).json(simpsons);
//   } catch(err) {
//     next(err);
//   }
// });


app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await readFile('simpsons.json');
  if (simpsons.some((el) => parseInt(el.id, 10) === parseInt(id, 10))) {
    return res.status(409).send({ message: 'id already exists' })
  }
  const newSimpsons = [...simpsons, { id, name }];
  await writeFile(newSimpsons);
  return res.status(204).end();
});

app.get('/simpsons/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const simpsons = await readFile('simpsons.json');
    const response = simpsons.find((el) => parseInt(el.id, 10) === parseInt(id, 10));
    if (response) return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  return res.status(404).send({ message: err.message });
});

// ps -e|grep node - npm running

app.listen(3001, () => console.log('ouvindo porta 3001'));
