"use client";

import type { Project } from "../_utils/types/projects";

import { List, ListItem } from "@mui/material";

import ProjectCard from "./card";

export default function Projects({ sort }: { sort: Project[] }) {
  return (
    <List>
      {sort.map((project, index) => (
        <ListItem
          key={`project-${index}-${project.id}`}
          alignItems="flex-start"
        >
          <ProjectCard project={project} />
        </ListItem>
      ))}
    </List>
  );
}
