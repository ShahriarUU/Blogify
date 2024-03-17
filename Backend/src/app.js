import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import customError from "./utils/customError.js";
import { globalError } from "./controllers/globalError.Controller.js";
const app = express();

//add middelwares

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ limit: "2000kb", extended: true }));
app.use(express.static("public"));

//Invalid  Routes Error handles
app.all("*", (req, res, next) => {
  const error = new customError(
    `can't find ${req.originalUrl} on the Server`,
    404
  );
  next(error);
});

//global error middelware
app.use(globalError);

export default app;
