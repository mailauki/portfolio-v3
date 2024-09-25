"use client";

import { CardContent, CardHeader, Chip, Divider, Stack } from "@mui/material";

import CardBox from "@/app/(components)/card";

import { tagsLinks } from "../_utils/helpers";

import skills from "./skills.json";

export default function Skills() {
  return (
    <CardBox>
      <CardHeader
        subheader="Still learning and mastering"
        subheaderTypographyProps={{ variant: "overline", component: "h3" }}
        sx={{ pb: 0 }}
        title="Skills"
        titleTypographyProps={{ fontFamily: "serif", component: "h2" }}
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
            <Chip
              key={skill.id}
              clickable
              component="a"
              href={tagsLinks(skill.title)}
              label={skill.title}
              target="_blank"
            />
          ))}
        </Stack>
      </CardContent>
    </CardBox>
  );
}
