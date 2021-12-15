const express = require('express');
const { getAll } = require('./models/Author');
const {
  getAllBooks,
  getByAuthorId,
  create,
  isValid,
} = require('./models/Book');

const app = express();

app.use(express.json());

app.get('/authors', async (req, res, next) => {
  try {
    const authors = await getAll();
    if (authors.length === 0) return res.status(404).send('not found');
    return res.status(200).json(authors);

    next();
  } catch (err) {
    throw new Error('books not found');
  }
});

app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const books = await getByAuthorId(id);
    if (books.length === 0) return res.status(404).send('not found');
    return res.status(200).json(books);

    next()
  } catch (err) {
    throw new Error('book not found');
  }
});

app.get('/books', async (req, res) => {
  try {
    const books = await getAllBooks();
    if (books.length === 0) return res.status(404).send('not found');
    return res.status(200).json(books);

    next();
  } catch (err) {
    throw new Error('book not found');
  }
});

app.post('/books', async (req, res) => {
  const { title, author_id: authorId } = req.body;
  const validate = await isValid(title, authorId)
  if(!validate) {
    return res.status(400).json({ message: 'Dados inválidos'})
  }
  await create(title, authorId);
  return res.status(201).json({ message: 'Book has been added' });
});

app.use((err, _req, res, _next) => res.status(201).send({ message: err.message }))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Online'));
