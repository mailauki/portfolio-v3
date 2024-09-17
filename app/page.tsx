"use client";

import { Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Home() {
  return (
    <Grid container spacing={4}>
      <Grid>
        <Stack px={2} spacing={2}>
          <Typography
            fontFamily="serif"
            fontSize={{ md: "10rem", sm: "8rem", xs: "6rem" }}
            variant="h1"
          >
            Hello
          </Typography>
          <Stack height="94%" justifyContent="end" spacing={3}>
            <Typography
              fontSize="1.15rem"
              fontWeight={500}
              textTransform="uppercase"
              variant="h2"
            >
              Julie M. Evans
            </Typography>
            <Typography variant="subtitle1">
              Web Developer | Software Engineer{" "}
            </Typography>
            <Typography variant="subtitle1">
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
          <Typography fontStyle="italic" variant="subtitle1">
            Get in touch with me however you like. No reason needed.
          </Typography>
          <Stack>
            <Typography variant="overline">
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
            <Typography variant="overline">
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
          <Typography variant="overline">Kilgore, Texas</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
