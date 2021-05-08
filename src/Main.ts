import express, { Application } from "express";
import mongoose from "mongoose";
import linkShortenerRouter from "./router/linkShortenerRouter";
import mainRouter from "./router/mainRouter";

mongoose
  .connect("mongodb://localhost:27017/link-shortener", {
    useNewUrlParser: true,
  })
  .then(() => {
    const app: Application = express();
    let port: number | string = process.env.PORT || 8080;
    app.use(express.json());
    app.use("/api", mainRouter);
    app.use("/u", linkShortenerRouter);
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  });
