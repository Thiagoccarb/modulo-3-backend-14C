import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/StatusCodes';

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;

function validadeEmail(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;
  const isValid: boolean = emailRegex.test(email);
  if (!isValid) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({
      message: `incorrect email format`,
    });
  }
  next()
};

export default validadeEmail;
