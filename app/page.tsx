import { Box, Stack, Typography } from "@mui/material";

import Section from "./(components)/section";
import Hello from "./hello";
import QuickButtons from "./(about)/buttons";
import Skills from "./(about)/skills";
import Summary from "./(about)/summary";
import { ExperienceCard, EducationCard } from "./(experience)/card";
import Title from "./(components)/title";
import FeaturedProjects from "./projects/featured";

export default function HomePage() {
  return (
    <Section>
      <Stack spacing={3}>
        <Stack px={2} spacing={2}>
          <Title>Julie Evans</Title>
          <Typography
            component="h2"
            fontSize="1.15rem"
            fontWeight={500}
            textTransform="uppercase"
            variant="h2"
          >
            Front-end Web Developer
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Hello />
          <Box flexGrow={1} sx={{ mx: 3 }}>
            <QuickButtons />
          </Box>
        </Stack>
        <Skills />
        <Summary />
        <FeaturedProjects />
        <ExperienceCard />
        <EducationCard />
      </Stack>
    </Section>
  );
}
