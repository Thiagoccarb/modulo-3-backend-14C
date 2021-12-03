/* index.js */
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const getRoute = require('./get');
// app.get('/recipes/:id', getRoute );

const getRouteByNameQuery = require('./name');
app.get('/recipes/search', getRouteByNameQuery);

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});