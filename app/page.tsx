import { Box, Divider, Paper, Stack, Typography } from "@mui/material";

import ItemCard from "@/app/(experience)/card";

import FeaturedProjects from "./projects/featured";
import Hello from "./hello";
import Summary from "./(about)/summary";
import Skills from "./(about)/skills";
import { experience } from "./_utils/data/experience";
import { education } from "./_utils/data/education";

export default function HomePage() {
  return (
    <Stack spacing={3}>
      <Box component="section" id="intro" sx={{ p: 3 }}>
        <Typography fontFamily="serif" variant="h1">
          Julie Evans
        </Typography>
        <Typography textTransform="uppercase" variant="subtitle1">
          Front-end Web Developer
        </Typography>
        <Hello />
      </Box>
      <Paper component="section" id="profile" sx={{ p: 3 }}>
        <Typography
          component="h2"
          fontFamily="serif"
          sx={{ pb: 2 }}
          variant="h4"
        >
          Profile
        </Typography>
        <Summary />
      </Paper>
      <Paper component="section" id="skills" sx={{ p: 3 }}>
        <Typography
          component="h2"
          fontFamily="serif"
          sx={{ pb: 2 }}
          variant="h4"
        >
          Skills
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ pb: 1 }}
          textTransform="uppercase"
          variant="subtitle2"
        >
          Still learning and mastering
        </Typography>
        <Skills />
      </Paper>
      <Paper component="section" id="featured-projects" sx={{ p: 3 }}>
        <Typography
          component="h2"
          fontFamily="serif"
          sx={{ pb: 2 }}
          variant="h4"
        >
          Featured Projects
        </Typography>
        <FeaturedProjects />
      </Paper>
      <Paper component="section" id="experience" sx={{ p: 3 }}>
        <Typography
          component="h2"
          fontFamily="serif"
          sx={{ pb: 2 }}
          variant="h4"
        >
          Experience
        </Typography>
        <Stack divider={<Divider />} spacing={3}>
          {experience.map((item) => (
            <ItemCard key={item.title} item={item} />
          ))}
        </Stack>
      </Paper>
      <Paper component="section" id="education" sx={{ p: 3 }}>
        <Typography
          component="h2"
          fontFamily="serif"
          sx={{ pb: 2 }}
          variant="h5"
        >
          Education
        </Typography>
        <Stack divider={<Divider />} spacing={3}>
          {education.map((item) => (
            <ItemCard key={item.title} item={item} />
          ))}
        </Stack>
      </Paper>
    </Stack>
  );
}
