import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "./db";
import nodemailer from "nodemailer";

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


const sendMail = app.post('/send-mail', (req, res, next) => {
    const {name, mail, question} = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "testing.development@hotmail.com",
        pass: "Random.1234",
      },
    });

    const mailOptions = {
      from: "testing.development@hotmail.com",
      to: "alice.jost2902@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${mail}\nQuestions: ${question}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    })
})