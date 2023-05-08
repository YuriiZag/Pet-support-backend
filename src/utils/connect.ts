import mongoose from "mongoose";
import config from 'config';
const dbURL = config.get<string>('dbURL')

mongoose.set("strictQuery", false);

const connectMongo = async () => {
    try {
       await mongoose.connect(dbURL);
       console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
};
export default connectMongo