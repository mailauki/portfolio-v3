"use client";

import type { Project } from "../_utils/types/projects";

import {
  Stack,
  Avatar,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import ProjectButtons from "./buttons";
import WIP from "./wip";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card sx={{ bgcolor: "transparent" }}>
      <CardHeader
        action={project.wip && <WIP />}
        avatar={
          <Avatar
            alt={project.title}
            src={project.image}
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
        }
        subheader={project.description}
        subheaderTypographyProps={{
          variant: "body1",
          color: "text.secondary",
          component: "p",
        }}
        sx={{ alignItems: "flex-start" }}
        title={project.title}
        titleTypographyProps={{ component: "h3", variant: "h5" }}
      />
      <CardContent sx={{ pt: 0 }}>
        {project.bullets && (
          <List
            disablePadding
            sx={{
              listStyleType: "disc",
              pl: 2,
              "& .MuiListItem-root": {
                display: "list-item",
                pl: 0,
              },
            }}
          >
            {project.bullets.map((bullet) => (
              <ListItem key={bullet} disablePadding>
                <ListItemText primary={bullet} />
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
      <CardActions>
        <ProjectButtons project={project} />
      </CardActions>
    </Card>
  );
}
