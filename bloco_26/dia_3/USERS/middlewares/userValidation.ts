import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/StatusCodes';

import User from '../interfaces/users';

const fields = ['name', 'email', 'password'];

function validateFields(userData: User): [boolean, string | null] {
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    console.log('test', field)
    if (!Object.prototype.hasOwnProperty.call(userData, field)) {
      return [false, field];
    }
  }
  return [true, null];
}

function validateValues(userData: User): [boolean, string | null] {
  const entries = Object.entries(userData);
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const [key, value] = entry;
    if (!value) {
      return [false, key]
    }
  }
  return [true, null];
}

function validadeUser(req: Request, res: Response, next: NextFunction) {
  const userData = req.body;
  console.log(userData);
  let [isValid, field] = validateFields(userData);
  console.log(isValid, field);
  if (!isValid) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({
      message: `${field} is required`,
    });
  }
  [isValid, field] = validateValues(userData);
  if (!isValid) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({
      message: `${field} cannot be empty, null or undefined`,
    });
  }
  next();
};

export default validadeUser;
