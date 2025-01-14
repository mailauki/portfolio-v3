"use client";

import { GitHub, Info, OpenInNew } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import Link from "next/link";

import { Project } from "@/app/_utils/types/projects";

export default function ProjectButtons({ project }: { project: Project }) {
  return (
    <>
      <Tooltip arrow placement="top" title="Github">
        <IconButton
          aria-label="github repository link"
          component={Link}
          href={project.links.githubLink}
          target="_blank"
        >
          <GitHub />
        </IconButton>
      </Tooltip>
      {project.links.demoLink && (
        <Tooltip arrow placement="top" title="Demo">
          <IconButton
            aria-label="demo link"
            component={Link}
            href={project.links.demoLink}
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
