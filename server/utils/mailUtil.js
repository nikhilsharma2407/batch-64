const nodemailer = require("nodemailer");
const { generateQRcode } = require("./totpUtil");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: process.env.EMAIL_USER_NAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async ({ to, subject, html, attachments }) => {
  const info = await transporter.sendMail({
    from: `"Admin" <${process.env.EMAIL_USER_NAME}>`,
    to,
    subject,
    html,
    attachments,
  });
  return info;
};

module.exports = sendEmail;
{
  /* <img src=${qrCode}/> */
}

(async () => {
  const { otpauth_url, qrCode, secret } = await generateQRcode("nikhil101");
  const to = "";
  const subject = "2FA setup";
  html = `
    <h2>2FA Setup</h2>
    <h3>Click the below link for resetting your passwords</h3>
    <a href="http://localhost:3000/2fa-setup">Password Reset Link</a>
`;
//   const attachments = [
//     { filename: "QR_CODE.png", path: qrCode, cid: "qrcode" },
//   ];
//   sendEmail({
//     html,
//     to,
//     subject,
//     attachments,
//   });
})();

// Generate a jwt (time-validity) with qrCode and secret
// send email with JWT as query param -> link to our app
// click email link-> redirect to FE on our app-> reset form,
// render the QR code with OTP validation input
// user scan and then proceeds to enter the new otp, update the secret
