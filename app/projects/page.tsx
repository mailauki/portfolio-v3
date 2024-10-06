import { Typography } from "@mui/material";

import Filter from "./filter";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <section>
      <header>
        <Typography
          fontFamily="serif"
          fontSize={{ md: "10rem", sm: "8rem", xs: "6rem" }}
          mb={5}
          px={2}
          variant="h1"
        >
          Projects
        </Typography>
      </header>
      <Filter />
    </section>
  );
}
