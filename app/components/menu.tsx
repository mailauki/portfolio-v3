import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useState } from 'react'

import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'

import SocialLinks from './social'

const drawerWidth = '100%';
const drawerMaxWidth = 600;

export default function Menu({ menuOpen, handleClose }) {
  const pathname = usePathname();

  const pathindex = () => {switch (pathname) {
    case '/':
      return 0;
    case '/about_me':
      return 1;
    case '/projects':
      return 2;
    case '/experience':
      return 3;
    default:
      return 0;
  }}

  const [selectedIndex, setSelectedIndex] = useState(pathindex);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      anchor='right'
      open={menuOpen}
      onClose={handleClose}
      onClick={handleClose}
      sx={{
        width: drawerWidth,
        maxWidth: drawerMaxWidth,
        flexShrink: 0,
        '.MuiDrawer-paper': { width: drawerWidth, maxWidth: drawerMaxWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />

      <List component='nav'>
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            component={Link}
            href='/'
            sx={{ textAlign: 'center' }}
          >
            <ListItemText disableTypography>
              <Typography
                variant='h3'
                color={selectedIndex === 0 ? 'primary' : 'inherit'}
              >
                Home
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            component={Link}
            href='/about_me'
            sx={{ textAlign: 'center' }}
          >
            <ListItemText disableTypography>
              <Typography
                variant='h3'
                color={selectedIndex === 1 ? 'primary' : 'inherit'}
              >
                About Me
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            component={Link}
            href='/projects'
            sx={{ textAlign: 'center' }}
          >
            <ListItemText disableTypography>
              <Typography
                variant='h3'
                color={selectedIndex === 2 ? 'primary' : 'inherit'}
              >
                Projects
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
            component={Link}
            href='/experience'
            sx={{ textAlign: 'center' }}
          >
            <ListItemText disableTypography>
              <Typography
                variant='h3'
                color={selectedIndex === 3 ? 'primary' : 'inherit'}
              >
                Experience
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

      <Box
        sx={{
          position: 'absolute', 
          right: '2.5%',
          top: 'auto',
          bottom: '2.5%'
        }}
      >
        <SocialLinks />
      </Box>
    </Drawer>
  )
}