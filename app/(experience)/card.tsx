"use client";

import { Card, CardContent, CardHeader, Stack, Divider } from "@mui/material";

import ItemCard from "../(components)/card";

import experience from "./experience.json";
import education from "./education.json";

export function ExperienceCard() {
  return (
    <Card>
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
    <Card>
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
