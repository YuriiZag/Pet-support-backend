import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Set title"],
  },
  category: {
    type: String,
    enum: ["sell", "lost/found", "in good hands"],
    require: [true, "Set category"],
  },
  petName: {
    type: String
  },
  kind: {
    type: String,
    require: [true, "Set pet king"],
  },
  breed: {
    type: String,
  },
  sex: {
    type: String,
    enum: ["male", "female"],
    require: [true, "Set pet sex"],
  },
  dateOfBirth: {
    type: String,
  },
  avatar: {
    type: String,
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
  },
  place: {
    type: String,
    require: [true, "Set place"],
  },
  price: {
    type: String,
  },
});

const Notice = mongoose.model("Notices", noticeSchema);

export default Notice;
