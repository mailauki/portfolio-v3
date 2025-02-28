"use client";

import { Box } from "@mui/material";

export default function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box component="section" sx={{ minHeight: "100vh" }}>
      {children}
    </Box>
  );
}
