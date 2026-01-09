import React from "react";
import { Card, CardContent, Stack, Typography, Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

type Props = {
  title?: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

export default function DashboardCard({ title, right, children, sx }: Props) {
  return (
    <Card elevation={0} sx={{ borderRadius: 4, ...(sx || {}) }}>
      <CardContent sx={{ p: 2.5 }}>
        {(title || right) && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 1.5 }}
          >
            <Typography sx={{ fontWeight: 900, letterSpacing: 0.2 }}>
              {title}
            </Typography>
            {right ? <Box>{right}</Box> : null}
          </Stack>
        )}
        {children}
      </CardContent>
    </Card>
  );
}
