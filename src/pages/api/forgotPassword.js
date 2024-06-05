import { Pool } from "pg";
import crypto from "crypto";
import nodemailer from "nodemailer";

dotenv.config(); 

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
  ssl: { rejectUnauthorized: true } 
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const user = await pool.query(
        "SELECT id FROM users WHERE email_address = $1",
        [email]
      );
      if (user.rows.length === 0) {
        return res.status(404).json({ message: "User not found." });
      }

      const token = crypto.randomBytes(20).toString("hex");
      const expiry = Date.now() + 3600000;

      await pool.query(
        "INSERT INTO password_reset_tokens (user_id, token, expiry) VALUES ($1, $2, $3)",
        [user.rows[0].id, token, expiry]
      );

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset",
        html: `<p>You requested a password reset, please use this <a href="http://localhost:3000/resetPassword/${token}">link</a> to reset your password</p>`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("Failed to send email:", err);
          return res.status(500).json({ message: "Failed to send email." });
        } else {
          res
            .status(200)
            .json({
              message: "Password reset link has been sent to your email.",
            });
        }
      });
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ message: "Server error occurred." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
