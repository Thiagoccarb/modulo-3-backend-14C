require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const router = require('./controllers/router');
const error = require('./middlewares/error');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/ping', controllers.ping);

app.use('/', router);
app.use(error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
