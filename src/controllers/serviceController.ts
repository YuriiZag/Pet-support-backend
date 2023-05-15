import { Request, Response, NextFunction } from "express";
import { addService, getAllServices } from "../services/services";

export const addServiceCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const path = req.file?.path as string
  const response = await addService(req.body, path);
  return res.status(201).json({ message: "Service added", response });
};

export const getAllServicesCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const response = await getAllServices();
  return res.status(201).json({ message: "Success", response });
};
