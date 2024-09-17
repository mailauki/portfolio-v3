import { Typography } from "@mui/material";

import Filter from "./filter";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <Typography
        fontFamily="serif"
        fontSize="10rem"
        mb={5}
        px={2}
        variant="h1"
      >
        Projects
      </Typography>
      <Filter />
    </>
  );
}
