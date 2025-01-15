/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import {
  CardHeader,
  Stack,
  Button,
  CardContent,
  Typography,
  Avatar,
  CardActions,
  Chip,
  Grid2 as Grid,
  Link as Anchor,
  Card,
} from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";
import { useDateFormatter } from "@react-aria/i18n";
import { parseDate, getLocalTimeZone } from "@internationalized/date";

import { getTagsIcon } from "@/app/_utils/helpers/tags/icons";
import { getTagsLink } from "@/app/_utils/helpers/tags/links";
import { Project } from "@/app/_utils/types/projects";

import WIP from "../wip";

export default function ProjectIdCard({ project }: { project: Project }) {
  const formatter = useDateFormatter({ dateStyle: "medium" });

  return (
    <Card>
      <CardHeader
        action={project.wip && <WIP />}
        id={project.id}
        subheader={project.description}
        subheaderTypographyProps={{ component: "h3" }}
        title={project.title}
        titleTypographyProps={{ component: "h2" }}
      />

      <CardContent component="div">
        <Grid container spacing={2} sx={{ minHeight: 350 }}>
          <Grid size={{ md: project.image ? 5 : 12 }}>
            <Stack spacing={2}>
              <Stack component="ul" spacing={1}>
                {project.bullets &&
                  project.bullets.map((bullet: string, index: number) => (
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
                  ))}
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

          <Grid justifyContent="flex-end" size={{ md: project.image ? 7 : 12 }}>
            {project.image[0] && (
              <img
                alt={`Screenshot of ${project.title}`}
                src={project.image}
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
          startIcon={<GitHub />}
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
            startIcon={<OpenInNew />}
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
    </Card>
  );
}
