"use client";

import { Paper, useTheme } from "@mui/material";
import { brown } from "@mui/material/colors";

export default function Background() {
  const theme = useTheme();

  return (
    <Paper
      square
      elevation={0}
      sx={{
        background: `linear-gradient(to bottom, ${theme.palette.background.default} 50%, ${brown[500]})`,
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        zIndex: -1,
      }}
    />
  );
}
