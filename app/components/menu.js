import { AppBar, Container, Dialog, DialogActions, DialogContent, DialogTitle, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import Header from './header'
import CloseIcon from '@mui/icons-material/Close'

const drawerWidth = '100%';

export default function Menu({ menuOpen, setMenuOpen }) {
  function handleClose() {
    setMenuOpen(!menuOpen)
    // setMenuOpen(false)
  }

  return (
    // <Dialog
    //   fullScreen
    //   open={menuOpen}
    //   onClose={handleClose}
    // >
    //   {/* <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
    //   <AppBar>
    //     <Toolbar sx={{ justifyContent: 'flex-end' }}>
    //       <IconButton color='inherit' onClick={handleClose}>
    //         <CloseIcon />
    //       </IconButton>
    //     </Toolbar>
    //   </AppBar>
    //   <DialogTitle>Title</DialogTitle>
    //   <DialogContent>Content</DialogContent>
    //   <DialogActions></DialogActions>
    // </Dialog>
    <Drawer
      variant='persistant'
      anchor='right'
      open={menuOpen}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText primary='Hello' />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
    // <Container>
    //   <h1>Menu</h1>
    // </Container>
  )
}