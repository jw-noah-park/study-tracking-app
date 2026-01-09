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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export default function MemosComponent() {
  const [content, setContent] = useState("");
  const [memos, setMemos] = useState([]);

  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const fetchMemos = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await fetch("/api/memos", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          setMemos(data);
        } else {
          throw new Error("Failed to fetch memos");
        }
      } catch (error) {
        console.error("Error fetching memos:", error);
      }
    };

    fetchMemos();
  }, []);

  const openModal = (msg) => {
    setModalMessage(msg);
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) return openModal("Please login first.");

      const response = await fetch("/api/memos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        const newMemo = await response.json();
        setMemos((prev) => [...prev, newMemo]);
        setContent("");
        openModal("Memo added successfully");
      } else {
        throw new Error("Failed to add memo");
      }
    } catch (error) {
      console.error("Error adding memo:", error);
      openModal("Failed to add memo");
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return openModal("Please login first.");

      const response = await fetch(`/api/memos?id=${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        setMemos((prev) => prev.filter((m) => m.id !== id));
        openModal("Memo deleted successfully");
      } else {
        throw new Error("Failed to delete memo");
      }
    } catch (error) {
      console.error("Error deleting memo:", error);
      openModal("Failed to delete memo");
    }
  };

  return (
    <Box>
      <Stack component="form" onSubmit={handleSubmit} direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
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

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{ fontWeight: 900 }}>Notification</DialogTitle>
        <DialogContent>{modalMessage}</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
