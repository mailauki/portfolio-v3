import type { MenuProps } from "../_utils/types/menu";
import type { MouseEvent } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import SocialLinks from "./social";

const drawerWidth = "100%";
const drawerMaxWidth = 600;

export default function Menu({ menuOpen, handleClose }: MenuProps) {
  const pathname = usePathname();

  const pathindex = () => {
    switch (pathname) {
      case "/":
        return 0;
      case "/about_me":
        return 1;
      case "/projects":
        return 2;
      case "/experience":
        return 3;
      default:
        return 0;
    }
  };

  const [selectedIndex, setSelectedIndex] = useState(pathindex);

  const handleListItemClick = (
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      anchor="right"
      open={menuOpen}
      sx={{
        width: drawerWidth,
        maxWidth: drawerMaxWidth,
        flexShrink: 0,
        ".MuiDrawer-paper": {
          width: drawerWidth,
          maxWidth: drawerMaxWidth,
          boxSizing: "border-box",
        },
      }}
      onClick={handleClose}
      onClose={handleClose}
    >
      <Toolbar />

      <List component="nav">
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/"
            selected={selectedIndex === 0}
            sx={{ textAlign: "center" }}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText disableTypography>
              <Typography
                color={selectedIndex === 0 ? "primary" : "inherit"}
                fontFamily="serif"
                variant="h3"
              >
                Hello
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/about"
            selected={selectedIndex === 1}
            sx={{ textAlign: "center" }}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText disableTypography>
              <Typography
                color={selectedIndex === 1 ? "primary" : "inherit"}
                fontFamily="serif"
                variant="h3"
              >
                About
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/projects"
            selected={selectedIndex === 2}
            sx={{ textAlign: "center" }}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText disableTypography>
              <Typography
                color={selectedIndex === 2 ? "primary" : "inherit"}
                fontFamily="serif"
                variant="h3"
              >
                Projects
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

      <Box
        sx={{
          position: "absolute",
          right: "2.5%",
          top: "auto",
          bottom: "2.5%",
        }}
      >
        <SocialLinks />
      </Box>
    </Drawer>
  );
}
