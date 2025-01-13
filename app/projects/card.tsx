"use client";

import type { Project } from "../_utils/types/projects";

import Link from "next/link";
import {
  IconButton,
  Link as Anchor,
  ListItemButton,
  Stack,
  Avatar,
  Box,
  Chip,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { GitHub, Info, OpenInNew } from "@mui/icons-material";

import { getTagsLink } from "../_utils/helpers/tags/links";

import WIP from "./wip";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <ListItemButton disableRipple sx={{ borderRadius: 2, cursor: "default" }}>
      <ListItemAvatar sx={{ mr: 3 }}>
        <Avatar
          alt={project.title}
          component={Link}
          href={`/projects/${project.id}`}
          src={project.image[0]}
          sx={{ width: 160, height: 90 }}
          variant="rounded"
        >
          <Stack
            alignItems="center"
            direction="column"
            justifyContent="center"
            sx={{ height: "100%", width: "100%" }}
          >
            <Typography>No Image Yet</Typography>
          </Stack>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        disableTypography
        primary={
          <Anchor
            color="text.primary"
            component={Link}
            href={`/projects/${project.id}`}
            underline="hover"
          >
            {project.title}
          </Anchor>
        }
        secondary={
          <>
            <Typography color="text.secondary" variant="body2">
              {project.description[0]}
            </Typography>
            <Stack
              useFlexGap
              direction="row"
              flexWrap="wrap"
              spacing={1}
              sx={{ my: 2 }}
            >
              {project.tags.sort().map((tag) => (
                <Chip
                  key={tag}
                  clickable
                  component="a"
                  href={getTagsLink(tag)}
                  label={tag}
                  target="_blank"
                />
              ))}
            </Stack>
            {project.wip && (
              <Box position="absolute" right={10} top={10}>
                <WIP />
              </Box>
            )}
            <Stack
              bottom={10}
              direction="row"
              position="absolute"
              right={10}
              spacing={1}
            >
              <IconButton
                aria-label="github repository link"
                component={Link}
                href={project.links.githubLink}
                target="_blank"
              >
                <GitHub />
              </IconButton>

              {project.links.demoLink && (
                <IconButton
                  aria-label="demo link"
                  component={Link}
                  href={project.links.demoLink}
                  target="_blank"
                >
                  <OpenInNew />
                </IconButton>
              )}
              <IconButton
                aria-label="see more"
                component={Link}
                href={`/projects/${project.id}`}
              >
                <Info />
              </IconButton>
            </Stack>
          </>
        }
      />
    </ListItemButton>
  );
}
