import express from "express";
import config from "config";
import connectMongo from "./utils/connect";
import log from "./utils/logger";
import routes from "./routes";
import cors from "cors";
import { errorHadler } from "./heplers/errors";
const port = config.get<number>("port");
const app = express();

app.listen(port, async () => {
  try {
    log.info(`App is running at http://localhost:${port}`);
    app.use(cors());
    app.use(express.json());
    await connectMongo();

    routes(app);
    app.use(errorHadler)
  } catch (error) {
    log.error("Error at server launch: ", error);
    process.exit(1);
  }
});
