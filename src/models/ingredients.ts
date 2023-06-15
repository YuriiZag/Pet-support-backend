import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  _id: {
    $oid: String,
  },
  ttl: String,
  desc: String,
  t: String,
  thb: String,
})

const Ingredient = mongoose.model("Ingredient", newsSchema);

export default Ingredient;
