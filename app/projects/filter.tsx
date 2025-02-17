"use client";

import { useState } from "react";
import {
  alpha,
  AppBar,
  Button,
  Fade,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { SwapVert } from "@mui/icons-material";

import { projects } from "../_utils/data/projects";
import { ProjectType } from "../_utils/types/projects";

import ProjectsNav from "./nav";
import Projects from "./projects";

export default function Filter() {
  const desc = [...projects].reverse() as ProjectType[];
  const asc = [...projects] as ProjectType[];
  const [filter, setFilter] = useState<boolean>(false);
  const sort = filter ? desc : asc;
  const scrollTrigger = useScrollTrigger();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

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
          <Toolbar sx={{ justifyContent: "flex-end", gap: 3 }}>
            {!matches && <ProjectsNav />}
            <Button
              endIcon={<SwapVert />}
              sx={{ minWidth: "fit-content", pl: 3 }}
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
