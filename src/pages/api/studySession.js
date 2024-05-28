import { Pool } from "pg";
import jwt from "jsonwebtoken";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

const verifyToken = (token) => {
  if (!token) {
    throw new Error("Token not provided");
  }
  return jwt.verify(token, process.env.SECRET_KEY);
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = verifyToken(token);
    const { topic, description, startTime, endTime, duration } = req.body;

    const userId = decoded.userId; 

    const client = await pool.connect();
    try {
      await client.query("BEGIN");

      const query1 =
        "INSERT INTO study_session (user_id, topic, description, start_time, end_time, duration) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
      const result1 = await client.query(query1, [
        userId,
        topic,
        description,
        new Date(startTime),
        new Date(endTime),
        duration,
      ]);

      const sessionId = result1.rows[0].id;
      const query2 =
        "INSERT INTO study_history (user_id, session_id, date, total_duration, start_time, end_time) VALUES ($1, $2, $3, $4, $5, $6)";
      await client.query(query2, [
        userId,
        sessionId,
        new Date(),
        duration,
        new Date(startTime),
        new Date(endTime),
      ]);

      await client.query("COMMIT");

      console.log("Session and history saved:", result1.rows[0]);
      return res.status(201).json(result1.rows[0]);
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Error handling request:", error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token" });
    }
    return res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
}
