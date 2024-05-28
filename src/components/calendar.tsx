import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Modal from "../components/modal"; 
import "react-calendar/dist/Calendar.css";

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
    <div className="p-4 m-2 rounded-lg flex flex-col justify-center items-center dark:bg-gray-900">
      <Calendar
        onChange={onChange}
        value={date}
        locale="en-US"
        tileContent={tileContent}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">
          Study Sessions for {selectedDate}
        </h2>
        {sessions.length === 0 ? (
          <p>No sessions available for this date</p>
        ) : (
          <ul className="space-y-4">
            {sessions.map((session, index) => (
              <li
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md"
              >
                <p>
                  <strong>Topic:</strong> {session.topic}
                </p>
                <p>
                  <strong>Description:</strong> {session.description}
                </p>
                <p>
                  <strong>Start Time:</strong>{" "}
                  {formatDateTime(session.start_time)}
                </p>
                <p>
                  <strong>End Time:</strong> {formatDateTime(session.end_time)}
                </p>
                <p>
                  <strong>Duration:</strong>{" "}
                  {formatDuration(session.duration.seconds)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </Modal>

      <div className="flex flex-col items-center mt-4">
        <h3 className="text-lg font-bold mb-2 text-xs">Time Duration Legend</h3>
        <div className="flex space-x-4 text-xs">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-gray-500 mr-2"></div>
            <span>Less than 1 hour</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 mr-2"></div>
            <span>1 to 5 hours</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-orange-500 mr-2"></div>
            <span>5 to 8 hours</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-600 mr-2"></div>
            <span>More than 8 hours</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .react-calendar__tile {
          position: relative;
        }
        .react-calendar__tile div {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      `}</style>
    </div>
  );
};

export default CalendarComponent;
