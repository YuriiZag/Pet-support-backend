import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  avatar: {
    type: String,
  },
  title: {
    type: String,
    require: [true, "Set title"],
  },
  text: {
    type: String,
    require: [true, "Set text"],
  },
  date: {
    type: String,
    require: [true, "Set date"],
  },
});

const News = mongoose.model("News", newsSchema);

export default News;
