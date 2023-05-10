import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for pet"],
  },
  kind: {
    type: String,
    require: [true, "Set pet king"],
  },
  breed: {
    type: String,
    require: [true, "Set pet breed"],
  },
  sex: {
    type: String,
    enum: ["male", "female"],
    require: [true, "Set pet sex"],
  },
  dateOfBirth: {
    type: String,
    require: [true, "Set pet date of birth"],
  },
  avatar: {
    type: String,
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Pet = mongoose.model("Pets", petSchema);

export default Pet;
