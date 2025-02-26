"use client";

import type { ProjectType } from "../_utils/types/projects";

import { Divider, Stack } from "@mui/material";

import ProjectCard from "./card";

export default function Projects({ sort }: { sort: ProjectType[] }) {
  return (
    <Stack divider={<Divider />} spacing={3}>
      {sort.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Stack>
    // <Grid container spacing={3}>
    //   {sort.map((project) => (
    //     <Grid key={project.id} size={{ sm: 12, md: 6 }}>
    //       <ProjectCard project={project} />
    //     </Grid>
    //   ))}
    // </Grid>
  );
}
