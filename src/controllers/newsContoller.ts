import { Request, Response, NextFunction } from "express";
import { addNews,getNewsByTitle } from "../services/news";

export const addNewsCTRL = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const response = await addNews(req.body);
    return res.status(201).json({ message: "News added", response });
  };

  export const getNewsByTitleCTRL = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const title = req.query.title as string;
    const response = await getNewsByTitle(title);
    return res.status(201).json({ message: "Success", response });
  };