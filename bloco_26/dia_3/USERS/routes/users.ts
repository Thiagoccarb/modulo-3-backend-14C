import { Request, Response, NextFunction, Router } from 'express';

import User from '../interfaces/users';
import validadeUser from '../middlewares/userValidation';
import validadePassword from '../middlewares/passwordValidation';
import validadeEmail from '../middlewares/emailValidation';
import { read, write } from '../utils';
import StatusCode from '../enums/StatusCodes';

const router = Router();

const file = 'users.json';

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: any) {
    next(err);
  }
});

router.post(
  '/',
  validadeUser,
  validadePassword,
  validadeEmail,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      let users: User[] | [] = await read(file);
      const existingEmail = users.find((user) => user.email === email);
      if (existingEmail) return res.status(StatusCode.CONFLICT).json({ message: 'email already registered' });
      const id = users.length + 1;
      const newUser: User = { name, password, email };
      users = [...users, newUser];
      await write(users);
      return res.status(StatusCode.CREATED).json(users);
    } catch (err: any) {
      next(err);
    }
  });

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: any) {
    next(err);
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: any) {
    next(err);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: any) {
    next(err);
  }
});

export default router;