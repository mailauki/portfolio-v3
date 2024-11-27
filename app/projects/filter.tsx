"use client";

import React, { useState } from "react";
import {
  AppBar,
  Button,
  Fade,
  Tab,
  Tabs,
  Toolbar,
  alpha,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { SwapVert } from "@mui/icons-material";

import { Project } from "../_utils/types/projects";

import projects from "./projects.json";
import Projects from "./projects";

export default function Filter() {
  const desc = [...projects].reverse() as Project[];
  const asc = [...projects] as Project[];
  const [filter, setFilter] = useState<boolean>(false);
  const sort = filter ? desc : asc;
  const scrollTrigger = useScrollTrigger();
  const theme = useTheme();

  function handleSort() {
    setFilter(!filter);
  }

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          <Toolbar sx={{ justifyContent: "space-between", gap: 3 }}>
            <Tabs
              allowScrollButtonsMobile
              aria-label="nav tabs example"
              role="navigation"
              scrollButtons="auto"
              selectionFollowsFocus={true}
              sx={{ borderRadius: 64 }}
              value={value}
              variant="scrollable"
              onChange={handleChange}
            >
              {projects.map((project) => (
                <Tab
                  key={`#${project.id}`}
                  href={`#${project.id}`}
                  label={project.title}
                />
              ))}
            </Tabs>
            <Button
              endIcon={<SwapVert />}
              sx={{ minWidth: "fit-content" }}
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
