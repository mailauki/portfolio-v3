import './globals.css'
import styles from './page.module.css'

import { Container, Paper, Toolbar } from '@mui/material'

import NavBar from './components/nav'
import ThemeRegistry from './components/theme'

export const metadata = {
  title: {
    template: '%s | Julie Evans',
    default: 'Julie Evans'
  },
  description: 'Portfolio for Julie Evans',
  icons: {
    icon: '/icons/icon.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll="0">
      <ThemeRegistry options={{ key: 'mui' }}>
        <Paper
          elevation={0}
          component='body'
          sx={{ backgroundImage: 'url("/ombre.png")' }}
          className={styles.background}
          square
        >
          <NavBar />
          <main className={styles.main}>
            <Toolbar sx={{ marginTop: 3 }} />
            {children}
            <Toolbar />
          </main>
        </Paper>
      </ThemeRegistry>
    </html>
  )
}
