'use client'
import { useState } from 'react'
import { Menu } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'

export default function Header () {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <AppBar position='fixed' elevation={0} sx={{ bgcolor: 'transparent', color: 'text.primary' }}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <IconButton color='inherit' onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <ModeNightIcon/> : <LightModeIcon />}
        </IconButton>
        <IconButton color='inherit'>
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}