"use client";

import { CardContent, CardHeader, List } from "@mui/material";

import CardBox from "@/app/(components)/card";

import experience from "./experience.json";
import education from "./education.json";
import Item from "./item";

export function ExperienceCard() {
  return (
    <CardBox>
      <CardHeader
        sx={{ pb: 0 }}
        title="Experience"
        titleTypographyProps={{ fontFamily: "serif" }}
      />
      <CardContent sx={{ pt: 0 }}>
        <List>
          {experience.map((work) => (
            <Item key={work.company} exp={work} />
          ))}
        </List>
      </CardContent>
    </CardBox>
  );
}
export function EducationCard() {
  return (
    <CardBox>
      <CardHeader
        sx={{ pb: 0 }}
        title="Education"
        titleTypographyProps={{ fontFamily: "serif" }}
      />
      <CardContent sx={{ pt: 0 }}>
        <List>
          {education.map((school) => (
            <Item key={school.name} exp={school} />
          ))}
        </List>
      </CardContent>
    </CardBox>
  );
}
