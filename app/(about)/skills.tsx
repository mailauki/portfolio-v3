"use client";

import { Stack, Typography } from "@mui/material";

import { skills } from "@/app/_utils/data/skills";

export default function Skills() {
  return (
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
        <Typography key={skill} component="span">
          {skill}
        </Typography>
      ))}
    </Stack>
  );
}
