import React from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStop,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { useStudySessionTimerContext } from "../../context/StudySessionTimerContext";

export default function TimerPanel() {
  const timer = useStudySessionTimerContext();

  const { sessionData, sessionActive, elapsedFormatted, saving, error } = timer;

  return (
    <Box>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
        <Typography sx={{ fontWeight: 900, color: "text.primary" }}>
          Timer
        </Typography>

        {!sessionActive ? (
          <IconButton
            onClick={timer.startSession}
            sx={{
              bgcolor: "#f97316",
              color: "#fff",
              "&:hover": { bgcolor: "#ea580c" },
            }}
            size="small"
          >
            <FontAwesomeIcon icon={faPlay} />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => timer.endSession()}
            disabled={saving}
            sx={{
              bgcolor: "#16a34a",
              color: "#fff",
              "&:hover": { bgcolor: "#15803d" },
            }}
            size="small"
          >
            <FontAwesomeIcon icon={faStop} />
          </IconButton>
        )}

        <Box sx={{ flex: 1 }} />

        <IconButton
          onClick={timer.reset}
          size="small"
          sx={{
            border: "1px solid rgba(0,0,0,0.12)",
            borderRadius: 2,
          }}
          disabled={saving}
          title="Reset"
        >
          <FontAwesomeIcon icon={faRotateRight} />
        </IconButton>
      </Stack>

      {/* ✅ 큰 시간 표시 */}
      <Box
        sx={{
          borderRadius: 3,
          border: "1px solid rgba(0,0,0,0.08)",
          p: 2,
          mb: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography sx={{ fontSize: 34, fontWeight: 900 }}>
          {elapsedFormatted}
        </Typography>

        {sessionActive ? (
          <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
            Session in progress...
          </Typography>
        ) : (
          <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
            Ready to start
          </Typography>
        )}
      </Box>

      {!sessionActive ? (
        <Stack spacing={2}>
          <TextField
            label="Topic"
            name="topic"
            size="small"
            value={sessionData.topic}
            onChange={(e) => timer.setField("topic", e.target.value)}
          />
          <TextField
            label="Description"
            name="description"
            size="small"
            value={sessionData.description}
            onChange={(e) => timer.setField("description", e.target.value)}
          />

          {error && (
            <Typography sx={{ color: "error.main", fontSize: 13 }}>
              {error}
            </Typography>
          )}
        </Stack>
      ) : (
        <Box>
          <Typography sx={{ fontWeight: 800, mb: 1 }}>
            Current Session
          </Typography>
          <Typography sx={{ mb: 0.5 }}>
            Topic: {sessionData.topic || "-"}
          </Typography>
          <Typography sx={{ mb: 1.5 }}>
            Description: {sessionData.description || "-"}
          </Typography>

          {error && (
            <Typography sx={{ color: "error.main", fontSize: 13, mb: 1 }}>
              {error}
            </Typography>
          )}

          <Button
            onClick={() => timer.endSession()}
            variant="contained"
            disabled={saving}
            sx={{ bgcolor: "#16a34a", "&:hover": { bgcolor: "#15803d" } }}
          >
            {saving ? "Saving..." : "End Session"}
          </Button>
        </Box>
      )}

      {/* ✅ End 후 Summary (timer hook이 duration 세팅함) */}
      {sessionData.duration && (
        <Box sx={{ mt: 3 }}>
          <Divider sx={{ mb: 2 }} />
          <Typography sx={{ fontWeight: 900, mb: 1 }}>
            Session Summary
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Duration: {sessionData.duration}
          </Typography>

          <Button
            onClick={timer.reset}
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
