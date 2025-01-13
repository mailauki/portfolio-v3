"use client";

import { Chip, Tooltip } from "@mui/material";

export default function WIP() {
  return (
    <Tooltip arrow placement="top" title="Work in progress">
      <Chip
        label="WIP"
        sx={{
          cursor: "default",
          "&:hover": { bgcolor: "background.paper" },
        }}
        variant="outlined"
      />
    </Tooltip>
  );
}
