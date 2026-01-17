import {
  Box,
  Stack,
  Typography,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useStudySessionTimerContext } from "../../context/StudySessionTimerContext";
import IconButton from "@mui/material/IconButton";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const navItems = [
  { label: "Home", icon: <HomeRoundedIcon />, view: "home" },
  { label: "Timer", icon: <SchoolRoundedIcon />, view: "timer" },
  { label: "TO-DO", icon: <BookmarkRoundedIcon />, view: "todo" },
] as const;

type View = (typeof navItems)[number]["view"];

export default function Sidebar({
  isLoggedIn,
  onLogin,
  onLogout,
  activeView,
  onSelectView,
}: {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
  activeView: View;
  onSelectView: (view: View) => void;
}) {
  const timer = useStudySessionTimerContext();

  const handleNavClick = (view: View) => {
    onSelectView(view);

    // ✅ Timer 눌렀을 때 바로 시작 (이미 돌고 있으면 start 안 함)
    if (view === "timer" && !timer.sessionActive) {
      timer.startSession();
    }
  };

  return (
    <Box
      sx={(theme) => ({
        width: 260,
        height: "100vh",
        position: "sticky",
        top: 0,
        p: 2,
        bgcolor: "background.paper",
        borderRight: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
      })}
    >
      <Stack spacing={2} sx={{ height: "100%" }}>
        {/* Brand + Login */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <AutoAwesomeRoundedIcon sx={{ color: "primary.main" }} />
            <Typography sx={{ fontWeight: 900, color: "text.primary" }}>
              StudyTracker
            </Typography>
          </Stack>

          {isLoggedIn ? (
            <Button variant="outlined" color="error" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="contained" onClick={onLogin}>
              Login
            </Button>
          )}
        </Stack>

        <Divider />

        {/* Nav */}
        <List sx={{ px: 0 }}>
          {navItems.map((item) => {
            const selected = activeView === item.view;

            return (
              <ListItemButton
                key={item.label}
                selected={selected}
                onClick={() => handleNavClick(item.view)}
                sx={(theme) => ({
                  borderRadius: 2,
                  mb: 0.5,
                  "&.Mui-selected": {
                    bgcolor: alpha(theme.palette.primary.main, 0.16),
                  },
                  "&.Mui-selected:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.24),
                  },
                })}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 38,
                    color: selected ? "primary.main" : "text.secondary",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                {/* ✅ 오른쪽에 Chip 넣기 위해 row로 감싸기 */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    gap: 1,
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: selected ? 700 : 600,
                      color: selected ? "primary.main" : "text.primary",
                    }}
                  />

                  {/* ✅ Timer 옆에만 running time 표시 */}
                  {item.view === "timer" && timer.sessionActive && (
                    <Stack direction="row" alignItems="center" spacing={0.75}>
                      <Chip
                        size="small"
                        label={timer.elapsedFormatted}
                        sx={{
                          height: 22,
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      />

                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation(); // ✅ Timer 메뉴 클릭(start) 이벤트 방지
                          timer.endSession(); // ✅ 멈추기(세션 종료 + 저장)
                        }}
                        sx={{
                          p: 0.25,
                          color: "text.secondary",
                          "&:hover": { color: "error.main" },
                        }}
                        title="Stop"
                      >
                        <StopRoundedIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  )}
                </Box>
              </ListItemButton>
            );
          })}
        </List>

        <Box sx={{ flex: 1 }} />

        {/* Promo card bottom */}
        <Box
          sx={(theme) => ({
            p: 2,
            borderRadius: 4,
            border: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
            bgcolor: alpha(theme.palette.primary.main, 0.06),
          })}
        >
          <Typography
            sx={{
              fontWeight: 700,
              mb: 0.5,
              textAlign: "center",
              color: "text.primary",
            }}
          >
            Unlock New Possibilities
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              fontSize: 13,
              mb: 1.5,
              textAlign: "center",
            }}
          >
            Upgrade to get more insights and custom tracking.
          </Typography>

          <Button fullWidth variant="outlined">
            Get Pro now
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
