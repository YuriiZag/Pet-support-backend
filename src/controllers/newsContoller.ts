import { Request, Response, NextFunction } from "express";
import { addNews,getAllNews } from "../services/news";

export const addNewsCTRL = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const response = await addNews(req.body);
    return res.status(201).json({ message: "News added", response });
  };

  export const getAllNewsCTRL = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const response = await getAllNews();
    return res.status(201).json({ message: "Success", response });
  };