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
  Avatar,
  Tooltip,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { getLocalTimeZone, parseDate } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";

import CardBox from "@/app/(components)/card";

import { getTagsLink } from "../_utils/helpers/tags/links";
import { getTagsIcon } from "../_utils/helpers/tags/icons";

export default function ProjectCard({ project }: { project: Project }) {
  const formatter = useDateFormatter({ dateStyle: "medium" });

  return (
    <CardBox>
      <CardHeader
        action={
          project.wip && (
            <Tooltip title="Work in progress">
              <Chip label="WIP" sx={{ cursor: "default" }} variant="outlined" />
            </Tooltip>
          )
        }
        id={project.id}
        subheader={project.description[0]}
        subheaderTypographyProps={{ component: "h3" }}
        title={project.title}
        titleTypographyProps={{ component: "h2" }}
      />

      <CardContent>
        <Grid container spacing={2} sx={{ minHeight: 350 }}>
          <Grid size={{ md: project.image[0] ? 5 : 12 }}>
            <Stack spacing={2}>
              <Stack component="ul" spacing={1}>
                {project.description[1] &&
                  (project.description[1] as string[]).map(
                    (bullet: string, index: number) => (
                      <Typography
                        key={index}
                        gutterBottom
                        color="text.secondary"
                        component="li"
                        sx={{ listStyle: "none" }}
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
                {project.tags.sort().map((tag) => (
                  <Chip
                    key={tag}
                    clickable
                    avatar={
                      getTagsIcon(tag) && (
                        <Avatar sx={{ bgcolor: "transparent" }}>
                          {getTagsIcon(tag)}
                        </Avatar>
                      )
                    }
                    component="a"
                    href={getTagsLink(tag)}
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

          <Grid
            justifyContent="flex-end"
            size={{ md: project.image[0] ? 7 : 12 }}
          >
            {project.image[0] && (
              <img
                alt={`screenshot of ${project.title}`}
                src={project.image[0]}
                style={{
                  borderRadius: 8,
                  aspectRatio: "9/6 auto",
                }}
                width="100%"
              />
            )}
          </Grid>
        </Grid>
      </CardContent>

      <CardActions sx={{ flexWrap: "wrap" }}>
        <Button
          aria-label="github repository link"
          component={Link}
          href={project.links.githubLink}
          startIcon={<GitHubIcon />}
          sx={{ minWidth: "fit-content" }}
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
            sx={{ minWidth: "fit-content" }}
            target="_blank"
            variant="outlined"
          >
            Demo
          </Button>
        )}

        {project.date && (
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="flex-end"
            spacing={1}
            sx={{ mt: 1, flexGrow: 1 }}
          >
            <Typography color="text.secondary" variant="caption">
              Last Updated
            </Typography>
            <Typography>
              {formatter.format(
                parseDate(project.date).toDate(getLocalTimeZone()),
              )}
            </Typography>
          </Stack>
        )}
      </CardActions>
    </CardBox>
  );
}
