import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "./db";
import nodemailer from "nodemailer";
import multer from "multer";
import dotenv from "dotenv";
import { sendMail } from "./services/mailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

dotenv.config();

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

const upload = multer({ dest: "uploads/" });

app
  .use(
    cors({
      origin: process.env.CLIENT_URL || "*",
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

const mailSender = app.post(
  "/send-mail",
  upload.array("image", 10),
  async (req, res, next) => {
    const { name, mail, question } = req.body;
    const image = req.files as Express.Multer.File[];

    if (!mail || !question || !name) {
      return res.status(400).json({ err: "All fields are required" });
    }

    try {
      const info = await sendMail(name, mail, question, image);
      res.status(200).json({ message: "Email sent successfully", info });
    } catch (err: any) {
      res
        .status(500)
        .json({ err: "Failed to send mail", details: err.message });
    }
  }
);
