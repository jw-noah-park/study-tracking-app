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

type StudySessionHistoryItem = {
  _id?: string;
  id?: string;

  topic: string;
  description?: string;

  startTime?: string; // ISO
  endTime?: string;   // ISO
  duration?: string;  // "HH:MM:SS"

  createdAt?: string; // ISO
};

type StudySession = {
  topic: string;
  description: string;
  start_time: string; // ISO string
  end_time: string; // ISO string
  duration: number; // seconds
};

const LOCAL_HISTORY_KEY = "guest_study_sessions";

function parseDurationToSeconds(duration?: string) {
  if (!duration) return 0;
  const parts = duration.split(":").map((n) => Number(n));
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return 0;
  const [hh, mm, ss] = parts;
  return hh * 3600 + mm * 60 + ss;
}

/** ✅ 날짜 key를 “로컬 날짜” 기준으로 만들기 (timezone 밀림 방지) */
function localDateKey(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";

  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** ✅ modal 시간 표시도 로컬로 */
function formatDateTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString();
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

function loadLocalSessions(): StudySessionHistoryItem[] {
  try {
    const raw = localStorage.getItem(LOCAL_HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * ✅ heatmap dot 버전
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
  const [sessionsAll, setSessionsAll] = useState<StudySessionHistoryItem[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessions, setSessions] = useState<StudySession[]>([]);

  /** ✅ 로그인 있으면 서버, 없으면 local */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setSessionsAll(loadLocalSessions());
          return;
        }

        const response = await fetch("/api/studyHistory", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error("Failed to fetch history");

        const data = await response.json();
        const list = Array.isArray(data) ? data : data?.sessions || [];
        setSessionsAll(list);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchData();

    /** ✅ local 저장이 추가되면 캘린더도 즉시 반영하고 싶으면 이벤트 사용 */
    const onUpdated = () => {
      const token = localStorage.getItem("token");
      if (!token) setSessionsAll(loadLocalSessions());
    };
    window.addEventListener("studySessionsUpdated", onUpdated);

    return () => window.removeEventListener("studySessionsUpdated", onUpdated);
  }, []);

  /** ✅ 날짜별 총 seconds */
  const secondsByDate = useMemo(() => {
    const map = new Map<string, number>();

    for (const s of sessionsAll) {
      const key = localDateKey(s.startTime || s.createdAt);
      if (!key) continue;

      const secs = parseDurationToSeconds(s.duration);
      map.set(key, (map.get(key) || 0) + secs);
    }

    return map;
  }, [sessionsAll]);

  const DaySlot = useMemo(
    () => createDayWithDuration(secondsByDate),
    [secondsByDate]
  );

  const openSessionsByDate = (dateString: string) => {
    const list = sessionsAll.filter((s) => {
      const key = localDateKey(s.startTime || s.createdAt);
      return key === dateString;
    });

    const mapped: StudySession[] = list.map((s) => ({
      topic: s.topic || "",
      description: s.description || "",
      start_time: s.startTime || "",
      end_time: s.endTime || "",
      duration: parseDurationToSeconds(s.duration),
    }));

    setSessions(mapped);
    setSelectedDate(dateString);
    setIsModalOpen(true);
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
                    width: 63,
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
                    <Chip size="small" label={`Start: ${formatDateTime(s.start_time)}`} />
                    <Chip size="small" label={`End: ${formatDateTime(s.end_time)}`} />
                    <Chip size="small" label={`Duration: ${formatDuration(s.duration)}`} />
                  </Stack>
                </Box>
              ))}
            </Stack>
          )}
        </Modal>

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
