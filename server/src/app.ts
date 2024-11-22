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
const port = 3000;

console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_PASS:", process.env.GMAIL_PASS);

const upload = multer({ dest: "uploads/" });

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

// const sendMail = app.post(
//   "/send-mail",
//   upload.array("image", 10),
//   (req, res, next) => {
//     const { name, mail, question } = req.body;
//     const image = req.files as Express.Multer.File[];

//     const transporter = nodemailer.createTransport({
//       host: "smtp.office365.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: "development.application.testing@gmail.com",
//         pass: "bnxz xwvm aqlv pedv",
//       },
//     });

//     //sender -> email client

//     const mailOptions: any = {
//       from: "development.application.testing@gmail.com",
//       to: "alice.jost2902@gmail.com",
//       subject: "New Contact Form Submission",
//       text: `Name: ${name}\nEmail: ${mail}\nQuestions: ${question}`,
//       attachments:
//         image?.map((image: any) => ({
//           filename: image.originalname,
//           path: image.path,
//         })) || [],
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ error: "Internal Server Error" });
//       } else {
//         console.log("Email sent: " + info.response);
//         res.status(200).json({ message: "Email sent successfully" });
//       }
//     });
//   }

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
