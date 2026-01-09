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
} from "@mui/material";
import { alpha } from "@mui/material/styles";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const navItems = [
  { label: "Home", icon: <HomeRoundedIcon /> },
  { label: "Timer", icon: <SchoolRoundedIcon /> },
  { label: "TO-DO", icon: <BookmarkRoundedIcon /> },
];

export default function Sidebar({ isLoggedIn, onLogin, onLogout }) {
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
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <AutoAwesomeRoundedIcon sx={{ color: "primary.main" }} />
            <Typography sx={{ fontWeight: 900, color: "text.primary" }}>
              StudyTracker
            </Typography>
          </Stack>

          {isLoggedIn ? (
            <Button
              variant="outlined"
              color="error"
              onClick={onLogout}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={onLogin}
            >
              Login
            </Button>
          )}
        </Stack>

        <Divider />

        {/* Nav */}
        <List sx={{ px: 0 }}>
          {navItems.map((item) => {
            const selected = item.label === "Home";

            return (
              <ListItemButton
                key={item.label}
                selected={selected}
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
                    color: selected
                      ? "primary.main"
                      : "text.secondary",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: selected ? 700 : 600,
                    color: selected ? "primary.main" : "text.primary",
                  }}
                />
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
