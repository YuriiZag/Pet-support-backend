import { Request, Response, NextFunction } from "express";
import {  getNews } from "../services/news";

  export const getNewsCTRL = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const response = await getNews();
    return res.status(201).json({ message: "Success", response });
  };