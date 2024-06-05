import { Pool } from "pg";
import jwt from "jsonwebtoken";

dotenv.config(); 

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
  ssl: { rejectUnauthorized: true } 
});

const verifyToken = (token) => {
  if (!token) {
    throw new Error("Token not provided");
  }
  return jwt.verify(token, process.env.SECRET_KEY);
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = verifyToken(token);
    const userId = decoded.userId;

    const { date } = req.query;

    const query = `
      SELECT 
        topic, description, start_time, end_time, duration
      FROM 
        study_session
      WHERE 
        user_id = $1 AND DATE(start_time) = $2
      ORDER BY 
        start_time`;

    const result = await pool.query(query, [userId, date]);

    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching study sessions:", error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token" });
    }
    return res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
}
