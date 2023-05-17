import { WrongParametersError } from "./../heplers/errors";
import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const addNoticeValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    category: Joi.string()
      .required()
      .valid("sell", "lost/found", "in good hands"),
    petName: Joi.string(),
    kind: Joi.string().required(),
    breed: Joi.string(),
    sex: Joi.string().required().valid("male", "female"),
    dateOfBirth: Joi.string(),
    avatar: Joi.string().uri(),
    owner: Joi.string(),
    place: Joi.string().required(),
    price: Joi.string(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    next(new WrongParametersError(validationResult.error.details[0].message));
  }
  next();
};
