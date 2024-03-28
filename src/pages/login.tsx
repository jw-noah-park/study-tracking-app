import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // login API call
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log('Login request sent.'); 
      if (response.ok) {
        console.log('Login successful.'); 
        router.push('/');
      } else {
        console.error('Login failed:', response.status); 
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
      <p>Forgot your password? <a href="/reset-password">Reset password</a></p>
    </div>
  );
};

export default Login;

