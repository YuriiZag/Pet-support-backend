import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../heplers/errors";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "config";
import { DecodeOptions } from "jsonwebtoken";

const salt = config.get<DecodeOptions>("salt");

type user = {
  userId: string;
  email: string;
};

interface authMiddlewareRequest extends Request {
  user?: user | JwtPayload;
}

export const authMiddleware = (
  req: authMiddlewareRequest,
  res: Response,
  next: NextFunction
): any => {
  if (!req.headers["authorization"]) {
    next(new NotAuthorizedError("Not authorized"));
  }
  const token = req.headers["authorization"]?.split(" ");
  if (token) {
    try {
      const user = jwt.decode(token[1], salt) as JwtPayload;

      req.user = user;
      
    } catch (error) {
      next(new NotAuthorizedError("Not authorized"));
    }
  }

  if (!token) {
    next(new NotAuthorizedError("Not authorized"));
  }

  next();
};
