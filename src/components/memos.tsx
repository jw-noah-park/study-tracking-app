import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import {
  Box,
  Stack,
  Typography,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

type Memo = {
  id: string;
  content: string;
  source?: "guest" | "server";
};

const GUEST_MEMOS_KEY = "guest_memos";

function loadGuestMemos(): Memo[] {
  try {
    const raw = localStorage.getItem(GUEST_MEMOS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function saveGuestMemos(memos: Memo[]) {
  localStorage.setItem(GUEST_MEMOS_KEY, JSON.stringify(memos));
}

function makeGuestId() {
  return `guest_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export default function MemosComponent() {
  const [content, setContent] = useState("");
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    const fetchMemos = async () => {
      // 1) guest 먼저
      const guest = loadGuestMemos();
      if (guest.length > 0) setMemos(guest);

      // 2) token 있으면 server로 덮어쓰기 (원하면 merge로 바꿀 수 있음)
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await fetch("/api/memos", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          const serverMemos: Memo[] = (Array.isArray(data) ? data : []).map((m: any) => ({
            id: String(m.id),
            content: String(m.content ?? ""),
            source: "server",
          }));
          setMemos(serverMemos);
        } else {
          console.error("Failed to fetch memos");
        }
      } catch (error) {
        console.error("Error fetching memos:", error);
      }
    };

    fetchMemos();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = content.trim();
    if (!trimmed) return;

    const token = localStorage.getItem("token");

    // ✅ 로그인 안 했으면 local에 저장 + 바로 UI 업데이트
    if (!token) {
      const newMemo: Memo = { id: makeGuestId(), content: trimmed, source: "guest" };

      setMemos((prev) => {
        const next = [newMemo, ...prev];
        saveGuestMemos(next); // 지금 화면이 guest만일 가능성이 높아서 그대로 저장
        return next;
      });

      setContent("");
      return;
    }

    // ✅ 로그인 했으면 server에 저장 + 성공하면 UI에 추가
    try {
      const response = await fetch("/api/memos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: trimmed }),
      });

      if (response.ok) {
        const newMemoFromServer = await response.json();
        const newMemo: Memo = {
          id: String(newMemoFromServer.id),
          content: String(newMemoFromServer.content ?? trimmed),
          source: "server",
        };

        setMemos((prev) => [newMemo, ...prev]);
        setContent("");
      } else {
        console.error("Failed to add memo");
      }
    } catch (error) {
      console.error("Error adding memo:", error);
    }
  };

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem("token");
    const target = memos.find((m) => m.id === id);

    // ✅ guest 메모면 local에서 삭제 + UI 업데이트
    if (!token || target?.source === "guest") {
      setMemos((prev) => {
        const next = prev.filter((m) => m.id !== id);
        saveGuestMemos(next);
        return next;
      });
      return;
    }

    // ✅ server 메모면 server에서 삭제 + UI 업데이트
    try {
      const response = await fetch(`/api/memos?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        setMemos((prev) => prev.filter((m) => m.id !== id));
      } else {
        console.error("Failed to delete memo");
      }
    } catch (error) {
      console.error("Error deleting memo:", error);
    }
  };

  return (
    <Box>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <TextField
          fullWidth
          size="small"
          placeholder="+ Add a memo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <IconButton type="submit" sx={{ bgcolor: "#f97316", color: "#fff", "&:hover": { bgcolor: "#ea580c" } }}>
          <FontAwesomeIcon icon={faPlus} />
        </IconButton>
      </Stack>

      <Typography sx={{ fontWeight: 900, mb: 1, color: "#111827" }}>
        Memos
      </Typography>

      <List sx={{ border: "1px solid #e5e7eb", borderRadius: 2, bgcolor: "#fff" }}>
        {memos.map((memo) => (
          <ListItem
            key={memo.id}
            secondaryAction={
              <Button color="error" size="small" onClick={() => handleDelete(memo.id)}>
                Delete
              </Button>
            }
            sx={{ borderBottom: "1px solid #f3f4f6" }}
          >
            <ListItemText primary={memo.content} />
          </ListItem>
        ))}

        {memos.length === 0 && (
          <ListItem>
            <ListItemText primary="No memos yet." />
          </ListItem>
        )}
      </List>
    </Box>
  );
}
