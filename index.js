import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import surveyRoutes from "./routes/survey.js"
import rankingRoutes from "./routes/ranking.js"
import xlsLinesRoutes from "./routes/xlslines.js";
import XLSLines from "./models/XLSLines.js";

import Survey from "./models/Survey.js";


/* CONFIGURATIONS */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/xlslines", xlsLinesRoutes);
app.use("/survey", surveyRoutes);
app.use("/ranking", rankingRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

  })
  .catch((error) => console.log(`${error} did not connect`));

  // setTimeout( () => {
  //   console.log('Disconnecting from DB...');
  //   mongoose.disconnect()
  //   console.log('Exiting...');
  //   process.exit(0);
  // }, 10000)

  // const gracefulExit = function() { 
  //   mongoose.disconnect()
  //   process.exit(0);
  // }

  // // If the Node process ends, close the Mongoose connection
  // process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

