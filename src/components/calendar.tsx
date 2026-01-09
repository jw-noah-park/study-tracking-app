import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Modal from "../components/modal";
import "react-calendar/dist/Calendar.css";
import { Box, Typography, Stack, Chip, Divider } from "@mui/material";

const CalendarComponent: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [history, setHistory] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await fetch("/api/studyHistory", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setHistory(data);
        } else {
          throw new Error("Failed to fetch history");
        }
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, []);

  const onChange = (newDate: Date) => {
    setDate(newDate);
  };

  const handleTileClick = async (date: Date) => {
    const dateString = date.toISOString().split("T")[0];
    const entry = history.find(
      (entry) => entry.date.split("T")[0] === dateString
    );
    if (entry) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `/api/studySessionByDate?date=${dateString}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setSessions(data);
          setSelectedDate(dateString);
          setIsModalOpen(true);
        } else {
          throw new Error("Failed to fetch sessions");
        }
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    }
  };

  const convertToSeconds = (duration) => {
    const hoursInSeconds = (duration.hours || 0) * 3600;
    const minutesInSeconds = (duration.minutes || 0) * 60;
    const seconds = duration.seconds || 0;
    return hoursInSeconds + minutesInSeconds + seconds;
  };

  const formatDuration = (durationInSeconds) => {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;
    return `${hours}h ${minutes}m`;
  };

  const getDurationColor = (durationInSeconds) => {
    const hours = durationInSeconds / 3600;
    if (hours < 1) return "grey";
    if (hours >= 1 && hours < 5) return "green";
    if (hours >= 5 && hours < 8) return "orange";
    if (hours >= 8) return "firebrick";
    return "black";
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateString = date.toISOString().split("T")[0];
      const entry = history.find(
        (entry) => entry.date.split("T")[0] === dateString
      );
      if (entry) {
        const totalDurationInSeconds = convertToSeconds(entry.total_duration);
        const durationColor = getDurationColor(totalDurationInSeconds);
        return (
          <div
            onClick={() => handleTileClick(date)}
            style={{
              color: durationColor,
              fontSize: "12px",
              marginTop: "5px",
              cursor: "pointer",
            }}
          >
            {formatDuration(totalDurationInSeconds)}
          </div>
        );
      }
    }
    return null;
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().replace("T", " ").split(".")[0];
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Calendar
          onChange={onChange}
          value={date}
          locale="en-US"
          tileContent={tileContent}
        />
      </Box>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Study Sessions — ${selectedDate || ""}`}
      >
        {sessions.length === 0 ? (
          <Typography>No sessions available for this date</Typography>
        ) : (
          <Stack spacing={2}>
            {sessions.map((s, idx) => (
              <Box
                key={idx}
                sx={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 2,
                  p: 2,
                  bgcolor: "#fff",
                }}
              >
                <Typography sx={{ fontWeight: 800 }}>Topic</Typography>
                <Typography sx={{ mb: 1 }}>{s.topic}</Typography>

                <Typography sx={{ fontWeight: 800 }}>Description</Typography>
                <Typography sx={{ mb: 1 }}>{s.description}</Typography>

                <Divider sx={{ my: 1 }} />

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip size="small" label={`Start: ${formatDateTime(s.start_time)}`} />
                  <Chip size="small" label={`End: ${formatDateTime(s.end_time)}`} />
                  <Chip size="small" label={`Duration: ${formatDuration(s.duration)}`} />
                </Stack>
              </Box>
            ))}
          </Stack>
        )}
      </Modal>

      {/* Legend */}
      <Box sx={{ mt: 3 }}>
        <Typography sx={{ fontWeight: 900, mb: 1 }}>Time Duration Legend</Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
          <Chip size="small" label="Less than 1 hour" sx={{ bgcolor: "#e5e7eb" }} />
          <Chip size="small" label="1 to 5 hours" sx={{ bgcolor: "#dcfce7" }} />
          <Chip size="small" label="5 to 8 hours" sx={{ bgcolor: "#ffedd5" }} />
          <Chip size="small" label="More than 8 hours" sx={{ bgcolor: "#fee2e2" }} />
        </Stack>
      </Box>

      <style jsx>{`
        .react-calendar__tile {
          position: relative;
        }
      `}</style>
    </Box>
  );
};

export default CalendarComponent;