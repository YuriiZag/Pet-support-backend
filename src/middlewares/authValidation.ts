import { ValidationError } from "./../heplers/errors";
import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const getAuthValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .min(3)
      .max(30)
      .required(),
    password: Joi.string()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    birthday: Joi.string(),
    phone: Joi.string(),
    city: Joi.string(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    next(new ValidationError(validationResult.error.details[0].message));
  }
  next();
};
