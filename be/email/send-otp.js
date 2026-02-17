const nodemailer = require("nodemailer")
const dotenv = require("dotenv")

dotenv.config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use true for port 465, false for port 587
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

exports.sendOtpEmail = async (email, otp) => {
    await transporter.sendMail({
    from: `"OTP Verification" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Login Otp",
    html: `<h2>Your Otp is ${otp}</h2> <p> Valid for 5 minutes only </p>`, // HTML version of the message
  });
}