import React, { createContext, useContext, useMemo } from "react";
import { useStudySessionTimer, UseStudySessionTimerOptions } from "../hooks/useStudySessionTimer";

type TimerContextValue = ReturnType<typeof useStudySessionTimer>;

const StudySessionTimerContext = createContext<TimerContextValue | null>(null);

export function StudySessionTimerProvider({
  children,
  options,
}: {
  children: React.ReactNode;
  options?: UseStudySessionTimerOptions;
}) {
  const timer = useStudySessionTimer(options);

  const value = useMemo(() => timer, [timer]);

  return (
    <StudySessionTimerContext.Provider value={value}>
      {children}
    </StudySessionTimerContext.Provider>
  );
}

export function useStudySessionTimerContext() {
  const ctx = useContext(StudySessionTimerContext);
  if (!ctx) {
    throw new Error("useStudySessionTimerContext must be used within StudySessionTimerProvider");
  }
  return ctx;
}
