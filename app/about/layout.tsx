import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";

import Section from "../(components)/section";
import Title from "../(components)/title";

import QuickButtons from "./buttons";
import Skills from "./skills";

export const metadata = {
  title: "Projects",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            {children}
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
