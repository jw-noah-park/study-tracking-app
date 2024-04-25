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
            // Validate input lengths
            if (email.length > 50) {
                throw new Error('Email must be less than 50 characters');
            }
            if (firstName.length > 25) {
                throw new Error('First name must be less than 25 characters');
            }
            if (lastName.length > 25) {
                throw new Error('Last name must be less than 25 characters');
            }
            if (phoneNumber.length > 10) {
                throw new Error('Phone number must be less than 10 digits');
            }
            if (password.length > 100) {
                throw new Error('Password must be less than 100 characters');
            }

               // Validate password complexity
               const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
               if (!passwordRegex.test(password)) {
                   throw new Error('Password must include at least one uppercase letter, one lowercase letter, one number, and one special character');
               }
   

            // Check if email already exists
            const emailExistsQuery = 'SELECT * FROM users WHERE email_address = $1';
            const emailExistsResult = await pool.query(emailExistsQuery, [email]);
            if (emailExistsResult.rows.length > 0) {
                throw new Error('Email address is already registered');
            }
            
            const query = 'INSERT INTO users (email_address, password, firstname, lastname, phone_number) VALUES ($1, $2, $3, $4, $5)';
            await pool.query(query, [email, password, firstName, lastName, phoneNumber]);

            return res.status(201).json({ message: 'User signed up successfully' });
        } catch (error) {
            console.error('Error signing up:', error);
            return res.status(400).json({ error: error.message });
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

