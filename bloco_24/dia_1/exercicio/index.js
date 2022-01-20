const express = require('express');

const booksRouter = require('./controllers/booksController/books');
const error = require('./middlewares/error');
const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/books', booksRouter);

app.use(error);

app.listen(PORT, () => console.log(`running on port ${PORT}`));
