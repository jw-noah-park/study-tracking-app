import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

export default async function handler(req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    const results = { 'results': (result) ? result.rows : null };
    res.status(200).json(results);
    client.release();
  } catch (error) {
    console.error('Error connecting to database:', error);
    res.status(500).send('Error connecting to database');
  }
}
