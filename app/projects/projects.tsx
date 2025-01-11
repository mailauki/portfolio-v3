"use client";

import type { Project } from "../_utils/types/projects";

import { Grid2 as Grid } from "@mui/material";

import ProjectCard from "./card";

export default function Projects({ sort }: { sort: Project[] }) {
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 4, md: 12 }}
      spacing={{ xs: 6, sm: 4, md: 4, lg: 6 }}
    >
      {sort.map((project, index) => (
        <Grid
          key={`project-${index}-${project.id}`}
          size={{ xs: 4, sm: 4, md: 6, lg: 6 }}
        >
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
}
