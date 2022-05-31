import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../models';

/**
 * Handle all of the errors
 * @param error Error object
 * @param req Request
 * @param res Response
 * @param next Next middleware
 */
const handleError = (error: ApiError, req: Request, res: Response, next: NextFunction) => {
  if (!error.status) error.status = 500;
  res
    .status(error.status)
    .json({
      message: error.message,
    });
};

export default handleError;
