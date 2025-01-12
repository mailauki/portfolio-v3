"use client";

import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { EducationCard, ExperienceCard } from "../(experience)/card";
import Title from "../(components)/title";
import Section from "../(components)/section";

import Summary from "./summary";
import Skills from "./skills";
import QuickButtons from "./buttons";

export default function About() {
  return (
    <Section>
      <Title>About</Title>
      <Grid container spacing={{ sm: 3 }}>
        <Grid size={{ sm: 12, md: 3 }}>
          <Stack display={{ xs: "none", sm: "none", md: "flex" }} spacing={3}>
            <QuickButtons />
            <Skills />
          </Stack>
        </Grid>
        <Grid size="grow">
          <Stack spacing={3}>
            <Typography
              component="p"
              fontFamily="serif"
              fontSize={{ sm: "3rem", xs: "2rem" }}
              variant="subtitle1"
              whiteSpace="balance"
            >
              I&apos;m Julie. A web developer, linguist, and problem solver.
            </Typography>
            <Box display={{ md: "none" }}>
              <Skills />
            </Box>
            <Summary />
            <ExperienceCard />
            <EducationCard />
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
