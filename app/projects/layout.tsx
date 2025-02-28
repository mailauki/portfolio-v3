import { Button, Grid2 as Grid } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import Link from "next/link";

import Section from "../_components/section";
import Title from "../_components/title";

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
          <Button
            component={Link}
            href="/"
            startIcon={<ChevronLeft />}
            sx={{ pr: 3 }}
            variant="outlined"
          >
            Back
          </Button>
          <ProjectsNav />
        </Grid>
        <Grid size="grow">{children}</Grid>
      </Grid>
    </Section>
  );
}
