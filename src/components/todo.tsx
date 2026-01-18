import React, { useEffect, useState } from "react";
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
  Checkbox,
} from "@mui/material";

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

const TODO_KEY = "guest_todos";

function loadTodos(): TodoItem[] {
  try {
    const raw = localStorage.getItem(TODO_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function saveTodos(items: TodoItem[]) {
  localStorage.setItem(TODO_KEY, JSON.stringify(items));
}

function makeId() {
  return `todo_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export default function TodoComponent() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    const newItem: TodoItem = {
      id: makeId(),
      text: trimmed,
      completed: false,
    };

    setTodos((prev) => {
      const next = [newItem, ...prev];
      saveTodos(next);
      return next;
    });

    setText("");
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) => {
      const next = prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
      saveTodos(next);
      return next;
    });
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => {
      const next = prev.filter((t) => t.id !== id);
      saveTodos(next);
      return next;
    });
  };

  return (
    <Box>
      <Stack
        component="form"
        onSubmit={addTodo}
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <TextField
          fullWidth
          size="small"
          placeholder="+ Add a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ bgcolor: "#f97316", color: "#fff", "&:hover": { bgcolor: "#ea580c" } }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </IconButton>
      </Stack>

      <Typography sx={{ fontWeight: 900, mb: 1, color: "#111827" }}>
        To-do
      </Typography>

      <List sx={{ border: "1px solid #e5e7eb", borderRadius: 2, bgcolor: "#fff" }}>
        {todos.map((t) => (
          <ListItem
            key={t.id}
            disablePadding
            sx={{
              borderBottom: "1px solid #f3f4f6",
              px: 1,
              py: 0.5,
            }}
            secondaryAction={
              <Button color="error" size="small" onClick={() => deleteTodo(t.id)}>
                Delete
              </Button>
            }
          >
            <Checkbox
              checked={t.completed}
              onChange={() => toggleTodo(t.id)}
              sx={{ mr: 1 }}
            />
            <ListItemText
              primary={t.text}
              onClick={() => toggleTodo(t.id)} // ✅ 글자 눌러도 토글 (reclick 가능)
              sx={{
                cursor: "pointer",
                "& .MuiListItemText-primary": {
                  textDecoration: t.completed ? "line-through" : "none",
                  color: t.completed ? "text.secondary" : "text.primary",
                },
              }}
            />
          </ListItem>
        ))}

        {todos.length === 0 && (
          <ListItem>
            <ListItemText primary="No tasks yet." />
          </ListItem>
        )}
      </List>
    </Box>
  );
}
