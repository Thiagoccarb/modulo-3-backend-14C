import { Router, Request, Response, NextFunction } from "express";

import { read, write } from "../utils";
import Book from "../interfaces/Books";
import StatusCode from "../enums/statusCodes";
import validationBook from "../middlewares/validationBook";

const router = Router();

router.get("/books", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const books = await read('./books.json');
    return res.status(StatusCode.OK).json(books);
  } catch (err: any) {
    console.error(err)
    res.status(StatusCode.INTERNAL_ERROR).json({ message: err.message });
  }
});

router.get("/books/:isbn", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isbn } = req.params;
    const books = await read('./books.json');
    const book = books.find((book) => book.isbn === isbn);
    if (!book) return res.status(StatusCode.NOT_FOUND).json({ message: 'book not found' });
    return res.status(StatusCode.OK).json(book);
  } catch (err: any) {
    console.error(err)
    res.status(StatusCode.INTERNAL_ERROR).json({ message: err.message });
  }
});

router.post("/books", validationBook, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newBook: Book = req.body;
    const books = await read('./books.json');
    const newBooks: Book[] = [...books, newBook];
    await write(newBooks);
    return res.status(StatusCode.CREATED).json(newBooks);
  } catch (err: any) {
    console.error(err)
    res.status(StatusCode.INTERNAL_ERROR).json({ message: err.message });
  }
});

router.put("/books/:isbn", validationBook, async (req: Request, res: Response) => {
  try {
    const updatedBook: Book = req.body;
    const { isbn } = req.params;
    const books = await read('./books.json');
    const index = books.findIndex((book) => book.isbn === isbn);
    if (index === -1) {
      return res.status(StatusCode.NOT_FOUND).json({ message: 'Sorry, book not found' });
    }
    books.splice(index, 1, updatedBook);
    await write(books);
    return res.status(StatusCode.OK).json(books);
  } catch (err: any) {
    console.error(err.message);
    res.status(StatusCode.INTERNAL_ERROR).json({ message: err.message });
  }
});

router.delete("/books/:isbn", async (req: Request, res: Response) => {
  try {
    const { isbn } = req.params;
    const books = await read('./books.json');
    const index = books.findIndex((book) => book.isbn === isbn);
    if (index === -1) {
      return res.status(StatusCode.NOT_FOUND).json({ message: 'Sorry, book not found' });
    }
    books.splice(index, 1);
    await write(books);
    return res.status(StatusCode.NO_CONTENT).json(books);
  } catch (err: any) {
    console.error(err.message);
    res.status(StatusCode.INTERNAL_ERROR).json({ message: err.message });
  }
});

export default router;