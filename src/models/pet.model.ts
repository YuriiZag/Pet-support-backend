import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Set name for contact"],
      }, 

    age: {
        type: Number
    }
})

const Pet = mongoose.model('Pet', petSchema )

export default Pet