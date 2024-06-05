import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("Login request sent.");
      if (response.ok) {
        console.log("Login successful.");
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("token", token);
        router.push("/");
      } else {
        console.error("Login failed:", response.status);
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-100 dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">
          Welcome Back!
        </h2>
        <form onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-7"
            >
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
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type={passwordVisible ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full shadow-md text-base border border-gray-300 py-2 px-3 rounded-md"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="mt-6 absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {passwordVisible ? (
                <FaEyeSlash className="h-5 w-5 text-gray-500" />
              ) : (
                <FaEye className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="mt-5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#f18701] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff9f1c]"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
          Don't have an account?{" "}
          <a href="/signup" className="font-medium text-[#f18701]">
            Sign up
          </a>
        </p>
        <p className="mt-1 text-sm text-center text-gray-600 dark:text-gray-300">
          Forgot your password?{" "}
          <a href="/forgotPassword" className="font-medium text-[#f18701]">
            Forgot password
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
