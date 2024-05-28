import { Pool } from "pg";
import jwt from "jsonwebtoken";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

export default async function handler(req, res) {
  console.log("Handler function called."); 
  if (req.method === "POST") {
    const { email, password } = req.body;
    console.log("Email:", email); 

    try {
      const query =
        "SELECT * FROM users WHERE email_address = $1 AND password = $2";
      const result = await pool.query(query, [email, password]);
      console.log("Query result:", result.rows); 

      if (result.rows.length > 0) {
        const token = jwt.sign(
          { userId: result.rows[0].id },
          process.env.SECRET_KEY,
        );

        res.status(200).json({ token });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
