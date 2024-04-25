import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: process.env.DB_PASSWORD,
  port: 5432,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { userId, sessionId, startTime, endTime } = req.body;

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // 세션 정보 업데이트
    const duration = new Date(endTime) - new Date(startTime); // 지속 시간 계산
    await client.query(
      'UPDATE study_session SET end_time = $1, duration = $2 WHERE id = $3',
      [new Date(endTime), duration, sessionId]
    );

    // 날짜 추출 및 이력 업데이트
    const date = new Date(startTime).toISOString().slice(0, 10); // YYYY-MM-DD
    await client.query(
      `INSERT INTO study_history (user_id, date, total_duration)
      VALUES ($1, $2, $3)
      ON CONFLICT (user_id, date) DO UPDATE
      SET total_duration = study_history.total_duration + EXCLUDED.total_duration`,
      [userId, date, duration]
    );

    await client.query('COMMIT');
    res.status(201).json({ message: 'Session ended and history updated successfully' });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Transaction failed:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  } finally {
    client.release();
  }
}