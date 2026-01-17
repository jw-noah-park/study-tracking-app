import { useCallback, useEffect, useState } from "react";

export type StudySessionHistoryItem = {
  _id?: string;
  id?: string;

  topic: string;
  description?: string;

  startTime?: string; // ISO
  endTime?: string; // ISO
  duration?: string; // "HH:MM:SS"

  createdAt?: string; // ISO
};

export type UseStudySessionHistoryOptions = {
  /**
   * History endpoint
   * Default: "/api/studyHistory"
   */
  endpoint?: string;

  /**
   * Auto fetch on mount
   */
  autoFetch?: boolean;

  /**
   * Optional transform if your API returns different shapes
   */
  mapResponse?: (raw: any) => StudySessionHistoryItem[];
};

export function useStudySessionHistory(options: UseStudySessionHistoryOptions = {}) {
  const {
    endpoint = "/api/studyHistory",
    autoFetch = true,
    mapResponse,
  } = options;

  const [sessions, setSessions] = useState<StudySessionHistoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSessions = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;

      const res = await fetch(endpoint, {
        method: "GET",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(data?.message || "Failed to fetch history");
      }

      const list = mapResponse
        ? mapResponse(data)
        : (Array.isArray(data) ? data : data?.sessions || []);

      setSessions(list);
      return list;
    } catch (e: any) {
      console.error("Failed to fetch study session history:", e);
      setError(e?.message || "Failed to fetch history");
      throw e;
    } finally {
      setLoading(false);
    }
  }, [endpoint, mapResponse]);

  useEffect(() => {
    if (!autoFetch) return;
    fetchSessions().catch(() => {});
  }, [autoFetch, fetchSessions]);

  return {
    sessions,
    loading,
    error,
    fetchSessions,
    setSessions, // sometimes useful for optimistic update
  };
}
