"use client";

import { Card, CardContent, CardHeader, List } from "@mui/material";

import experience from "./experience.json";
import education from "./education.json";
import Item from "./item";

export function ExperienceCard() {
  return (
    <Card variant="outlined">
      <CardHeader
        sx={{ pb: 0 }}
        title="Experience"
        titleTypographyProps={{ fontFamily: "serif", component: "h2" }}
      />
      <CardContent sx={{ pt: 0 }}>
        <List>
          {experience.map((work) => (
            <Item key={work.company} exp={work} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
export function EducationCard() {
  return (
    <Card variant="outlined">
      <CardHeader
        sx={{ pb: 0 }}
        title="Education"
        titleTypographyProps={{ fontFamily: "serif", component: "h2" }}
      />
      <CardContent component="div" sx={{ pt: 0 }}>
        <List>
          {education.map((school) => (
            <Item key={school.name} exp={school} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
