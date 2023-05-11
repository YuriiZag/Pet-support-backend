import { Express, Request, Response } from "express";
import asyncWrapper from "./heplers/asyncWrapper";
import { addPetCTRL, getAllPetsCTRL } from "./controllers/petController";
import { getNoticesByCategoryCTRL, getNoticesByIdCTRL, getNoticesByTitleCTRL } from "./controllers/noticesController";


const routes = (app: Express) => {
  app.get("/api/pets", asyncWrapper(getAllPetsCTRL));
  app.get("/lol", (req: Request, res: Response) => res.sendStatus(200).json());
  app.post("/api/pets", asyncWrapper(addPetCTRL));

  app.get("/api/notices", asyncWrapper(getNoticesByTitleCTRL));
  app.get("/api/notices/:category", asyncWrapper(getNoticesByCategoryCTRL));
  app.get("/api/notices/:id", asyncWrapper(getNoticesByIdCTRL));
  app.patch("/api/notices/:id", asyncWrapper());
  app.get("/api/notices/privat");
  app.get("/api/notices/privat/favourite");
  app.post("/api/notices");
  app.delete("/api/notices/:id");
};
export default routes;
