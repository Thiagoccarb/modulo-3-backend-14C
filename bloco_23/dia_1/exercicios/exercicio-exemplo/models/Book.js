const connection = require("./connection")

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;'
  );
  return books.map((el) => ({
    id: el.id,
    title: el.title,
    authorId: el.author_id,
  }));
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `SELECT id, title, author_id 
      FROM model_example.books 
      WHERE author_id = ${id};`
  );
  if (books.length === 0) return null;
  return books.map((el) => ({
    id: el.id,
    title: el.title,
    authorId: el.author_id,
  }));
}

const isValid = async (title, authorId) => {
  const validateId = await getByAuthorId(authorId)
  if (!title || typeof (title) !== 'string' || title.length <= 2) return false;
  if (!authorId || !validateId) return false;
  return true;
}

const create = async (title, authorId) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
    [title, authorId],
  )
};

module.exports = {
  getAllBooks,
  getByAuthorId,
  create,
  isValid,
};