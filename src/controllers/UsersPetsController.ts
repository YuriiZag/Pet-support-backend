import { getUsersPetsInfo } from "./../services/UsersPets";
import { Response, NextFunction } from "express";
import { IUserRequest } from "../interfaces/IUserRequest";

export const getUsersPetsInfoCTRL = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  console.log(req.user.userId);
  
  const response = await getUsersPetsInfo(req.user.userId);
  return res.status(201).json({ message: "Success", response });
};
