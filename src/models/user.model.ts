import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  avatar: {
    type: String,
  },
  email: {
    type: String,
    require: [true, "Set email"],
  },
  birthday: {
    type: String,
    require: [true, "Set birthday date"],
  },
  phone: {
    type: String,
    require: [true, "Set phone"],
  },
  city: {
    type: String,
    require: [true, "Set city"],
  },
  pets: {
    type: Array,
  },
  favourite: {
    type: Array,
  },
});

const User = mongoose.model("Users", userSchema);

export default User;
