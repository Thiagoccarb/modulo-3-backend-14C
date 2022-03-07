import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/StatusCodes';

const regex = /^[0-9a-zA-Z]{6,12}$/;

function validadePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  const isValid: boolean = regex.test(password);
  if (!isValid) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({
      message: `password must be between 6 to 12 characters`,
    });
  }
  next()
};

export default validadePassword;
