import { Express, Request, Response } from "express";
import asyncWrapper from "./heplers/asyncWrapper";

import { addNoticeCTRL, deleteNoticesByIdCTRL, getNoticesByCategoryCTRL, getNoticesByIdCTRL, getNoticesByTitleCTRL, getPrivatFavouriteNoticesCTRL, getPrivatNoticesCTRL, setFavouriteNoticeCTRL } from "./controllers/noticesController";

import {
  addPetCTRL,
  deletePetCTRL,
  getAllPetsCTRL,
} from "./controllers/petController";

import { addServiceCTRL,getAllServicesCTRL } from "./controllers/serviceController";
import { addNewsCTRL, getAllNewsCTRL } from "./controllers/newsContoller";
import { getAuthValidation } from "./middlewares/authValidation";
import { registrationCtrl,loginCtrl } from "./controllers/authController";
import { authMiddleware } from "./middlewares/authMiddleware";
import { uploadCloud } from "./middlewares/fileUploadMiddleware"
const routes = (app: Express) => {
  app.get("/api/pets",authMiddleware, asyncWrapper(getAllPetsCTRL));
  app.delete("/api/pets/:petId",authMiddleware, asyncWrapper(deletePetCTRL));
  app.post("/api/pets",authMiddleware, asyncWrapper(addPetCTRL));


  app.post('/api/service', asyncWrapper(addServiceCTRL));
  app.get('/api/service', asyncWrapper(getAllServicesCTRL));

  app.post('/api/news', asyncWrapper(addNewsCTRL));
  app.get('/api/news', asyncWrapper(getAllNewsCTRL));

  app.post('/registration',getAuthValidation, asyncWrapper(registrationCtrl));
  app.post('/login',getAuthValidation, asyncWrapper(loginCtrl));

  app.get("/api/notices", asyncWrapper(getNoticesByTitleCTRL));
  app.get("/api/notices/:category", asyncWrapper(getNoticesByCategoryCTRL));
  app.get("/api/notice/:id", asyncWrapper(getNoticesByIdCTRL));
  app.patch(
    "/api/notice/:id",
    authMiddleware,
    asyncWrapper(setFavouriteNoticeCTRL)
  );
  app.get("/api/privat-notices",authMiddleware, asyncWrapper(getPrivatNoticesCTRL));
  app.get("/api/privat-notices/favourite",authMiddleware, asyncWrapper(getPrivatFavouriteNoticesCTRL));  
  app.post("/api/notices", authMiddleware, uploadCloud.single("avatar"), asyncWrapper(addNoticeCTRL));
  app.delete("/api/notice/:id",authMiddleware, asyncWrapper(deleteNoticesByIdCTRL));

};
export default routes;
