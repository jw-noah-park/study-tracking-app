const nodemailer = require("nodemailer");

// SMTP 서버 설정
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rladmsdk2068@gmail.com",
    pass: "erylchirkoodkrwz",
  },
});

// 이메일 보내기
const mailOptions = {
  from: "rladmsdk2068@gmail.com",
  to: "rladmsdk2068@gmail.com",
  subject: "Test Email",
  text: "This is a test email sent using Nodemailer",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
