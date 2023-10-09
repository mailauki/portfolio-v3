// import './globals.css'
import { Inter } from 'next/font/google'

import styles from './page.module.css'
import { grey } from '@mui/material/colors'

import { Container, Paper } from '@mui/material'

import NavBar from './components/nav'
import ThemeRegistry from './components/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <ThemeRegistry options={{ key: 'mui' }}>
          <Paper elevation={0}>
            <Container maxWidth='lg' className={styles.main}>
              <NavBar />
              {children}
            </Container>
          </Paper>
        </ThemeRegistry>
      </body>
    </html>
  )
}
