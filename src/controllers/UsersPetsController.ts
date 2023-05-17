import { getUsersPetsInfo } from "./../services/UsersPets";
import { Response, NextFunction } from "express";
import { IUserRequest } from "../interfaces/IUserRequest";

export const getUsersPetsInfoCTRL = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  const response = await getUsersPetsInfo(req.user);
  return res.status(201).json({ message: "Success", response });
};
