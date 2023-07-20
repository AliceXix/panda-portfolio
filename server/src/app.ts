import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "./db";

const app = express();
const port = 3000;

app
  .use(
    cors({
      origin: "*",
    }),
    bodyParser.json()
  )

  .listen(port, (err: Error | void) => {
    console.log("Listening and we know of cors:", cors);
    if (err) {
      return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
  });
