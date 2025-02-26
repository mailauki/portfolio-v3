"use client";

import type { ProjectType } from "../_utils/types/projects";

import {
  Stack,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
  Paper,
} from "@mui/material";

import styles from "@/app/thumbnail.module.css";

import ProjectButtons from "./buttons";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Card>
      <Paper sx={{ display: "flex", justifyContent: "center" }}>
        <Box className={styles.box}>
          <Box className={styles.thumbnail}>
            <iframe
              id={project.id}
              src={project.links.demo}
              title={project.title}
            />
          </Box>
        </Box>
      </Paper>
      <CardHeader
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
      <CardContent component={Stack} spacing={2} sx={{ pt: 0 }}>
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
        <Stack useFlexGap direction="row" flexWrap="wrap" spacing={1}>
          {project.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>
      </CardContent>
      <CardActions>
        <ProjectButtons project={project} />
      </CardActions>
    </Card>
  );
}
