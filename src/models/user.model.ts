import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import { IUser } from "../interfaces/IUser";
const userSchema = new mongoose.Schema<IUser>({
  avatar: {
    type: String,
  },
  email: {
    type: String,
    require: [true, "Set email"],
  },
  name: {
    type: String,
    require: [true, "Set email"],
  },
  password: {
    type: String,
    require: [true, "Set password"],
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
  token: String
});

userSchema.pre("save", async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

const User = mongoose.model("Users", userSchema);

export default User;
