import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { Box, Stack, Typography, TextField, Button, IconButton, Divider } from "@mui/material";

export default function StudySession() {
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
    setSessionData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleStartSession = () => {
    setSessionData((prev) => ({
      ...prev,
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

    setSessionData((prev) => ({
      ...prev,
      endTime,
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
      if (!response.ok) throw new Error(data.message || "Failed to save session");
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
      intervalId = setInterval(() => setElapsedTime((t) => t + 1), 1000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [sessionActive]);

  const formatTime = (secs) => {
    const hours = Math.floor(secs / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((secs % 3600) / 60).toString().padStart(2, "0");
    const seconds = (secs % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <Box>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
        <Typography sx={{ fontWeight: 900, color: "#111827" }}>Timer</Typography>
        <IconButton
          onClick={handleStartSession}
          sx={{ bgcolor: "#f97316", color: "#fff", "&:hover": { bgcolor: "#ea580c" } }}
          size="small"
        >
          <FontAwesomeIcon icon={faPlay} />
        </IconButton>
      </Stack>

      {!sessionActive ? (
        <Stack spacing={2}>
          <TextField
            label="Topic"
            name="topic"
            size="small"
            value={sessionData.topic}
            onChange={handleInputChange}
          />
          <TextField
            label="Description"
            name="description"
            size="small"
            value={sessionData.description}
            onChange={handleInputChange}
          />
        </Stack>
      ) : (
        <Box>
          <Typography sx={{ fontWeight: 800, mb: 1 }}>Session in progress</Typography>
          <Typography sx={{ mb: 0.5 }}>Topic: {sessionData.topic}</Typography>
          <Typography sx={{ mb: 0.5 }}>Description: {sessionData.description}</Typography>
          <Typography sx={{ mb: 1.5 }}>Elapsed Time: {formatTime(elapsedTime)}</Typography>

          <Button
            onClick={handleEndSession}
            variant="contained"
            sx={{ bgcolor: "#16a34a", "&:hover": { bgcolor: "#15803d" } }}
          >
            End Session
          </Button>
        </Box>
      )}

      {sessionData.duration && (
        <Box sx={{ mt: 3 }}>
          <Divider sx={{ mb: 2 }} />
          <Typography sx={{ fontWeight: 900, mb: 1 }}>Session Summary</Typography>
          <Typography sx={{ mb: 2 }}>Duration: {sessionData.duration}</Typography>

          <Button
            onClick={handleAddNewSession}
            variant="outlined"
            sx={{ fontWeight: 800 }}
          >
            Add New Session
          </Button>
        </Box>
      )}
    </Box>
  );
}
