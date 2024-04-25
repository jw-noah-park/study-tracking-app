import { Pool } from 'pg';
// import bcrypt from 'bcryptjs';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: process.env.DB_PASSWORD,
    port: 5432,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { token, password } = req.body;
    try {
     const tokenQuery = 'SELECT user_id, expiry FROM password_reset_tokens WHERE token = $1 AND expiry > EXTRACT(EPOCH FROM NOW()) * 1000';
      const { rows } = await pool.query(tokenQuery, [token]);

      if (rows.length === 0) {
        return res.status(400).json({ message: 'Invalid or expired token.' });
      }

      const userId = rows[0].user_id;

      // 비밀번호 해싱
    //   const salt = bcrypt.genSaltSync(10);
    //   const hashedPassword = bcrypt.hashSync(password, salt);

      // 사용자 비밀번호 업데이트
      const updateQuery = 'UPDATE users SET password = $1 WHERE id = $2';
      await pool.query(updateQuery, [password, userId]);

      // 사용한 토큰 삭제
      const deleteTokenQuery = 'DELETE FROM password_reset_tokens WHERE token = $1';
      await pool.query(deleteTokenQuery, [token]);

      res.status(200).json({ message: 'Password has been reset successfully.' });
    } catch (error) {
      console.error('Reset Password Error:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
