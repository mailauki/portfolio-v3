import { Card as MuiCard } from "@mui/material";

export default function CardBox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MuiCard
      // sx={{
      // 	bgcolor: (theme) => alpha(theme.palette.background.default, 0.2),
      // }}
      // sx={{ bgcolor: brown[50] }}
      variant="outlined"
    >
      {children}
    </MuiCard>
  );
}
