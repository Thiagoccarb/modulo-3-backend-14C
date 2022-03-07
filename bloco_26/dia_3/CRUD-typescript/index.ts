import express, { Request, Response } from 'express';
import 'dotenv/config';

import bookRouter from './routes/books';

const app = express();

app.use(express.json());

const PORT = 3000;

app.use('/', bookRouter);

app.listen(PORT, () => console.log(`running on port ${PORT}`));