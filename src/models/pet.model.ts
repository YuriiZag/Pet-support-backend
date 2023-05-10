import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  animal: {
    type: String,
    require: true,
  },
  breed: {
    type: String,
    require: true,
  },
  place: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
});

const Pet = mongoose.model("Pet", petSchema);

export default Pet;
