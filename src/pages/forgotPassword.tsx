import React, { useState } from "react";

function forgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("api/forgotPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("A password reset link has been sent to your email.");
      } else {
        const errorData = await response.json();
        console.error("Failed to send email:", errorData.message);
        alert("Failed to send the email.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("A network error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-100 dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">
          Reset Your Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 mb-2 block w-full shadow-md text-base border border-gray-300 py-2 px-3 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="mt-5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#f18701] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Get Password Reset Link
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
          Remembered your password?{" "}
          <a href="/login" className="font-medium text-[#f18701]">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default forgotPassword;
