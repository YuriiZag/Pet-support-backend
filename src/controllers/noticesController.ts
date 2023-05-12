import { Request, Response, NextFunction } from "express";
import { deleteNoticesById, getNoticesByCategory, getNoticesById, getNoticesByTitle, getPrivatNotices, setFavouriteNotice } from "../services/notices";
import { IUserRequest } from "../interfaces/IUserRequest";
import { ParsedUrlQuery } from "querystring";

export const getNoticesByTitleCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    let title: any = "";
    title = req.query.title
  const response = await getNoticesByTitle(title);
  return res.status(201).json({ message: "Contact Added", response });
};

export const getNoticesByCategoryCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let category: string | undefined = "";
  category = req.params.category;
  const response = await getNoticesByCategory(category);
  return res.status(201).json({ message: "Contact Added", response });
};


export const getNoticesByIdCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let id: string | undefined = "";
  id = req.params.id;
  const response = await getNoticesById(id);
  return res.status(201).json({ message: "Contact Added", response });
};

export const setFavouriteNoticeCTRL = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  let id: string | undefined = "";
  id = req.params.id;
  const response = await setFavouriteNotice(id, req.user);
  return res.status(201).json({ message: "Contact Added", response });
};

export const getPrivatNoticesCTRL = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  const response = await getPrivatNotices(req.user);
  return res.status(201).json({ message: "Contact Added", response });
};

export const getPrivatFavouriteNoticesCTRL = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  const response = await getPrivatNotices(req.user);
  return res.status(201).json({ message: "Contact Added", response });
};

export const deleteNoticesByIdCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let id: string | undefined = "";
  id = req.params.id;
  const response = await deleteNoticesById(id);
  return res.status(201).json({ message: "Contact Added", response });
};