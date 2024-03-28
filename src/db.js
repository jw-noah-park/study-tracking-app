import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: process.env.DB_PASSWORD,
  port: 5432,
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
