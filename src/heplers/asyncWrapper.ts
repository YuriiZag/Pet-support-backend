import { Response, Request, NextFunction } from "express";

const asyncWrapper = (controller: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    controller(req, res).catch(next);
  };
};

export default asyncWrapper;
