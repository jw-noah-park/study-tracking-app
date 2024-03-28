import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: process.env.DB_PASSWORD,
    port: 5432,
});

async function signUp(req, res) {
    console.log('signUp function has been called.'); 
    if (req.method === 'POST') {
        const { email, firstName, lastName, phoneNumber, password } = req.body;

        try {
            const query = 'INSERT INTO users (email_address, password, firstname, lastname, phone_number) VALUES ($1, $2, $3, $4, $5)';
            await pool.query(query, [email, password, firstName, lastName, phoneNumber]);

            return res.status(201).json({ message: 'User signed up successfully' }); 
        } catch (error) {
            console.error('Error signing up:', error);
            return res.status(500).json({ error: 'Error signing up' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}

export default async function handler(req, res) {
    console.log('handler function has been called.');
    try {
        await signUp(req, res); 
        console.log('signUp function executed successfully.');
    } catch (error) {
        console.error('Error in signUp:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

