const express = require('express');

const app = express();
const error = require('./middlewares/error');
const router = require('./controllers/router');

app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.use(error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});

module.exports = app; // testing purposes