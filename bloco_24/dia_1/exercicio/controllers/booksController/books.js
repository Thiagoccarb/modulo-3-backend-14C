const express = require('express');
const router = express.Router();

const { Book } = require('../../models');

router.get('/', async (_req, res, next) => {
  try {
    const books = await Book.findAll();
    if (!books) return res.status(404).json({ message: 'empty DB' });
    return res.status(200).json(books);
  } catch (err) {
    next(err);
  }
});

// router.get('/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const book = await Book.findOne({
//       where: { id }
//     });
//     if (!book) return res.status(404).json({ message: 'book not found' });
//     return res.status(200).json(book);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post('/', async (req, res, next) => {
//   try {
//     const { title, author, page_quantity } = req.body;
//     const book = await Book.create({
//       title,
//       author,
//       page_quantity,
//     });
//     if (!book) return res.status(404).json({ message: 'book not found' });
//     return res.status(201).json(book);
//   } catch (err) {
//     next(err);
//   }
// });

// router.put('/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { title, author, page_quantity } = req.body;
//     const [book] = await Book.update(
//       {
//         title,
//         author,
//         page_quantity,
//       },
//       { where: { id } }
//     );
//     if (!book) return res.status(404).json({ message: 'book not found' });
//     return res.status(204).end();
//   } catch (err) {
//     next(err);
//   }
// });

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const book = await Book.destroy(
//       { where: { id } }
//     );
//     return res.status(200).json(book);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;