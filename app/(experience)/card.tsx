"use client";

import { Card, CardContent, CardHeader, Stack, Divider } from "@mui/material";

import experience from "@/app/_utils/data/experience.json";
import education from "@/app/_utils/data/education.json";

import ItemCard from "../(components)/card";

export function ExperienceCard() {
  return (
    <Card component="section">
      <CardHeader
        title="Education"
        titleTypographyProps={{
          fontFamily: "serif",
          component: "h2",
          variant: "h5",
        }}
      />
      <CardContent>
        {/* <Typography component="h2" fontFamily="serif" variant="h5">
				Education
			</Typography> */}
        <Stack divider={<Divider />} spacing={3}>
          {experience.map((item) => (
            <ItemCard key={item.title} item={item} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
export function EducationCard() {
  return (
    <Card component="section">
      <CardHeader
        title="Education"
        titleTypographyProps={{
          fontFamily: "serif",
          component: "h2",
          variant: "h5",
        }}
      />
      <CardContent>
        {/* <Typography component="h2" fontFamily="serif" variant="h5">
				Education
			</Typography> */}
        <Stack divider={<Divider />} spacing={3}>
          {education.map((item) => (
            <ItemCard key={item.title} item={item} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
