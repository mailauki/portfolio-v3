"use client";

import { Box, Divider, Paper, Stack, Typography } from "@mui/material";

import ItemCard from "@/app/(components)/card";
import skills from "@/app/_utils/data/skills.json";
import experience from "@/app/_utils/data/experience.json";
import education from "@/app/_utils/data/education.json";

import FeaturedProjects from "./projects/featured";
import Hello from "./hello";
import Summary from "./(about)/summary";

export default function Plain() {
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
        {/* <Stack
          useFlexGap
          direction="row"
          divider={<Divider flexItem orientation="vertical" variant="middle" />}
          flexWrap="wrap"
          spacing={1}
        >
          {skills.sort().map((skill) => (
            <Chip
              key={skill.id}
              clickable
              // avatar={
              //   getTagsIcon(skill.title as Tag) && (
              //     <Avatar
              //       aria-hidden="true"
              //       sx={{ bgcolor: "transparent" }}
              //     >
              //       {getTagsIcon(skill.title as Tag)}
              //     </Avatar>
              //   )
              // }
              component="a"
              href={getTagsLink(skill.title as Tag)}
              label={skill.title as Tag}
              target="_blank"
            />
          ))}
        </Stack> */}
        <Stack
          useFlexGap
          component={Typography}
          direction="row"
          divider={
            <Typography component="span" sx={{ mr: 0.5 }}>
              {", "}
            </Typography>
          }
          flexWrap="wrap"
        >
          {skills.sort().map((skill) => (
            <Typography key={skill.id} component="span">
              {skill.title}
            </Typography>
          ))}
        </Stack>
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
