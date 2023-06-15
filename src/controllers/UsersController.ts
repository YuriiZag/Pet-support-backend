import {
  getUsersPetsInfo,
  changeUserInfo,
  getAllRecipe,
  setFavoriteRecipe,
  setSavedRecipe,
  getFavoriteRecipe,
  getSavedRecipe,
  updateRecipe,
} from "../services/UsersPets";
import { Response, NextFunction, Request } from "express";
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
};

export const recipeCRTL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const response = await getAllRecipe();

  return res.status(201).json({ message: "Success", response });
};
export const updateRecipeCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const body = req.body
  const response = await updateRecipe(id, body);

  return res.status(201).json({ message: "Success", response });
};
export const setFavoriteRecipeCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  const response = await setFavoriteRecipe(id, req.body);

  return res.status(201).json({ message: "Success", response });
};
export const getFavoriteRecipeCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const response = await getFavoriteRecipe();

  return res.status(201).json({ message: "Success", response });
};
export const getSavedRecipeCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const response = await getSavedRecipe();

  return res.status(201).json({ message: "Success", response });
};

export const setSavedRecipeCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  const response = await setSavedRecipe(id, req.body);

  return res.status(201).json({ message: "Success", response });
};
