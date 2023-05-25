import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Set title"],
  },
  text: {
    type: String,
    require: [true, "Set text"],
  },
  source: {
    type: String,
    require: [true, "Set source"]
  },
  date: {
    type: String,
    require: [true, "Set date"],
  },
  avatar: {
    type: String,
  },
});

const News = mongoose.model("News", newsSchema);

export default News;
