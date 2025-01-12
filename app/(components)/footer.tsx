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
        Built with <Link href="https://nextjs.org/">Next.js</Link> and{" "}
        <Link href="https://tailwindcss.com/">Tailwind CSS</Link>, deployed with{" "}
        <Link href="https://vercel.com/">Vercel</Link>.
      </Typography>
    </Stack>
  );
}
