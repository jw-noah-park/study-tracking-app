import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const StudySession = () => {
  const [sessionData, setSessionData] = useState({
    topic: "",
    description: "",
    startTime: null,
    endTime: null,
    duration: null,
  });
  const [sessionActive, setSessionActive] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const router = useRouter();

  const handleInputChange = (e) => {
    setSessionData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleStartSession = () => {
    setSessionData((prevState) => ({
      ...prevState,
      startTime: new Date(),
      endTime: null,
      duration: null,
    }));
    setSessionActive(true);
    setElapsedTime(0);
  };

  const handleEndSession = async () => {
    const endTime = new Date();
    const durationInSeconds = Math.floor(
      (endTime.getTime() - sessionData.startTime.getTime()) / 1000
    );
    const formattedDuration = formatTime(durationInSeconds);

    setSessionData((prevState) => ({
      ...prevState,
      endTime: endTime,
      duration: formattedDuration,
    }));
    setSessionActive(false);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/studySession", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          topic: sessionData.topic,
          description: sessionData.description,
          startTime: sessionData.startTime.toISOString(),
          endTime: endTime.toISOString(),
          duration: formattedDuration,
        }),
      });
      const data = await response.json();
      console.log("Save session result:", data);
      if (response.ok) {
        console.log("Session saved successfully");
      } else {
        throw new Error(data.message || "Failed to save session");
      }
    } catch (error) {
      console.error("Failed to save the session:", error);
    }
  };

  const handleAddNewSession = () => {
    setSessionData({
      topic: "",
      description: "",
      startTime: null,
      endTime: null,
      duration: null,
    });
    setSessionActive(false);
    setElapsedTime(0);
  };

  useEffect(() => {
    let intervalId;
    if (sessionActive) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      if (intervalId) clearInterval(intervalId);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [sessionActive]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className=" dark:bg-gray-900 p-4 rounded-lg bg-cover bg-center">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-700  mr-2">Timer</h1>
        <button
          onClick={handleStartSession}
          className="py-1 px-3 bg-[#f18701] text-white rounded"
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
      </div>
      {!sessionActive ? (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">
              Topic:
              <input
                type="text"
                name="topic"
                value={sessionData.topic}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full dark:bg-gray-800 dark:text-gray-200 text-sm"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">
              Description:
              <input
                type="text"
                name="description"
                value={sessionData.description}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full dark:bg-gray-800 dark:text-gray-200 text-sm"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              />
            </label>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-md font-bold mb-2 text-gray-700">
            Session in progress
          </h2>
          <p className="mb-2 text-sm text-gray-700">
            Topic: {sessionData.topic}
          </p>
          <p className="mb-2 text-sm text-gray-700">
            Description: {sessionData.description}
          </p>
          <p className="mb-2 text-sm text-gray-700">
            Elapsed Time: {formatTime(elapsedTime)}
          </p>
          <button
            onClick={handleEndSession}
            className="py-2 px-3 bg-[#4f772d] text-white rounded text-sm"
          >
            End Session
          </button>
        </div>
      )}
      {sessionData.duration && (
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2 text-md text-gray-700">
            Session Summary
          </h3>
          <p className="mb-3 text-sm text-gray-700">
            Duration: {sessionData.duration}
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleAddNewSession}
              className="py-2 px-8 bg-[#4f772d] text-white rounded text-sm"
            >
              Add New Session
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudySession;
