import nodemailer, { TransportOptions } from "nodemailer";
import { google } from "googleapis";
import dotenv from "dotenv";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token:(");
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_USER,
      accessToken: accessToken as string,
      clientId: process.env.CLIENT_ID,
      pass: process.env.GMAIL_PASS,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  } as SMTPTransport.Options);

  return transporter;
};

export const sendMail = async (
  name: string,
  mail: string,
  question: string,
  image: Express.Multer.File[]
) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "alice.jost2902@gmail.com",
    subject: "New Contact Form Submission",
    message: `Name: ${name}\nEmail: ${mail}\nQuestions: ${question}`,
    attachments:
      image?.map((image: any) => ({
        filename: image.originalname,
        path: image.path,
      })) || [],
  };

  try {
    const transporter = await createTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log("Email send: " + info.response);
    console.log("SUCCESS");
    return info;
  } catch (err) {
    console.log("Error sending email: " + err);
    console.log("ERROR");
    throw err;
  }
};
