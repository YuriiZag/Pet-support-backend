import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  logo: {
    type: String,
  },
  name: {
    type: String,
    require: [true, "Set title"],
  },
  time: {
    type: String,
    require: [true, "Set working time"],
  },
  address: {
    type: String,
    require: [true, "Set address"],
  },
  email: {
    type: String,
    require: [true, "Set email"],
  },
  phone: {
    type: String,
    require: [true, "Set phone"],
  },
  url: String,
  mapUrl: String,
});

const Service = mongoose.model("Services", serviceSchema);

export default Service;
