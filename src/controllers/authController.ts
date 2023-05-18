import { register, login } from "../services/auth";
import { Request, Response, NextFunction } from "express";

import { IUser } from "../interfaces/IUser";

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
  const { token, user } : {token: string, user: IUser} = await login(req.body);
  res.json({
    user,
    token,
  });
};
