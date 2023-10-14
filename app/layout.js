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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    // icon: '/icons/favicon.ico',
    // icon: '/icons/icon.jpg',
    icon: '/icons/icon.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeRegistry options={{ key: 'mui' }}>
        <Paper elevation={0} component='body' sx={{ backgroundImage: 'url("/ombre.png")', backgroundPosition: 'center bottom', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
          <NavBar />
          
          <main className={styles.main}>
            <Container maxWidth='lg'>
              {children}
            </Container>
          </main>
        </Paper>
      </ThemeRegistry>
    </html>
  )
}
