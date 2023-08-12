import nodemailer from "nodemailer";
import "dotenv/config";

const { UKR_NET_EMAIL, UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   from: UKR_NET_EMAIL,
//   to: "dorawoj754@v1zw.com",
//   subject: "Test email",
//   html: "<strong>Test email</strong>",
// };

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send succes"))
//   .catch((error) => console.log(error.message));

const sendEmail = async (data) => {
  const email = { ...data, from: UKR_NET_EMAIL };
  return transport.sendMail(email);
};

export default sendEmail;
