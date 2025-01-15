"use client";

import { OpenInNew } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";

import projects from "@/app/_utils/data/projects.json";
import { Project } from "@/app/_utils/types/projects";

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
    // <Card component="section">
    //   <CardHeader
    //     title="Featured Projects"
    //     titleTypographyProps={{ fontFamily: "serif", component: "h2" }}
    //   />
    //   <CardContent component="div" sx={{ pt: 0 }}>
    //     <Projects sort={featured} />
    //   </CardContent>
    //   <CardActions>
    //     <Button
    //       component={Link}
    //       endIcon={<OpenInNewIcon />}
    //       href="/projects"
    //       sx={{ px: 2 }}
    //     >
    //       See All Projects
    //     </Button>
    //   </CardActions>
    // </Card>
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
