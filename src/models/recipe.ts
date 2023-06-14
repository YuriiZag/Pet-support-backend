import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  favorite: {
    type: Boolean,
    default: false,
  },
  saved: {
    type: Boolean,
    default: false,
  },
  title: String,
  area: String,
  instructions: String,
  description: String,
  thumb: String,
  preview: String,
  time: String,
  youtube: String,
  tags: Array,
  createdAt: {
    $date: {
      $numberLong: String,
    },
  },
  updatedAt: {
    $date: {
      $numberLong: String,
    },
  },
  ingredients: Array,
});

const Recipe = mongoose.model("Recipe", newsSchema);

export default Recipe;
