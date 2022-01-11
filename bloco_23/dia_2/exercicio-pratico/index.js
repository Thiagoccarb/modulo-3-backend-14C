const express = require('express');

const PORT = 3000;
const router = require('./controllers/user');
const error = require('./controllers/error');
const app = express();

app.use(express.json());

app.use('/', router);

app.use(error);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
