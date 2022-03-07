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
    const users: User[] | [] = await read(file);
    if (!users.length) return res.status(StatusCode.NOT_FOUND).json({ message: 'No user registered yet' })
    return res.status(StatusCode.OK).json(users);
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
      const newUser: User = { id, name, password, email };
      users = [...users, newUser];
      await write(users);
      return res.status(StatusCode.CREATED).json(users);
    } catch (err: any) {
      next(err);
    }
  });

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.body;
    const users: User[] | [] = await read(file);
    const user = users.find((user) => user.id === id);
    if (!user) return res.status(StatusCode.NOT_FOUND).json({ message: 'User not found' });
    return res.status(StatusCode.OK).json(user);
  } catch (err: any) {
    next(err);
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body: { name, email, password }, params: { id } } = req;
    const updatedUser = { id: parseInt(id, 10), name, email, password };
    const users: User[] | [] = await read(file);
    const index = users.findIndex((user) => user.id === parseInt(id, 10));
    if (index === -1) return res.status(StatusCode.NOT_FOUND).json({ message: 'User not found' });
    users[index] = updatedUser;
    await write(users);
    return res.status(StatusCode.OK).json(updatedUser);
  } catch (err: any) {
    next(err);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { params: { id } } = req;
    const users: User[] | [] = await read(file);
    const index = users.findIndex((user) => user.id === parseInt(id, 10));
    if (index === -1) return res.status(StatusCode.NOT_FOUND).json({ message: 'User not found' });
    users.splice(index, 1);
    await write(users);
    return res.status(StatusCode.NO_CONTENT).end();
  } catch (err: any) {
    next(err);
  }
});

export default router;