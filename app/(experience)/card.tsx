"use client";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
  Stack,
  Link,
} from "@mui/material";

import { ExperienceType } from "@/app/_utils/types/experience";

export default function ItemCard({ item }: { item: ExperienceType }) {
  return (
    <Card sx={{ bgcolor: "transparent" }}>
      <CardHeader
        avatar={
          <Avatar
            alt={item.title}
            src={item.avatar}
            sx={{ bgcolor: "transparent" }}
          >
            {" "}
          </Avatar>
        }
        subheader={item.dates}
        subheaderTypographyProps={{
          variant: "body1",
          color: "text.secondary",
          component: "p",
        }}
        title={
          <>
            {item.title}
            {item.description && (
              <Typography
                color="text.secondary"
                component="span"
                fontStyle="italic"
              >
                {" — "}
                {item.description}
              </Typography>
            )}
          </>
        }
        titleTypographyProps={{ component: "h3", variant: "h5" }}
      />
      <CardContent sx={{ pt: 0 }}>
        {item.bullets && (
          <List
            disablePadding
            sx={{
              listStyleType: "disc",
              pl: 2,
              "& .MuiListItem-root": {
                display: "list-item",
                pl: 0,
              },
            }}
          >
            {item.bullets.map((bullet) => (
              <ListItem key={bullet} disablePadding>
                <ListItemText primary={bullet} />
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
      {item.links && (
        <CardActions>
          <Stack useFlexGap direction="row" flexWrap="wrap" spacing={2}>
            {item.links.map((link) => (
              <Link
                key={link.link}
                color="text.primary"
                href={link.link}
                rel="noopener"
                target="_blank"
                variant="body1"
              >
                {link.text}
              </Link>
            ))}
          </Stack>
        </CardActions>
      )}
    </Card>
  );
}
