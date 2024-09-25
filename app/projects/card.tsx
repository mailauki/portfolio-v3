/* eslint-disable @next/next/no-img-element */
"use client";

import type { Project } from "../_utils/types/projects";

import Link from "next/link";
import {
  CardHeader,
  Stack,
  CardActions,
  Button,
  Link as Anchor,
  Typography,
  Chip,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import moment from "moment";

import CardBox from "@/app/(components)/card";

import { tagsLinks } from "../_utils/helpers";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <CardBox>
      <CardHeader
        id={project.id}
        subheader={project.description[0]}
        title={project.title}
      />

      <CardContent>
        <Grid
          container
          justifyContent="flex-end"
          spacing={2}
          sx={{ minHeight: 350 }}
        >
          <Grid size={{ md: project.image[0] ? 4 : 12, sm: 12 }}>
            <Stack spacing={2}>
              <Stack spacing={1}>
                {project.description[1] &&
                  (project.description[1] as string[]).map(
                    (bullet: string, index: number) => (
                      <Typography
                        key={index}
                        gutterBottom
                        color="text.secondary"
                        variant="body2"
                      >
                        • {bullet}
                      </Typography>
                    ),
                  )}
              </Stack>

              <Stack
                useFlexGap
                direction="row"
                flexWrap="wrap"
                spacing={1}
                sx={{ mb: 2 }}
              >
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    clickable
                    component="a"
                    href={tagsLinks(tag)}
                    label={tag}
                    target="_blank"
                  />
                ))}
              </Stack>

              <Typography gutterBottom>
                {project.inspiration &&
                  project.inspiration.map((part) =>
                    typeof part !== "string" ? (
                      <Anchor key={part.text} href={part.link}>
                        {part.text}
                      </Anchor>
                    ) : (
                      part
                    ),
                  )}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ md: project.image[0] ? 8 : 12, sm: 12 }}>
            {project.image[0] && (
              <img
                alt={`screenshot of ${project.title}`}
                src={project.image[0]}
                style={{ objectFit: "contain", borderRadius: 8 }}
                width="100%"
              />
            )}

            {project.date && (
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="end"
                spacing={1}
                sx={{ mt: 1 }}
              >
                <Typography color="text.secondary" variant="caption">
                  Last Updated
                </Typography>
                <Typography>
                  {moment(project.date).format("MMM D YYYY")}
                </Typography>
              </Stack>
            )}
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button
          aria-label="github repository link"
          component={Link}
          href={project.links.githubLink}
          startIcon={<GitHubIcon />}
          target="_blank"
          variant="outlined"
        >
          GitHub
        </Button>

        {project.links.demoLink && (
          <Button
            aria-label="demo link"
            component={Link}
            href={project.links.demoLink}
            startIcon={<OpenInNewIcon />}
            target="_blank"
            variant="outlined"
          >
            Demo
          </Button>
        )}
      </CardActions>
    </CardBox>
  );
}
