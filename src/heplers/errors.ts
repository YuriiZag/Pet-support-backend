import { NextFunction, Request, Response } from "express";
import log from "../utils/logger";

export class MyCustomError extends Error {
  status = 400;
  constructor(message: string) {
    super(message);
  }
}
export class ValidationError extends MyCustomError {
  status = 400;
  constructor(message: string) {
    super(message);
  }
}

export class ConflictError extends MyCustomError {
  status = 409;
  constructor(message: string) {
    super(message);
  }
}

export class WrongParametersError extends MyCustomError {
  status = 404;
  constructor(message: string) {
    super(message);
  }
}

export class NotAuthorizedError extends MyCustomError {
  status = 401;
  constructor(message: string) {
    super(message);
  }
}

export const errorHadler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof MyCustomError) {
    return res.status(err.status).json({ message: err.message });
  }  
  return res.status(500).json({
    message: err.message});
};
