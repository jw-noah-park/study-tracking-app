import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CalendarComponent from "../components/calendar";
import Memos from "../components/memos";
import TimerPanel from "../components/timer/TimerPanel";
import TimerHistoryPanel from "../components/timer/TimerHistory";
import { Box, Container, Stack } from "@mui/material";
import Sidebar from "../components/layout/Sidebar";
import DashboardCard from "../components/layout/DashboardCard";
import ToDo from "../components/todo"

type View = "home" | "timer" | "todo";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeView, setActiveView] = useState<View>("home");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <Box sx={{ display: "flex", bgcolor: "background.default" }}>
      <Sidebar
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
        activeView={activeView}
        onSelectView={setActiveView}
      />

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Container maxWidth="xl" sx={{ py: 3 }}>
          {/* Top row */}
          <Stack direction={{ xs: "column", lg: "row" }} spacing={2.5}>
            {/* Calendar */}
            <Box sx={{ flex: { lg: 7 }, minWidth: 0 }}>
              <DashboardCard title="Calendar">
                <CalendarComponent />
              </DashboardCard>
            </Box>

            {/* Right panel */}
            <Box sx={{ flex: { lg: 3 }, minWidth: 0 }}>
              <DashboardCard sx={{ height: "100%" }}>
                {activeView === "timer" ? (
                  <TimerPanel /> // ✅ Timer 눌렀을 때: 타이머 컨트롤 UI
                ) : activeView === "todo" ? (
                  <ToDo />
                ) : (
                  <TimerHistoryPanel /> // ✅ 기본(Home): 히스토리 보여주기
                )}
              </DashboardCard>
            </Box>
          </Stack>

          {/* Bottom row */}
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={2.5}
            sx={{ mt: 2.5 }}
          >
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <DashboardCard title="Memos">
                <Memos />
              </DashboardCard>
            </Box>

            <Box sx={{ width: { xs: "100%", lg: 360 }, flexShrink: 0 }}>
              <DashboardCard title="Notes">
                You can add a “Recent sessions” widget here later.
              </DashboardCard>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
