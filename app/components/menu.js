import Link from 'next/link'

import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'

import SocialLinks from './social'

const drawerWidth = '100%';

export default function Menu({ menuOpen, handleClose }) {
  return (
    <Drawer
      // variant='persistant'
      anchor='right'
      open={menuOpen}
      onClose={handleClose}
      onClick={handleClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />

      <List>
        <ListItem>
          <ListItemButton component={Link} href="/">
            <ListItemText disableTypography>
              <Typography variant='h3'>Home</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} href="/about_me">
            <ListItemText disableTypography>
              <Typography variant='h3'>About Me</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} href="/projects">
            <ListItemText disableTypography>
              <Typography variant='h3'>Projects</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} href="/contact">
            <ListItemText disableTypography>
              <Typography variant='h3'>Contact</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

      <Box sx={{ position: 'absolute', bottom: 40, right: 60 }}>
        <SocialLinks />
      </Box>
    </Drawer>
  )
}