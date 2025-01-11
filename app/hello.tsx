"use client";

import { Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import Title from "./(components)/title";

export default function Hello() {
  return (
    <Grid container spacing={4}>
      <Grid>
        <Stack px={2} spacing={2}>
          <Title>Hello</Title>
          <Stack height="94%" justifyContent="end" spacing={3}>
            <Typography
              component="h2"
              fontSize="1.15rem"
              fontWeight={500}
              textTransform="uppercase"
              variant="h2"
            >
              Julie M. Evans
            </Typography>
            <Typography component="h3" variant="subtitle1">
              Web Developer | Software Engineer{" "}
            </Typography>
            <Typography component="p" variant="subtitle1">
              Currently working full-time as a Web Developer at{" "}
              <Link
                color="textPrimary"
                href="https://www.pingwind.com/"
                underline="hover"
              >
                PingWind
              </Link>
              .
            </Typography>
          </Stack>
          <Typography component="p" fontStyle="italic" variant="subtitle1">
            Get in touch with me however you like. No reason needed.
          </Typography>
          <Stack>
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
      </Grid>
    </Grid>
  );
}
