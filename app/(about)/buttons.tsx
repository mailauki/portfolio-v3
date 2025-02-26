"use client";

import { Avatar, Button, Link, Stack, Tooltip } from "@mui/material";

import SocialLinks from "../_components/social";

export default function QuickButtons() {
  return (
    <Stack
      alignItems="center"
      spacing={2}
      sx={{ textAlign: "center", height: "100%" }}
    >
      <Avatar
        alt="Julie Evans"
        src="/profile.jpg"
        sx={{ width: 200, height: 200, my: 2 }}
      >
        JE
      </Avatar>
      <Tooltip arrow placement="top" title="Schedule with Calendy">
        <Button
          disableElevation
          color="primary"
          component={Link}
          href="https://calendly.com/juliemevans17/30min"
          size="large"
          sx={{
            fontWeight: 600,
            padding: "0.6rem 2rem",
          }}
          variant="contained"
        >
          Get in touch
        </Button>
      </Tooltip>
      <SocialLinks />
      <Tooltip arrow placement="top" title="Download">
        <Button
          download
          color="inherit"
          component={Link}
          href="/JulieEvansResume.pdf"
          sx={{
            padding: "0.4rem 1.25rem",
          }}
          variant="outlined"
        >
          My Resume
        </Button>
      </Tooltip>
    </Stack>
  );
}
