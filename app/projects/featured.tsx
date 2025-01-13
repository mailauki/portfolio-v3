"use client";

import { Button, CardActions, CardContent, CardHeader } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

import { Project } from "../_utils/types/projects";
import CardBox from "../(components)/card";

import projects from "./projects.json";
import Projects from "./projects";

const featuredProjects = [
  "bmi-calculator",
  "calendar-wallpaper",
  "budget",
  "tic-tac-toe",
];

export default function FeaturedProjects() {
  const featured = [...projects].filter((project) =>
    featuredProjects.some((id) => project.id === id),
  ) as Project[];

  return (
    <CardBox>
      <CardHeader
        title="Featured Projects"
        titleTypographyProps={{ fontFamily: "serif", component: "h2" }}
      />
      <CardContent component="div" sx={{ pt: 0 }}>
        <Projects sort={featured} />
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          endIcon={<OpenInNewIcon />}
          href="/projects"
          sx={{ px: 2 }}
        >
          See All Projects
        </Button>
      </CardActions>
    </CardBox>
  );
}
