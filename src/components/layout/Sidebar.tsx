import React from "react";
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

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const navItems = [
  { label: "Home", icon: <HomeRoundedIcon /> },
  { label: "Courses", icon: <SchoolRoundedIcon /> },
  { label: "Bookmarks", icon: <BookmarkRoundedIcon /> },
  { label: "Challenges", icon: <EmojiEventsRoundedIcon /> },
  { label: "Leaderboards", icon: <LeaderboardRoundedIcon /> },
  { label: "Certificates", icon: <WorkspacePremiumRoundedIcon /> },
];

export default function Sidebar({ isLoggedIn, onLogin, onLogout }) {
  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        position: "sticky",
        top: 0,
        p: 2,
        bgcolor: "background.paper",
        borderRight: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Stack spacing={2} sx={{ height: "100%" }}>
        {/* Brand + Login */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <AutoAwesomeRoundedIcon sx={{ color: "primary.main" }} />
            <Typography sx={{ fontWeight: 900 }}>StudyTracker</Typography>
          </Stack>

          {isLoggedIn ? (
            <Button size="small" color="error" variant="contained" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <Button size="small" variant="contained" onClick={onLogin}>
              Login
            </Button>
          )}
        </Stack>

        <Divider />

        {/* Nav */}
        <List sx={{ px: 0 }}>
          {navItems.map((item, idx) => (
            <ListItemButton
              key={idx}
              selected={item.label === "Home"}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&.Mui-selected": {
                  bgcolor: "rgba(124,58,237,0.16)",
                },
                "&.Mui-selected:hover": {
                  bgcolor: "rgba(124,58,237,0.22)",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 38, color: "rgba(255,255,255,0.75)" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 700 }}
              />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ flex: 1 }} />

        {/* Promo card bottom */}
        <Box
          sx={{
            p: 2,
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.08)",
            bgcolor: "rgba(255,255,255,0.03)",
          }}
        >
          <Typography sx={{ fontWeight: 900, mb: 0.5 }}>
            Unlock New Possibilities
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.70)", fontSize: 13, mb: 1.5 }}>
            Upgrade to get more insights and custom tracking.
          </Typography>
          <Button fullWidth variant="contained">
            Get Pro now
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
