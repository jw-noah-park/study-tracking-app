import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CalendarComponent from "../components/calendar";
import MemosComponent from "../components/memos";
import StudySession from "../components/studySession";
import { Box, Container, Stack } from "@mui/material";
import Sidebar from "../components/layout/Sidebar";
import DashboardCard from "../components/layout/DashboardCard"
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
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
      <Sidebar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Container maxWidth="xl" sx={{ py: 3 }}>
          {/* Top row */}
          <Stack direction={{ xs: "column", lg: "row" }} spacing={2.5}>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <DashboardCard
                title="Timer"
                sx={{ height: "100%" }}
              >
                <StudySession />
              </DashboardCard>
            </Box>

            <Box sx={{ width: { xs: "100%", lg: 360 }, flexShrink: 0 }}>
              <DashboardCard title="Calendar">
                <CalendarComponent />
              </DashboardCard>
            </Box>
          </Stack>

          {/* Bottom row */}
          <Stack direction={{ xs: "column", lg: "row" }} spacing={2.5} sx={{ mt: 2.5 }}>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <DashboardCard title="Memos">
                <MemosComponent />
              </DashboardCard>
            </Box>

            <Box sx={{ width: { xs: "100%", lg: 360 }, flexShrink: 0 }}>
              <DashboardCard title="Notes">
                {/* 여기엔 나중에 “최근 세션 목록” 같은 카드 넣기 좋음 */}
                {/* 지금은 가볍게 메모/설명 카드 자리로 비워둬도 되고,
                    원하면 Study History 요약 카드 만들어줄게 */}
                <Box sx={{ color: "rgba(255,255,255,0.70)", fontSize: 14 }}>
                  You can add a “Recent sessions” widget here later.
                </Box>
              </DashboardCard>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
