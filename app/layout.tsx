import './globals.css';
import styles from './page.module.css';

import { Grid, Paper, Toolbar } from '@mui/material';

import NavBar from './components/nav';
import ThemeRegistry from './components/theme';

export const metadata = {
  title: {
    template: '%s | Julie Evans',
    default: 'Julie Evans',
  },
  description: 'Portfolio for Julie Evans',
  icons: {
    icon: '/icons/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll='0' lang='en'>
      <ThemeRegistry options={{ key: 'mui' }}>
        <Paper
          className={styles.background}
          component='body'
          elevation={0}
          square
          sx={{
						backgroundImage: 'url("./ombre.png")',
						position: 'relative',
					}}
        >
					<Grid container>
						<Grid item sm={3} xs={12}>
							<NavBar />
						</Grid>
						<Grid item sm={9} xs={12}>
							<Toolbar sx={{ mt: 3 }} />
							{children}
							<Toolbar sx={{ mb: 3 }} />
						</Grid>
					</Grid>
        </Paper>
      </ThemeRegistry>
    </html>
  );
}
