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
    petName: Joi.string().max(50),
    breed: Joi.string().max(30),
    sex: Joi.string().required().valid("male", "female"),
    dateOfBirth: Joi.string().max(10),
    avatar: Joi.string().uri(),
    owner: Joi.string(),
    place: Joi.string().required().max(30),
    price: Joi.string().max(20),
    commentary: Joi.string().max(120)
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    next(new WrongParametersError(validationResult.error.details[0].message));
  }
  next();
};
