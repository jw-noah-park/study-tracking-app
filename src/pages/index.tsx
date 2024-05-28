import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CalendarComponent from "../components/calendar";
import MemosComponent from "../components/memos";
import StudySession from "../components/studySession";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const handleStudyHistory = () => {
    router.push("/studyHistory");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 relative">
      <header className="absolute top-4 right-4 flex space-x-2">
        {isLoggedIn ? (
          <>
            <button
              onClick={handleLogout}
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
        )}
      </header>
      <div className="flex justify-center items-center min-h-screen">
        <div className="container max-w-6xl w-full bg-white dark:bg-gray-900 shadow-md rounded-lg p-4">
          <main className="grid grid-cols-3 gap-4 p-4">
            <div className="col-span-2 flex flex-col gap-4">
              <div className="flex-1">
                <CalendarComponent />
              </div>
              <div className="flex-1">
                <MemosComponent />
              </div>
            </div>
            <div className="col-span-1 bg-study-session-bg bg-cover bg-center">
              <StudySession />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
