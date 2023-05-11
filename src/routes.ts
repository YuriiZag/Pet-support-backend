import { Express, Request, Response } from "express";
import asyncWrapper from "./heplers/asyncWrapper";

import { deleteNoticesByIdCTRL, getNoticesByCategoryCTRL, getNoticesByIdCTRL, getNoticesByTitleCTRL, getPrivatFavouriteNoticesCTRL, getPrivatNoticesCTRL, setFavouriteNoticeCTRL } from "./controllers/noticesController";

import {
  addPetCTRL,
  deletePetCTRL,
  getAllPetsCTRL,
} from "./controllers/petController";

import { addServiceCTRL,getAllServicesCTRL } from "./controllers/serviceController";
import { addNewsCTRL, getAllNewsCTRL } from "./controllers/newsContoller";

const routes = (app: Express) => {
  app.get("/api/pets", asyncWrapper(getAllPetsCTRL));
  app.delete("/api/pets/:petId", asyncWrapper(deletePetCTRL));
  app.post("/api/pets", asyncWrapper(addPetCTRL));


  app.post('/api/service', asyncWrapper(addServiceCTRL));
  app.get('/api/service', asyncWrapper(getAllServicesCTRL));

  app.post('/api/news', asyncWrapper(addNewsCTRL));
  app.get('/api/news', asyncWrapper(getAllNewsCTRL));

  app.get("/api/notices", asyncWrapper(getNoticesByTitleCTRL));
  app.get("/api/notices/:category", asyncWrapper(getNoticesByCategoryCTRL));
  app.get("/api/notices/:id", asyncWrapper(getNoticesByIdCTRL));
  app.patch("/api/notices/:id", asyncWrapper(setFavouriteNoticeCTRL));
  app.get("/api/notices/privat", asyncWrapper(getPrivatNoticesCTRL));
  app.get("/api/notices/privat/favourite", asyncWrapper(getPrivatFavouriteNoticesCTRL));
  app.post("/api/notices");
  app.delete("/api/notices/:id", asyncWrapper(deleteNoticesByIdCTRL));

};
export default routes;
