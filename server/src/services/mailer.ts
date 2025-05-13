import dotenv from "dotenv";
dotenv.config(); // ← load .env first!

import nodemailer from "nodemailer";
import { google } from "googleapis";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const { OAuth2 } = google.auth;

async function createTransporter() {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await new Promise<string>((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        console.error("getAccessToken error:", err);
        return reject(err);
      }
      if (!token) {
        return reject(new Error("No token returned"));
      }
      resolve(token);
    });
  });

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
  });
}

export async function sendMail(
  name: string,
  mail: string,
  question: string,
  images: Express.Multer.File[] = []
) {
  const transporter = await createTransporter();

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "alice.jost2902@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${mail}\nQuestions: ${question}`,
    attachments: images.map((img) => ({
      filename: img.originalname,
      path: img.path,
    })),
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent:", info.response);
  return info;
}
