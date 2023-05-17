import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { ValidationError } from "../heplers/errors";
export const getPetValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    kind: Joi.string().required(),
    breed: Joi.string().required(),
    sex: Joi.string().required().valid("male", "female"),
    dateOfBirth: Joi.string().required(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    next(new ValidationError(validationResult.error.details[0].message));
  }
  next();
};
