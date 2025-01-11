/* eslint-disable @next/next/no-img-element */
"use client";

import type { Project } from "../_utils/types/projects";

import Link from "next/link";
import {
  CardHeader,
  Stack,
  Card,
  CardActionArea,
  Typography,
  IconButton,
  Paper,
  Chip,
  Tooltip,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      sx={{ background: "transparent", position: "relative" }}
      variant="outlined"
    >
      {project.wip && (
        <Box position="absolute" right={10} sx={{ zIndex: 100 }} top={10}>
          <Tooltip title="Work in progress">
            <Chip
              label="WIP"
              sx={{
                cursor: "default",
                "&:hover": { bgcolor: "background.paper" },
              }}
            />
          </Tooltip>
        </Box>
      )}
      <CardActionArea component={Link} href={`/projects/${project.id}`}>
        <Paper
          sx={{ height: 300, width: "100%", aspectRatio: "9/6 auto" }}
          variant="outlined"
        >
          {!project.image || project.image[0] === "" ? (
            <Stack
              alignItems="center"
              direction="column"
              justifyContent="center"
              sx={{ height: "100%", width: "100%" }}
            >
              <Typography>No Image Yet</Typography>
            </Stack>
          ) : (
            <img
              alt={`screenshot of ${project.title}`}
              height="100%"
              src={project.image[0]}
              style={{
                borderRadius: 8,
                aspectRatio: "9/6 auto",
                objectFit: "cover",
              }}
              width="100%"
            />
          )}
        </Paper>
      </CardActionArea>
      <CardHeader
        disableTypography
        action={
          <Stack direction="row" spacing={1}>
            <IconButton
              aria-label="github repository link"
              component={Link}
              href={project.links.githubLink}
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>

            {project.links.demoLink && (
              <IconButton
                aria-label="demo link"
                component={Link}
                href={project.links.demoLink}
                target="_blank"
              >
                <OpenInNewIcon />
              </IconButton>
            )}
          </Stack>
        }
        sx={{ pt: 1 }}
        title={project.title}
        titleTypographyProps={{ variant: "caption" }}
      />
    </Card>
  );
}
