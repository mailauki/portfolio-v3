"use client";

import { Link, Stack, Typography } from "@mui/material";

export default function Hello() {
  return (
    <Stack display={{ xs: "none", sm: "flex" }} px={2} spacing={2}>
      {/* <Typography
        component="p"
        fontFamily="serif"
        fontSize={{ sm: "3rem", xs: "2rem" }}
        variant="subtitle1"
        whiteSpace="balance"
      >
        Hi, I&apos;m Julie. A web developer, linguist, and problem solver.
      </Typography> */}
      <Typography component="p" fontStyle="italic" variant="subtitle1">
        Get in touch with me however you like. No reason needed.
      </Typography>
      <Stack>
        <Typography component="p" variant="overline">
          Calendy:{" "}
          <Link
            color="textPrimary"
            href="https://calendly.com/juliemevans17/30min"
            variant="subtitle2"
          >
            Schedule a call or virtual meeting
          </Link>
        </Typography>
        <Typography component="p" variant="overline">
          Email:{" "}
          <Link
            color="textPrimary"
            href="mailto:juliemevans17@gmail.com"
            textTransform="initial"
            variant="subtitle1"
          >
            juliemevans17@gmail.com
          </Link>
        </Typography>
        <Typography component="p" variant="overline">
          Phone:{" "}
          <Link
            color="textPrimary"
            href="tel:+17134470724"
            textTransform="initial"
            variant="subtitle1"
          >
            (713)447-0724
          </Link>
        </Typography>
        <Typography component="p" variant="overline">
          On the Internet:{" "}
          <Link
            color="textPrimary"
            href="https://github.com/mailauki"
            textTransform="initial"
            variant="subtitle1"
          >
            Github
          </Link>{" "}
          |{" "}
          <Link
            color="textPrimary"
            href="https://www.linkedin.com/in/julie-evans-381486180"
            textTransform="initial"
            variant="subtitle1"
          >
            LinkedIn
          </Link>{" "}
          |{" "}
          <Link
            color="textPrimary"
            href="https://dev.to/mailauki"
            textTransform="initial"
            variant="subtitle1"
          >
            Blog
          </Link>
        </Typography>
      </Stack>
      <Typography component="p" variant="overline">
        Kilgore, Texas
      </Typography>
    </Stack>
  );
}
