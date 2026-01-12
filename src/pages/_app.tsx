import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { StudySessionTimerProvider } from "../context/StudySessionTimerContext";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#6fbf9b", // 🌱 파스텔 그린 포인트
      dark: "#4da27f",
      light: "#a7dbc4",
    },

    background: {
      default: "#f8faf9", // 🤍 전체 배경 (오프화이트)
      paper: "#ffffff", // 카드 기본은 화이트
    },

    text: {
      primary: "#1f2937", // 너무 쌔지 않은 다크 그레이
      secondary: "#6b7280",
    },

    divider: "rgba(0,0,0,0.08)",
  },

  shape: {
    borderRadius: 4,
  },

  typography: {
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
    h6: { fontWeight: 800 },
    button: { fontWeight: 700 },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
          backgroundImage: "none",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: 12,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#1f2937",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <StudySessionTimerProvider options={{
        saveEndpoint: "/api/studySession",
      }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StudySessionTimerProvider>
  );
}
