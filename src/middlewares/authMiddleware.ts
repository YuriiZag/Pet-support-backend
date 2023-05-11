import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../heplers/errors";
import jwt from "jsonwebtoken";
import config from "config";
import { DecodeOptions } from "jsonwebtoken";

const salt = config.get<DecodeOptions>("salt");

export const authMiddleware = (
  req: Request,
  res: any,
  next: NextFunction
) => {
  if (!req.headers["authorization"]) {
    next(new NotAuthorizedError("Not authorized"));
  }
  const token = req.headers["authorization"]?.split(" ");
  if (token) {
    try {
      const user = jwt.decode(token[1], salt);
      
      res.user = user
    } catch (error) {
      next(new NotAuthorizedError("Not authorized"));
    }
  }

  if (!token) {
    next(new NotAuthorizedError("Not authorized"));
  }

  next();
};
