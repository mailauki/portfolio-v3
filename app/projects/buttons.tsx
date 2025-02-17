"use client";

import { GitHub, Info, OpenInNew } from "@mui/icons-material";
import { IconButton, Link, Tooltip } from "@mui/material";

import { ProjectType } from "@/app/_utils/types/projects";

export default function ProjectButtons({ project }: { project: ProjectType }) {
  return (
    <>
      <Tooltip arrow placement="top" title="Github">
        <IconButton
          aria-label="github repository link"
          component={Link}
          href={project.links.github}
          target="_blank"
        >
          <GitHub />
        </IconButton>
      </Tooltip>
      {project.links.demo && (
        <Tooltip arrow placement="top" title="Demo">
          <IconButton
            aria-label="demo link"
            component={Link}
            href={project.links.demo}
            target="_blank"
          >
            <OpenInNew />
          </IconButton>
        </Tooltip>
      )}
      <Tooltip arrow placement="top" title="See more">
        <IconButton
          aria-label="see more"
          component={Link}
          href={`/projects/${project.id}`}
        >
          <Info />
        </IconButton>
      </Tooltip>
    </>
  );
}
