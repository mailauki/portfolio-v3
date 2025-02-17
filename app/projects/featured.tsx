"use client";

import { OpenInNew } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";

import { projects } from "@/app/_utils/data/projects";

import Projects from "./projects";

const featuredProjects = [
  "tic-tac-toe-angular",
  "bmi-calculator",
  "calendar-wallpaper",
  "budget",
];

export default function FeaturedProjects() {
  const featured = [...projects].filter((project) =>
    featuredProjects.some((id) => project.id === id),
  );

  return (
    <>
      <Projects sort={featured} />
      <Button
        component={Link}
        endIcon={<OpenInNew />}
        href="/projects"
        sx={{ px: 2, mt: 4 }}
      >
        See All Projects
      </Button>
    </>
  );
}
