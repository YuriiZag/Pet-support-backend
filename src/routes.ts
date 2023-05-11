import { Express, Request, Response } from "express";
import asyncWrapper from "./heplers/asyncWrapper";
import {
  addPetCTRL,
  deletePetCTRL,
  getAllPetsCTRL,
} from "./controllers/petController";
import { getNoticesByTitleCTRL } from "./controllers/noticesController";

const routes = (app: Express) => {
  app.get("/api/pets", asyncWrapper(getAllPetsCTRL));
  app.delete("/api/pets/:petId", asyncWrapper(deletePetCTRL));
  app.post("/api/pets", asyncWrapper(addPetCTRL));

  app.get("/api/notices/:title", asyncWrapper(getNoticesByTitleCTRL));
  app.get("/api/notices/:category");
  app.get("/api/notices/:id");
  app.get("/api/notices/favorite");
  app.get("/api/notices/privat");
  app.get("/api/notices/privat/favourite");
  app.post("/api/notices");
  app.delete("/api/notices/:id");
};
export default routes;
