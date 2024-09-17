import type { Project } from "../_utils/types/projects";

import { Stack } from "@mui/material";

import ProjectCard from "./card";

export default function Projects({ sort }: { sort: Project[] }) {
  return (
    <Stack gap={8}>
      {sort.map((project, index) => (
        <ProjectCard key={`project-${index}-${project.id}`} project={project} />
      ))}
    </Stack>
  );
}
