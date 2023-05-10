import { Request, Response, NextFunction } from "express";
import { getNoticesByTitle } from "../services/notices";

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


