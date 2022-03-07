import express, { Request, Response } from 'express';

import error from './middlewares/error';
import router from './routes/users';

const app = express();

app.use(express.json());

app.use('/users', router);

app.use(error);

const PORT = 3000;

app.listen(PORT, () => `running on port ${PORT}`,);