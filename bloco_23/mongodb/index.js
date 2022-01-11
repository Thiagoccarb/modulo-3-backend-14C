// npm i mongodb

const express = require('express');

const error = require('./middlewares/error');
const artists = require('./controller/artists/router');
const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/', artists);

app.use(error);

app.listen(PORT, () => console.log(`running on port ${PORT}`));