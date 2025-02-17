"use client";

import { Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useParams, useRouter } from "next/navigation";

import { projects } from "../_utils/data/projects";

export default function ProjectsNav() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Tabs
      selectionFollowsFocus
      aria-label="projects list navigation"
      orientation={matches ? "vertical" : "horizontal"}
      role="navigation"
      sx={{
        position: "sticky",
        top: 0,
        height: matches ? 400 : "auto",
      }}
      value={params!.id || "all-projects"}
      variant="scrollable"
    >
      <Tab
        label="All Projects"
        sx={{ alignItems: "flex-start" }}
        value="all-projects"
        onClick={() => router.push("/projects")}
      />
      {projects.map((project) => (
        <Tab
          key={project.id}
          label={project.title}
          sx={{ alignItems: "flex-start", textWrap: "nowrap" }}
          value={project.id}
          onClick={() => router.push(`/projects/${project.id}`)}
        />
      ))}
    </Tabs>
  );
}
