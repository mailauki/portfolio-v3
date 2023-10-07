'use client'

import { useState } from 'react'

import { AppBar, IconButton, Toolbar } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'

export default function Header({ menuOpen, setMenuOpen}) {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        bgcolor: 'transparent',
        color: 'text.primary',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <IconButton color='inherit' onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <ModeNightIcon/> : <LightModeIcon />}
        </IconButton>
        <IconButton color='inherit' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}