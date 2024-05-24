import './globals.css';
// import styles from './page.module.css';
import { Grid, Toolbar } from '@mui/material';
import NavBar from './(components)/nav';
import ThemeRegistry from './(components)/theme';
import Background from './(components)/background';

export const metadata = {
  title: {
    template: '%s | Julie Evans',
    default: 'Julie Evans',
  },
  description: 'Portfolio for Julie Evans',
  icons: {
    icon: '/icon.png',
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
				<body>
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
					<Background />
				</body>
      </ThemeRegistry>
    </html>
  );
}
