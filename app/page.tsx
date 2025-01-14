import { Box, Stack, Typography } from "@mui/material";

import Section from "./(components)/section";
import Hello from "./hello";
import QuickButtons from "./(about)/buttons";
import Skills from "./(about)/skills";
import Summary from "./(about)/summary";
import { ExperienceCard, EducationCard } from "./(experience)/card";
import FeaturedProjects from "./projects/featured";

export default function HomePage() {
  return (
    <Section>
      <Stack spacing={3}>
        <Stack px={2} spacing={2}>
          <Typography
            component="h1"
            fontFamily="serif"
            fontSize={{ md: "10rem", sm: "8rem", xs: "6rem" }}
            sx={{ mb: 3 }}
            variant="h1"
          >
            Julie Evans
          </Typography>
          <Typography
            component="p"
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
        <Summary />
        <Skills />
        <FeaturedProjects />
        <ExperienceCard />
        <EducationCard />
      </Stack>
    </Section>
  );
}
