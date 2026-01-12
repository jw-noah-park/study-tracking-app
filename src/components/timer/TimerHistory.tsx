import React, { useMemo } from "react";
import { Box, Stack, Typography, Divider, Chip } from "@mui/material";
import {
  useStudySessionHistory,
  StudySessionHistoryItem,
} from "../../hooks/useStudySessionHistory";
import { useStudySessionTimerContext } from "../../context/StudySessionTimerContext";

function safeDateLabel(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString();
}

function getKey(item: StudySessionHistoryItem, idx: number) {
  return item.id || item._id || item.startTime || `${idx}`;
}

export default function TimerHistory() {
  const timer = useStudySessionTimerContext(); // ✅ 추가

  const { sessions, loading, error } = useStudySessionHistory({
    endpoint: "/api/studyHistory",
    autoFetch: true,
  });

  const sorted = useMemo(() => {
    const copy = [...sessions];
    copy.sort((a, b) => {
      const aTime = new Date(
        a.endTime || a.createdAt || a.startTime || 0
      ).getTime();
      const bTime = new Date(
        b.endTime || b.createdAt || b.startTime || 0
      ).getTime();
      return bTime - aTime;
    });
    return copy;
  }, [sessions]);

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Typography sx={{ fontWeight: 900, color: "text.primary" }}>
          Timer History
        </Typography>

        {/* ✅ 타이머가 돌고 있으면 elapsed 표시 */}
        {timer.sessionActive ? (
          <Chip size="small" label={`Running: ${timer.elapsedFormatted}`} />
        ) : (
          <Chip
            size="small"
            label={loading ? "Loading..." : `${sessions.length} sessions`}
            variant="outlined"
          />
        )}
      </Stack>

      {error && (
        <Typography sx={{ color: "error.main", fontSize: 13, mb: 1.5 }}>
          {error}
        </Typography>
      )}

      {!loading && sorted.length === 0 ? (
        <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
          No sessions yet.
        </Typography>
      ) : (
        <Stack spacing={1.25}>
          {sorted.map((s, idx) => (
            <Box
              key={getKey(s, idx)}
              sx={{
                borderRadius: 2,
                border: `1px solid rgba(0,0,0,0.08)`,
                p: 1.25,
                bgcolor: "background.paper",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 0.5 }}
              >
                <Typography sx={{ fontWeight: 800 }}>
                  {s.topic || "Untitled"}
                </Typography>

                {s.duration && <Chip size="small" label={s.duration} />}
              </Stack>

              {s.description && (
                <Typography
                  sx={{ color: "text.secondary", fontSize: 13, mb: 0.75 }}
                >
                  {s.description}
                </Typography>
              )}

              <Divider sx={{ my: 0.75 }} />

              <Stack direction="row" spacing={1} flexWrap="wrap">
                {s.startTime && (
                  <Chip
                    size="small"
                    variant="outlined"
                    label={`Start: ${safeDateLabel(s.startTime)}`}
                  />
                )}
                {s.endTime && (
                  <Chip
                    size="small"
                    variant="outlined"
                    label={`End: ${safeDateLabel(s.endTime)}`}
                  />
                )}
              </Stack>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
}
