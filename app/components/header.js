'use client'

import { useContext, useState } from 'react'

import { Context } from '../utils/context'

import useMediaQuery from '@mui/material/useMediaQuery'

import { AppBar, IconButton, Toolbar, alpha, useTheme } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import ThemeRegistry from './theme'

export default function Header({ menuOpen, handleClose }) {
  let { darkMode, setDarkMode } = useContext(Context);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isTop, setIsTop] = useState(window.scrollY==0);
  const theme = useTheme();

  window.addEventListener("scroll", function() {
    setIsTop(window.scrollY==0)
    ThemeRegistry
  })

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        bgcolor: isTop ? 'transparent' : alpha(theme.palette.common.white, 0.25),
        backdropFilter: 'blur(10px)',
        color: 'text.primary',
        width: '95%',
        right: '2.5%',
        top: '1.5%',
        borderRadius: 8,
        transition: '0.5s ease-in-out',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <IconButton
          color='inherit'
          onClick={() => setDarkMode(!darkMode)}
          disabled={prefersDarkMode}
        >
          {darkMode ? <ModeNightIcon/> : <LightModeIcon />}
        </IconButton>
        <IconButton color='inherit' onClick={handleClose}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}