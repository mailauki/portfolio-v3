import { Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="center"
      sx={{ my: 10 }}
    >
      <Typography>
        Built with{" "}
        <Link color="text.primary" href="https://nextjs.org/">
          Next.js
        </Link>{" "}
        and{" "}
        <Link color="text.primary" href="https://tailwindcss.com/">
          Tailwind CSS
        </Link>
        , deployed with{" "}
        <Link color="text.primary" href="https://vercel.com/">
          Vercel
        </Link>
        .
      </Typography>
    </Stack>
  );
}
