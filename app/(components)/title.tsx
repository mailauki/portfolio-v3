"use client";

import { Typography } from "@mui/material";

export default function Title({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Typography
      component="h1"
      fontFamily="serif"
      fontSize={{ md: "10rem", sm: "8rem", xs: "6rem" }}
      id={`${String(children).toLowerCase()}`}
      variant="h1"
    >
      {children}
    </Typography>
  );
}
