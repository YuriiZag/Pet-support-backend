import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for pet"],
  },
  breed: {
    type: String,
    require: [true, "Set pet breed"],
  },
  dateOfBirth: {
    type: String,
    require: [true, "Set pet date of birth"],
  },
  photo: {
    type: String,
  },
  comments: {
    type: String,
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Pet = mongoose.model("Pets", petSchema);

export default Pet;
