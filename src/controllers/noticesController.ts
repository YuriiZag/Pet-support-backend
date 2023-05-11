import { Request, Response, NextFunction } from "express";
import { getNoticesByCategory, getNoticesById, getNoticesByTitle } from "../services/notices";

export const getNoticesByTitleCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    let title: any = ""
    title = req.query.title
  const response = await getNoticesByTitle(title);
  return res.status(201).json({ message: "Contact Added", response });
};

export const getNoticesByCategoryCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let category: any = "";
  category = req.params.category;
  const response = await getNoticesByCategory(category);
  return res.status(201).json({ message: "Contact Added", response });
};


export const getNoticesByIdCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let id: any = "";
  id = req.params.id;
  const response = await getNoticesById(id);
  return res.status(201).json({ message: "Contact Added", response });
};

export const setFavouriteNoticeCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let id: any = "";
  id = req.params.id;
  const response = await getNoticesById(id, req.user);
  return res.status(201).json({ message: "Contact Added", response });
};