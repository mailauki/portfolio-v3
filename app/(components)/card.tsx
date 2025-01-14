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
  Button,
  Typography,
} from "@mui/material";
import { Link } from "@mui/icons-material";

import { Experience } from "@/app/_utils/types/experience";

export default function ItemCard({ item }: { item: Experience }) {
  return (
    <Card sx={{ bgcolor: "transparent" }}>
      {/* <CardActionArea component="a" href={item.source} target="_blank"> */}
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
      {/* </CardActionArea> */}
      {item.links && (
        <CardActions>
          {item.links.map((link) => (
            <Button
              key={link.href}
              component="a"
              href={link.href}
              rel="noopener"
              startIcon={<Link />}
              sx={{ px: 2 }}
              target="_blank"
            >
              {link.text}
            </Button>
          ))}
        </CardActions>
      )}
    </Card>
  );
}
