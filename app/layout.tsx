import "./globals.css";
import { Box, Container, Paper } from "@mui/material";

import styles from "./page.module.css";
import ThemeRegistry from "./(components)/theme";
import Background from "./(components)/background";
import NavBar from "./(components)/nav";
import Footer from "./(components)/footer";

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
          <Container component="main" maxWidth="md">
            <NavBar />
            <Box sx={{ my: 6 }}>
              {children}
              <Footer />
            </Box>
          </Container>
          <Background />
        </Paper>
      </ThemeRegistry>
    </html>
  );
}
