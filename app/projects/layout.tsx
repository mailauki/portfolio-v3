import { Grid2 as Grid } from "@mui/material";

import Section from "../(components)/section";
import Title from "../(components)/title";

import ProjectsNav from "./nav";

export const metadata = {
  title: "Projects",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Section>
      <Title>Projects</Title>
      <Grid container spacing={{ xs: 0, sm: 0, md: 2 }}>
        <Grid size={{ xs: 0, sm: 0, md: 3, lg: 3 }}>
          <ProjectsNav />
        </Grid>
        <Grid size="grow">{children}</Grid>
      </Grid>
    </Section>
  );
}
