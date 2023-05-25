import { Request, Response, NextFunction } from "express";
import {
  addNotice,
  deleteNoticesById,
  getNoticesByCategory,
  getNoticesById,
  getNoticesByTitle,
  getPrivatFavouriteNotices,
  getPrivatNotices,
  setFavouriteNotice,
} from "../services/notices";
import { IUserRequest } from "../interfaces/IUserRequest";

export const addNoticeCTRL = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  let filePath: string = ''
  if (req.file?.path !== undefined) {
    filePath = req.file.path;
  }

  const response = await addNotice(req.body, filePath, req.user);
  return res.status(201).json({ message: "Notice added", response });
};
export const getNoticesByTitleCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const title = req.query.title as string;
  const response = await getNoticesByTitle(title);
  return res.status(201).json({ message: "Notices by title", response });
};

export const getNoticesByCategoryCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const category = req.query.category as string;
  const response = await getNoticesByCategory(category);
  return res.status(201).json({ message: "Notices by category", response });
};

export const getNoticesByIdCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id as string;
  const response = await getNoticesById(id);
  return res.status(201).json({ message: "Notices by id", response });
};

export const setFavouriteNoticeCTRL = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id as string;
  console.log('1',req.user);
  
  const response = await setFavouriteNotice(id, req.user);
  return res.status(201).json({ message: "Notice set to favourite", response });
};

export const getPrivatNoticesCTRL = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  console.log(1);
  
  const response = await getPrivatNotices(req.user);
  return res.status(201).json({ message: "Privat notices", response });
};

export const getPrivatFavouriteNoticesCTRL = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  const response = await getPrivatFavouriteNotices(req.user);
  return res.status(201).json({ message: "Privat favourite notices", response });
};

export const deleteNoticesByIdCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id as string;
  const response = await deleteNoticesById(id);
  return res.status(201).json({ message: "Notice deleted", response });
};
