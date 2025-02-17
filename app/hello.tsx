"use client";

import { Link, Stack, Typography } from "@mui/material";

export default function Hello() {
  return (
    <Stack sx={{ pt: 6 }}>
      <Typography fontStyle="italic" sx={{ pb: 3 }} variant="subtitle2">
        Get in touch with me however you like. No reason needed.
      </Typography>
      <>
        <Typography component="p" variant="overline">
          Calendy:{" "}
          <Link
            color="text.primary"
            href="https://calendly.com/juliemevans17/30min"
            variant="body1"
          >
            Schedule a call or virtual meeting
          </Link>
        </Typography>
        <Typography component="p" variant="overline">
          Email:{" "}
          <Link
            color="text.primary"
            href="mailto:juliemevans17@gmail.com"
            textTransform="initial"
            variant="body1"
          >
            juliemevans17@gmail.com
          </Link>
        </Typography>
        <Typography component="p" variant="overline">
          Phone:{" "}
          <Link
            color="text.primary"
            href="tel:+17134470724"
            textTransform="initial"
            variant="body1"
          >
            (713)447-0724
          </Link>
        </Typography>
        <Typography component="p" variant="overline">
          On the Internet:{" "}
          <Link
            color="text.primary"
            href="https://github.com/mailauki"
            textTransform="initial"
            variant="body1"
          >
            Github
          </Link>{" "}
          |{" "}
          <Link
            color="text.primary"
            href="https://www.linkedin.com/in/julie-evans-381486180"
            textTransform="initial"
            variant="body1"
          >
            LinkedIn
          </Link>{" "}
          |{" "}
          <Link
            color="text.primary"
            href="https://dev.to/mailauki"
            textTransform="initial"
            variant="body1"
          >
            Blog
          </Link>
        </Typography>
        <Typography component="p" variant="overline">
          Download:{" "}
          <Link
            download
            color="text.primary"
            href="/JulieEvansResume.pdf"
            textTransform="initial"
            variant="body1"
          >
            My Resume
          </Link>
        </Typography>
      </>
      <Typography component="p" sx={{ pt: 3 }} variant="overline">
        Kilgore, Texas
      </Typography>
    </Stack>
  );
}
