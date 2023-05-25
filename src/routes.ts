import { addNoticeValidation } from './middlewares/noticeValidation';
import { registrationCtrl,LogOutCtrl,currentCtrl,loginCtrl } from './controllers/authController';
import { authMiddleware } from './middlewares/authMiddleware';
import { Express, Request, Response } from "express";
import asyncWrapper from "./heplers/asyncWrapper";
import {
  addNoticeCTRL,
  deleteNoticesByIdCTRL,
  getNoticesByCategoryCTRL,
  getNoticesByIdCTRL,
  getNoticesByTitleCTRL,
  getPrivatFavouriteNoticesCTRL,
  getPrivatNoticesCTRL,
  setFavouriteNoticeCTRL,
} from "./controllers/noticesController";
import { addPetCTRL, deletePetCTRL } from "./controllers/petController";
import {
  addServiceCTRL,
  getAllServicesCTRL,
} from "./controllers/serviceController";
import { uploadCloud } from "./middlewares/fileUploadMiddleware";
import { getUsersPetsInfoCTRL } from "./controllers/UsersPetsController";


const routes = (app: Express) => {
  app.delete("/api/pets/:petId", authMiddleware, asyncWrapper(deletePetCTRL));
  app.post(
    "/api/pets",
    authMiddleware,
    uploadCloud.single("photo"),
    asyncWrapper(addPetCTRL)
  );

  app.get("/api/user/pets", authMiddleware, asyncWrapper(getUsersPetsInfoCTRL));

  app.post(
    "/api/service",
    uploadCloud.single("logo"),
    asyncWrapper(addServiceCTRL)
  );
  app.get("/api/service", asyncWrapper(getAllServicesCTRL));

  app.post("/registration", asyncWrapper(registrationCtrl));
  app.post("/login", asyncWrapper(loginCtrl));
  app.get("/current", authMiddleware, asyncWrapper(currentCtrl));
  app.patch("/logout", authMiddleware, asyncWrapper(LogOutCtrl));

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
  app.post(
    "/api/notices",
    authMiddleware,
    uploadCloud.single("avatar"),
    addNoticeValidation,
    asyncWrapper(addNoticeCTRL)
  );
  app.delete("/api/notice/:id",authMiddleware, asyncWrapper(deleteNoticesByIdCTRL));

};
export default routes;
