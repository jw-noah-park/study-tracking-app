import React, { useEffect, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import Modal from "../components/modal";
import {
  Box,
  Typography,
  Stack,
  Chip,
  Divider,
  Card,
  CardContent,
  Tooltip,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";

type DurationObj = {
  hours?: number;
  minutes?: number;
  seconds?: number;
};

type StudyHistoryEntry = {
  date: string; // ISO string
  total_duration: DurationObj;
};

type StudySession = {
  topic: string;
  description: string;
  start_time: string; // ISO string
  end_time: string; // ISO string
  duration: number; // seconds
};

function convertToSeconds(duration: DurationObj): number {
  const hoursInSeconds = (duration.hours ?? 0) * 3600;
  const minutesInSeconds = (duration.minutes ?? 0) * 60;
  const seconds = duration.seconds ?? 0;
  return hoursInSeconds + minutesInSeconds + seconds;
}

function formatDuration(durationInSeconds: number): string {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

function getDurationColor(durationInSeconds: number): string {
  const hours = durationInSeconds / 3600;
  if (hours < 1) return "text.secondary";
  if (hours < 5) return "success.main";
  if (hours < 8) return "warning.main";
  return "error.main";
}

function formatDateTime(dateString: string): string {
  const d = new Date(dateString);
  return d.toISOString().replace("T", " ").split(".")[0];
}

/**
 * ✅ heatmap dot 버전 (텍스트 제거)
 * - grid 깨짐 / 잘림 / 요일 정렬 문제 거의 다 사라짐
 * - Tooltip으로 시간은 hover 때만 보여줌 (깔끔 + 정보 유지)
 */
function createDayWithDuration(secondsByDate: Map<string, number>) {
  return function DayWithDuration(props: PickersDayProps) {
    const day = props.day as unknown as Dayjs;
    const dateString = day.format("YYYY-MM-DD");

    const seconds = secondsByDate.get(dateString);
    const dotColor = seconds ? getDurationColor(seconds) : undefined;

    const Dot = seconds ? (
      <Tooltip title={formatDuration(seconds)} arrow>
        <Box
          sx={{
            position: "absolute",
            top: 7,
            right: 7,
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: dotColor,
            boxShadow: "0 0 0 2px #fff",
            pointerEvents: "auto",
          }}
        />
      </Tooltip>
    ) : null;

    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <PickersDay
          {...props}
          sx={{
            borderRadius: 4,
            transition: "transform .12s ease, background-color .12s ease",
            ...(seconds && {
              "&:hover": { transform: "translateY(-1px)" },
            }),
          }}
        />
        {Dot}
      </Box>
    );
  };
}

const CalendarComponent: React.FC = () => {
  const [value, setValue] = useState<Dayjs>(dayjs());
  const [history, setHistory] = useState<StudyHistoryEntry[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessions, setSessions] = useState<StudySession[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await fetch("/api/studyHistory", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error("Failed to fetch history");

        const data: StudyHistoryEntry[] = await response.json();
        setHistory(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, []);

  const secondsByDate = useMemo(() => {
    const map = new Map<string, number>();
    for (const entry of history) {
      const key = entry.date.split("T")[0];
      map.set(key, convertToSeconds(entry.total_duration));
    }
    return map;
  }, [history]);

  const DaySlot = useMemo(
    () => createDayWithDuration(secondsByDate),
    [secondsByDate]
  );

  const openSessionsByDate = async (dateString: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch(
        `/api/studySessionByDate?date=${dateString}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch sessions");

      const data: StudySession[] = await response.json();
      setSessions(data);
      setSelectedDate(dateString);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };

  const handleChange = (newValue: Dayjs | null) => {
    if (!newValue) return;
    setValue(newValue);

    const dateString = newValue.format("YYYY-MM-DD");
    if (secondsByDate.has(dateString)) {
      openSessionsByDate(dateString);
    }
  };

  return (
    <Card sx={{ borderRadius: 4, boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "100%" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={value}
                onChange={handleChange}
                views={["day"]}
                slots={{ day: DaySlot }}
                sx={{
                  width: "100%",
                  // ✅ 헤더
                  "& .MuiPickersCalendarHeader-label": {
                    fontWeight: 900,
                    fontSize: 20,
                  },


                  "& .MuiPickersDay-root": {
                    width: { xs: 44, sm: 56, md: 64 },
                    height: { xs: 44, sm: 56, md: 64 },
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    borderRadius: 4,
                  },

             
                  "& .MuiDayCalendar-weekDayLabel": {
                    fontWeight: 700,
                    fontSize: 15,
                    width:63
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
        </Box>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`Study Sessions — ${selectedDate ?? ""}`}
        >
          {sessions.length === 0 ? (
            <Typography>No sessions available for this date</Typography>
          ) : (
            <Stack spacing={2}>
              {sessions.map((s, idx) => (
                <Box
                  key={`${s.start_time}-${idx}`}
                  sx={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 3,
                    p: 2,
                    bgcolor: "#fff",
                  }}
                >
                  <Typography sx={{ fontWeight: 900 }}>Topic</Typography>
                  <Typography sx={{ mb: 1 }}>{s.topic}</Typography>

                  <Typography sx={{ fontWeight: 900 }}>Description</Typography>
                  <Typography sx={{ mb: 1 }}>{s.description}</Typography>

                  <Divider sx={{ my: 1 }} />

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip
                      size="small"
                      label={`Start: ${formatDateTime(s.start_time)}`}
                    />
                    <Chip
                      size="small"
                      label={`End: ${formatDateTime(s.end_time)}`}
                    />
                    <Chip
                      size="small"
                      label={`Duration: ${formatDuration(s.duration)}`}
                    />
                  </Stack>
                </Box>
              ))}
            </Stack>
          )}
        </Modal>

        {/* Legend */}
        <Box sx={{ mt: 3 }}>
          <Typography sx={{ fontWeight: 900, mb: 1 }}>
            Time Duration Legend
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <Chip size="small" label="Less than 1 hour" sx={{ bgcolor: "#e5e7eb" }} />
            <Chip size="small" label="1 to 5 hours" sx={{ bgcolor: "#dcfce7" }} />
            <Chip size="small" label="5 to 8 hours" sx={{ bgcolor: "#ffedd5" }} />
            <Chip size="small" label="More than 8 hours" sx={{ bgcolor: "#fee2e2" }} />
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CalendarComponent;
