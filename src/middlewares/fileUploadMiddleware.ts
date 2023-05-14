import { Request } from "express";
import multer from "multer";
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "do07m8yye",
  api_key: "661317545416412",
  api_secret: "zCVa6yQB5UbJNK2_LMlxwKGrKJc",
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


