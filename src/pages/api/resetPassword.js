import { Pool } from "pg";
import bcrypt from "bcryptjs";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { token, password } = req.body;
    try {
      const tokenQuery =
        "SELECT user_id, expiry FROM password_reset_tokens WHERE token = $1 AND expiry > EXTRACT(EPOCH FROM NOW()) * 1000";
      const { rows } = await pool.query(tokenQuery, [token]);

      if (rows.length === 0) {
        return res.status(400).json({ message: "Invalid or expired token." });
      }

      const userId = rows[0].user_id;

      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      const updateQuery = "UPDATE users SET password = $1 WHERE id = $2";
      await pool.query(updateQuery, [password, userId]);

      const deleteTokenQuery =
        "DELETE FROM password_reset_tokens WHERE token = $1";
      await pool.query(deleteTokenQuery, [token]);

      res
        .status(200)
        .json({ message: "Password has been reset successfully." });
    } catch (error) {
      console.error("Reset Password Error:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
