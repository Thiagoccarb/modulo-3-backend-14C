const express = require('express');
const router = require('./middlewares/user');

const app = express();
const { email, firstName, lastName, password } = require('./controllers');
const error = require('./middlewares/error');
const PORT = 3000;

app.use(express.json());

app.post('/user', firstName,
  lastName,
  email,
  password);

app.put('/user', firstName,
  lastName,
  email,
  password);

app.use('/user', router);

app.use(error);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));

