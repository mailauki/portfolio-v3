import './globals.css';
import styles from './page.module.css';

import { Paper, Toolbar } from '@mui/material';

import NavBar from './components/nav';
import ThemeRegistry from './components/theme';
import { usePathname } from 'next/navigation';

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
						backgroundImage: 'url("/ombre.png")',
						position: 'relative',
					}}
        >
          <NavBar />
          <main className={styles.main}>
            <Toolbar sx={{ mt: 3 }} />
            {children}
            <Toolbar sx={{ mb: 3 }} />
          </main>
        </Paper>
      </ThemeRegistry>
    </html>
  );
}
