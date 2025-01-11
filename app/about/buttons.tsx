import { Avatar, Button, Link, Stack } from "@mui/material";

import SocialLinks from "../(components)/social";

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
      <Button
        disableElevation
        color="primary"
        component={Link}
        href="mailto:juliemevans17@gmail.com"
        size="large"
        sx={{
          fontWeight: 600,
          padding: "0.6rem 2rem",
        }}
        variant="contained"
      >
        Contact Me
      </Button>
      <SocialLinks />
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
    </Stack>
  );
}
