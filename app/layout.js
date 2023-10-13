// import './globals.css'
import { Inter } from 'next/font/google'

import styles from './page.module.css'

import { Container, Paper } from '@mui/material'

import NavBar from './components/nav'
import ThemeRegistry from './components/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Julie Evans',
    default: 'Julie Evans'
  },
  description: 'Portfolio for Julie Evans',
  icons: {
    icon: '/logo-100.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeRegistry options={{ key: 'mui' }}>
        <Paper elevation={0} component='body'>
          <Container maxWidth='lg' className={styles.main}>
            <NavBar />
            {children}
          </Container>
        </Paper>
      </ThemeRegistry>
    </html>
  )
}
