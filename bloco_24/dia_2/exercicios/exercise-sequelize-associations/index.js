const express = require('express');

const app = express();
const error = require('./middlewares/error');
const patientsRouter = require('./controllers/patientsController/router');

app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', patientsRouter);

app.use(error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});

module.exports = app; // testing purposes