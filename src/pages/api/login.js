// import { Pool } from 'pg';

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: process.env.DB_PASSWORD,
//     port: 5432,
// });

// export default async function handler(req, res) {
//     console.log('Handler function called.'); // Check if the handler function is called
//     if (req.method === 'POST') {
//         const { email, password } = req.body;
//         console.log('Email:', email); // Check the email sent in the request

//         try {
//             // Check user information from the database for login processing
//             const query = 'SELECT * FROM users WHERE email_address = $1 AND password = $2';
//             const result = await pool.query(query, [email, password]);
//             console.log('Query result:', result.rows); // Check the database query result

//             if (result.rows.length > 0) {
//                 // Redirect to the Index page upon successful login
//                 res.writeHead(302, { Location: '/' });
//                 res.end();
//             } else {
//                 res.status(401).json({ error: 'Invalid credentials' });
//             }
//         } catch (error) {
//             console.error('Error logging in:', error);
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     } else {
//         res.status(405).json({ error: 'Method Not Allowed' });
//     }
// }


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
                const token = jwt.sign({ userId: result.rows[0].id }, 'your_secret_key'); // Change 'your_secret_key' to your actual secret key

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
