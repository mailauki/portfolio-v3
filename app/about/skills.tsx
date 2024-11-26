"use client";

import {
  Avatar,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Stack,
} from "@mui/material";

import CardBox from "@/app/(components)/card";

import { getTagsLink } from "../_utils/helpers/tags/links";
import { Tag } from "../_utils/types/projects";
import { getTagsIcon } from "../_utils/helpers/tags/icons";

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
          {skills.sort().map((skill) => (
            <Chip
              key={skill.id}
              clickable
              avatar={
                getTagsIcon(skill.title as Tag) && (
                  <Avatar sx={{ bgcolor: "transparent" }}>
                    {getTagsIcon(skill.title as Tag)}
                  </Avatar>
                )
              }
              component="a"
              href={getTagsLink(skill.title as Tag)}
              label={skill.title as Tag}
              target="_blank"
            />
          ))}
        </Stack>
      </CardContent>
    </CardBox>
  );
}
