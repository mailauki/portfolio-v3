"use client";

import type { Experience } from "@/app/_utils/types/experience";

import {
  Avatar,
  Button,
  IconButton,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

export default function Item({ exp }: { exp: Experience }) {
  const {
    company,
    avatar,
    jobTitle,
    dates,
    description,
    name,
    location,
    links,
  } = exp;

  return (
    <ListItem key={company} alignItems="flex-start">
      {avatar && (
        <ListItemAvatar>
          <IconButton component={Link} href={exp.source} sx={{ p: 0.5, m: 0 }}>
            <Avatar alt={company || name} src={avatar} />
          </IconButton>
        </ListItemAvatar>
      )}
      <ListItemText
        disableTypography
        inset={!avatar}
        primary={
          <Typography component="h3">
            <Typography
              color="text.primary"
              component={exp.source ? Link : "span"}
              href={exp.source}
              target="_blank"
              underline="hover"
            >
              {company || name}
            </Typography>
            {(jobTitle || location) && (
              <>
                {" — "}
                <Typography
                  color="text.secondary"
                  component="span"
                  fontStyle="italic"
                >
                  {jobTitle || location}
                </Typography>
              </>
            )}
          </Typography>
        }
        secondary={
          <>
            <Typography color="text.secondary" component="h4" variant="body2">
              {dates}
            </Typography>
            <Stack component="ul" spacing={0.5} sx={{ mt: 1 }}>
              {description && description[0] && (
                <Typography
                  component="li"
                  sx={{
                    listStyle: "none",
                    "&:before": {
                      content: '"•"',
                      mr: 1,
                    },
                  }}
                >
                  {description[0]}
                </Typography>
              )}
              {description && description[1] && (
                <Typography
                  component="li"
                  sx={{
                    listStyle: "none",
                    "&:before": {
                      content: '"•"',
                      mr: 1,
                    },
                  }}
                >
                  {description[1]}
                </Typography>
              )}
              {description && description[2] && (
                <Typography
                  component="li"
                  sx={{
                    listStyle: "none",
                    "&:before": {
                      content: '"•"',
                      mr: 1,
                    },
                  }}
                >
                  {description[2]}
                </Typography>
              )}
            </Stack>
            {links &&
              links.map((link) => (
                <Button
                  key={link.link}
                  component={Link}
                  href={link.link}
                  startIcon={<LinkIcon />}
                  sx={{ px: 2 }}
                >
                  {link.text}
                </Button>
              ))}
          </>
        }
      />
    </ListItem>
  );
}
