import { getUsersPetsInfo, changeUserInfo } from "../services/UsersPets";
import { Response, NextFunction } from "express";
import { IUserRequest } from "../interfaces/IUserRequest";

export const getUsersPetsInfoCTRL = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  const response = await getUsersPetsInfo(req.user.userId);
  return res.status(201).json({ message: "Success", response });
};

export const changeUserInfoCTRL = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  const response = await changeUserInfo(req.user.userId, req.body);
  
  return res.status(201).json({ message: "Success", response });
}
