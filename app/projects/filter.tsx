"use client";

import { useState } from "react";
import {
  AppBar,
  Button,
  Fade,
  Toolbar,
  alpha,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { SwapVert } from "@mui/icons-material";

import projects from "./projects.json";
import Projects from "./projects";

export default function Filter() {
  const desc = [...projects].reverse();
  const asc = [...projects];
  const [filter, setFilter] = useState<boolean>(false);
  const sort = filter ? desc : asc;
  const scrollTrigger = useScrollTrigger();
  const theme = useTheme();

  function handleSort() {
    setFilter(!filter);
  }

  return (
    <>
      <Fade in={!scrollTrigger}>
        <AppBar
          color="default"
          component="div"
          position="sticky"
          sx={{
            bgcolor: alpha(theme.palette.background.default, 0.25),
            backdropFilter: "blur(10px)",
            mb: 2,
            top: "5.5rem",
            transition: "all 0.4s ease-in-out 0.25s",
          }}
          variant="outlined"
        >
          <Toolbar sx={{ justifyContent: "flex-end" }}>
            <Button
              endIcon={<SwapVert />}
              variant="outlined"
              onClick={handleSort}
            >
              {filter ? "Oldest" : "Newest"}
            </Button>
          </Toolbar>
        </AppBar>
      </Fade>
      <Projects sort={sort} />
    </>
  );
}
