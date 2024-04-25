import { Pool } from 'pg';
import jwt from 'jsonwebtoken';


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: process.env.DB_PASSWORD,
    port: 5432,
});

export default async function handler(req, res) {
    console.log('Handler function called.'); // Check if the handler function is called
    if (req.method === 'POST') {
        const { email, password } = req.body;
        console.log('Email:', email); // Check the email sent in the request

        try {
            // Check user information from the database for login processing
            const query = 'SELECT * FROM users WHERE email_address = $1 AND password = $2';
            const result = await pool.query(query, [email, password]);
            console.log('Query result:', result.rows); // Check the database query result

            if (result.rows.length > 0) {
                // Generate JWT token
                const token = jwt.sign({ userId: result.rows[0].id }, '53c91310e72a4af3a265b997c80c40110821ebdb3c1e129e8e5b715e2307f8a9'); 

                // Return token to the client
                res.status(200).json({ token });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
