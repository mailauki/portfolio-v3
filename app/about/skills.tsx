"use client";

import { CardContent, CardHeader, Chip, Divider, Stack } from "@mui/material";

import CardBox from "@/app/(components)/card";

import skills from "./skills.json";

export default function Skills() {
  return (
    <CardBox>
      <CardHeader
        subheader="Still learning and mastering"
        subheaderTypographyProps={{ variant: "overline" }}
        sx={{ pb: 0 }}
        title="Skills"
        titleTypographyProps={{ fontFamily: "serif" }}
      />
      <CardContent>
        <Stack
          useFlexGap
          direction="row"
          divider={<Divider flexItem orientation="vertical" variant="middle" />}
          flexWrap="wrap"
          spacing={1}
        >
          {skills.map((skill) => (
            <Chip key={skill.id} label={skill.title} />
          ))}
        </Stack>
      </CardContent>
    </CardBox>
  );
}
