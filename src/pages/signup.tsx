import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const router = useRouter();

    const handleSignUp = async () => {
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, phoneNumber, firstName, lastName, password }),
            });

            if (response.ok) {
                router.push('/login');
            } else {
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Phone Number:
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </label>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="button" onClick = {handleSignUp}>Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default SignUp;
