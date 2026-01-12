import { useEffect, useMemo, useState, useCallback } from "react";

export type StudySessionPayload = {
  topic: string;
  description: string;
  startTime: string; // ISO
  endTime: string; // ISO
  duration: string; // HH:MM:SS
};

export type UseStudySessionTimerOptions = {
  /**
   * Save endpoint for a completed session
   * Default: "/api/studySession"
   */
  saveEndpoint?: string;

  /**
   * Called after saving successfully
   * (useful to refresh history)
   */
  onSaved?: (saved?: any) => void;

  /**
   * If you want to block start until topic/description exists etc.
   */
  canStart?: (topic: string, description: string) => boolean;
};

type SessionDraft = {
  topic: string;
  description: string;
  startTime: Date | null;
  endTime: Date | null;
  duration: string | null; // formatted
};

export function useStudySessionTimer(
  options: UseStudySessionTimerOptions = {}
) {
  const { saveEndpoint = "/api/studySession", onSaved, canStart } = options;

  const [sessionData, setSessionData] = useState<SessionDraft>({
    topic: "",
    description: "",
    startTime: null,
    endTime: null,
    duration: null,
  });

  const [sessionActive, setSessionActive] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // seconds
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatTime = useCallback((secs: number) => {
    const hours = Math.floor(secs / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((secs % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (secs % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }, []);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;

    if (sessionActive) {
      intervalId = setInterval(() => setElapsedTime((t) => t + 1), 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [sessionActive]);

  const setField = useCallback(
    (name: "topic" | "description", value: string) => {
      setSessionData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const startSession = useCallback(() => {
    setError(null);

    const topic = sessionData.topic;
    const description = sessionData.description;

    if (canStart && !canStart(topic, description)) {
      setError("Please fill required fields before starting.");
      return;
    }

    setSessionData((prev) => ({
      ...prev,
      startTime: new Date(),
      endTime: null,
      duration: null,
    }));

    setSessionActive(true);
    setElapsedTime(0);
  }, [canStart, sessionData.topic, sessionData.description]);

  const endSession = useCallback(async () => {
    if (!sessionData.startTime) {
      setError("No active session to end.");
      return;
    }

    setSaving(true);
    setError(null);

    const endTime = new Date();
    const durationInSeconds = Math.floor(
      (endTime.getTime() - sessionData.startTime.getTime()) / 1000
    );
    const formattedDuration = formatTime(durationInSeconds);

    // update UI state first
    setSessionData((prev) => ({
      ...prev,
      endTime,
      duration: formattedDuration,
    }));
    setSessionActive(false);

    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;

      if (!token) {
        setError("Please login to save your session.");
        setSessionActive(false); // 세션은 멈추되
        setSaving(false);
        return;
      }

      const payload: StudySessionPayload = {
        topic: sessionData.topic,
        description: sessionData.description,
        startTime: sessionData.startTime.toISOString(),
        endTime: endTime.toISOString(),
        duration: formattedDuration,
      };

      const response = await fetch(saveEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(data?.message || "Failed to save session");
      }

      onSaved?.(data);
      return data;
    } catch (e: any) {
      console.error("Failed to save the session:", e);
      setError(e?.message || "Failed to save the session");
      throw e;
    } finally {
      setSaving(false);
    }
  }, [
    formatTime,
    onSaved,
    saveEndpoint,
    sessionData.description,
    sessionData.startTime,
    sessionData.topic,
  ]);

  const reset = useCallback(() => {
    setError(null);
    setSaving(false);
    setSessionActive(false);
    setElapsedTime(0);
    setSessionData({
      topic: "",
      description: "",
      startTime: null,
      endTime: null,
      duration: null,
    });
  }, []);

  const elapsedFormatted = useMemo(
    () => formatTime(elapsedTime),
    [elapsedTime, formatTime]
  );

  return {
    // state
    sessionData,
    sessionActive,
    elapsedTime,
    elapsedFormatted,
    saving,
    error,

    // actions
    setField,
    startSession,
    endSession,
    reset,

    // utils
    formatTime,
  };
}
