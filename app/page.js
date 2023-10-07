'use client'

import { useState } from 'react'

// import Image from 'next/image'

import styles from './page.module.css'
import { grey } from '@mui/material/colors'

import { Container, Typography } from '@mui/material'

import Header from './components/header'
import Menu from './components/menu'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Container maxWidth='lg' sx={{ bgcolor: grey[200] }} className={styles.main}>
        <Typography variant='h1'>Julie M. Evans</Typography>
        <Typography>Software Engineer - Web Developer</Typography>
      </Container>

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  )
}
