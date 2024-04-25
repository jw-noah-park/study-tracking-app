import React, { useState } from 'react';
import { useRouter } from 'next/router';


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 폼 제출 기본 동작 방지

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
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token);
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
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-100 dark:bg-gray-950">
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md w-full">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">Welcome Back!</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-7">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 mb-2 block w-full shadow-md text-base border border-gray-300 py-2 px-3 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full shadow-md text-base border border-gray-300 py-2 px-3 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="mt-5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
        Don't have an account? <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">Sign up</a>
      </p>
      <p className="mt-1 text-sm text-center text-gray-600 dark:text-gray-300">
        Forgot your password? <a href="/forgotPassword" className="font-medium text-blue-600 hover:text-blue-500">Forgot password</a>
      </p>
    </div>
  </div>
);
};


export default Login;



