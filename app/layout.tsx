import "./globals.css";
import { Box, Container, Paper } from "@mui/material";

import styles from "./page.module.css";
import NavBar from "./(components)/nav";
import ThemeRegistry from "./(components)/theme";
import Background from "./(components)/background";

export const metadata = {
  title: {
    template: "%s | Julie Evans",
    default: "Julie Evans",
  },
  description: "Portfolio for Julie Evans",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll="0" lang="en">
      <ThemeRegistry options={{ key: "mui" }}>
        <Paper
          square
          className={styles.background}
          component="body"
          elevation={0}
          sx={{ bgcolor: "transparent" }}
        >
          <Container component="main" maxWidth="lg">
            {/* <Grid container>
              <Grid component="header" size={{ md: 3, sm: 0 }}>
                <NavBar />
              </Grid>
              <Grid size={{ md: 9, sm: 12 }}>
                <Toolbar sx={{ mt: 3 }} />
                {children}
                <Toolbar sx={{ mb: 3 }} />
              </Grid>
            </Grid> */}
            <NavBar />
            <Box sx={{ my: 10 }}>{children}</Box>
          </Container>
          <Background />
        </Paper>
      </ThemeRegistry>
    </html>
  );
}
