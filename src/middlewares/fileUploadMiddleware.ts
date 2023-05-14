import { Request } from "express";
import multer from "multer";
const cloudinary = require("cloudinary").v2;
import config from "config";
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloud_name = config.get<string>("cloud_name");
const api_key = config.get<string>("api_key");
const api_secret = config.get<string>("api_secret");

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "avatars",
  allowedFormats: ["jpg", "png"],
  filename: (req: Request, file, cb) => {
    cb(null, file.originalname);
  },
});

export const uploadCloud = multer({ storage });


