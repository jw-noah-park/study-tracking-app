import { Pool } from 'pg';
import jwt from 'jsonwebtoken';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: process.env.DB_PASSWORD,
    port: 5432,
});

async function getUserData(token) {
    try {
        if (!token) {
            throw new Error('Token not provided');
        }
        
        const decoded = jwt.verify(token, '53c91310e72a4af3a265b997c80c40110821ebdb3c1e129e8e5b715e2307f8a9'); 
        const userId = decoded.userId;

        const userData = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);

        if (userData.rows.length === 0) {
            throw new Error('User not found');
        }

        return userData.rows[0];
    } catch (error) {
        throw new Error('Invalid token');
    }
}

export default async function handler(req, res) {
    try {
        console.log(`${req.method} request received.`);
        
        const token = req.headers.authorization?.replace('Bearer ', ''); // Optional chaining operator
        console.log('Token:', token); 

        if (!token) {
            return res.status(401).json({ error: 'Token not provided' });
        }

        const userData = await getUserData(token);
        console.log('User data:', userData);
        
        if (req.method === 'GET') {
            // Handle GET request
            const query = 'SELECT * FROM memo WHERE user_id = $1';
            const result = await pool.query(query, [userData.id]);console.log('GET result:', result.rows);
            return res.status(200).json(result.rows);
        } else if (req.method === 'POST') {
            // Handle POST request
            const { content } = req.body;
            const createdAt = new Date();
            const query = 'INSERT INTO memo (user_id, content, created_at) VALUES ($1, $2, $3) RETURNING *';
            const result = await pool.query(query, [userData.id, content, createdAt]);
            console.log('POST result:', result.rows[0]);
            return res.status(201).json(result.rows[0]);
        } else if (req.method === 'DELETE') {
            // Handle DELETE request
            const memoId = req.query.id;
            console.log('Deleting memo with ID:', memoId);
            const query = 'DELETE FROM memo WHERE id = $1 AND user_id = $2 RETURNING *';
            const result = await pool.query(query, [memoId, userData.id]);
            console.log('DELETE result:', result.rows);
            
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Memo not found' });
            }
            
            return res.status(200).json({ message: 'Memo deleted successfully' });
        } else {
            return res.status(405).json({ error: 'Method Not Allowed' });
        }
    } catch (error) {
        console.error('Error handling request:', error);
        if (error.message === 'Invalid token') {
            return res.status(401).json({ error: 'Invalid token' });
          }
          return res.status(500).json({ error: 'Internal Server Error' });
    }
}
