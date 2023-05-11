import { register, login } from "../services/auth";
import { Request, Response, NextFunction } from "express";
export const registrationCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await register(req.body);

  res.json({ user });
};

export const loginCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token, user } = await login(req.body);
  res.json({
    user: { email: user.email},
    token,
  });
};
