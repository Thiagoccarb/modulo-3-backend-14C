import { Request, Response, NextFunction } from 'express';

import StatusCodes from '../enums/StatusCodes';

function error(err: any, _req: Request, res: Response, _next: NextFunction) {
  console.error(err.message);
  return res.status(StatusCodes.INERNAL_ERROR).json({ message: err.message });
};

export default error;