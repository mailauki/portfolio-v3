'use client'

import { useContext, useEffect, useState } from 'react'

import { Context } from '../utils/context'

import useMediaQuery from '@mui/material/useMediaQuery'

import { AppBar, Fade, IconButton, Tab, Tabs, Toolbar, alpha, styled, useScrollTrigger, useTheme } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import SocialLinks from './social'


const StyledTab = styled((props) => (
  <Tab {...props} />
))(({ theme }) => ({
	margin: '0.5rem',
	padding: '0 1.25rem',
	border: '1px solid',
	borderColor: 'transparent',
	borderRadius: '32px',
	'&:hover': {
		backgroundColor: theme.palette.action.hover,
		border: '1px solid',
		borderColor: 'transparent',
	},
	'&.Mui-selected': {
		backgroundColor: theme.palette.action.selected
	},
	'&.Mui-selected:hover': {
		border: '1px solid',
		borderColor: theme.palette.primary.main
	}
}));

export default function Header({ menuOpen, handleClose }) {
  let { darkMode, setDarkMode } = useContext(Context);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useTheme();
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });
  const pathname = usePathname();
  const [tab, setTab] = useState(pathname);
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    setTab(pathname)
  }, [pathname])

  return (
    <>
      <AppBar
        position='fixed'
        elevation={0}
        sx={{
          bgcolor: !scrollTrigger ? 'transparent' : alpha(theme.palette.background.default, 0.25),
          backdropFilter: !scrollTrigger ? 'blur(0)' : 'blur(10px)',
          color: 'text.primary',
          width: '95%',
          right: '2.5%',
          top: '1.5%',
          borderRadius: 8,
          transition: 'all 0.4s ease-in-out 0.25s',
          zIndex: theme.zIndex.drawer + 1
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          {matches && (
            <Tabs
              value={tab}
              sx={{ mr: 2, width: '100%' }}
              indicatorColor='transparent'
              centered
            >
              <StyledTab
                component={Link}
                href='/'
                label='Home'
                value='/'
                color='inherit'
              />
              <StyledTab
                component={Link}
                href='/about_me'
                label='About Me'
                value='/about_me'
                color='inherit'
              />
              <StyledTab
                component={Link}
                href='/projects'
                label='Projects'
                value='/projects'
                color='inherit'
              />
              <StyledTab
                component={Link}
                href='/experience'
                label='Experience'
                value='/experience'
                color='inherit'
              />
            </Tabs>
          )}
          <IconButton
            color='inherit'
            onClick={() => setDarkMode(!darkMode)}
            disabled={prefersDarkMode}
          >
            {darkMode ? <ModeNightIcon/> : <LightModeIcon />}
          </IconButton>
          {!matches && (
            <IconButton color='inherit' onClick={handleClose}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      {matches && (
        <Fade in={scrollTrigger}>
          <AppBar
            component='div'
            position='fixed'
            elevation={0}
            sx={{
              bgcolor: !scrollTrigger ? 'transparent' : alpha(theme.palette.background.default, 0.25),
              backdropFilter: !scrollTrigger ? 'blur(0)' : 'blur(10px)',
              color: 'text.primary',
              width: 'fit-content',
              right: '2.5%',
              top: 'auto',
              bottom: '2.5%',
              pl: 1,
              pr: 1,
              borderRadius: 8,
              transition: 'all 0.4s ease-in-out 0.25s',
              zIndex: theme.zIndex.drawer + 1
            }}
          >
            <SocialLinks />
          </AppBar>
        </Fade>
      )}
    </>
  )
}