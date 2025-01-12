"use client";

import { useContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AppBar,
  Fade,
  IconButton,
  alpha,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

import { Context } from "../_utils/context";

import SocialLinks from "./social";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(Context);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useTheme();
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      {matches ? (
        <>
          <AppBar
            color="inherit"
            position="fixed"
            sx={{
              bgcolor: !scrollTrigger
                ? "transparent"
                : alpha(theme.palette.background.default, 0.25),
              backdropFilter: !scrollTrigger ? "blur(0)" : "blur(10px)",
              width: "fit-content",
              height: "fit-content",
              top: "1rem",
              right: { xs: "1rem", sm: "1.5rem" },
              px: 1,
              py: 0.25,
              borderColor: !scrollTrigger ? "transparent" : "default",
              transition: "all 0.4s ease-in-out 0.25s",
            }}
            variant="outlined"
          >
            <IconButton
              disabled={prefersDarkMode}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <ModeNightIcon /> : <LightModeIcon />}
            </IconButton>
          </AppBar>

          {/* md & lg - desktop */}
          {/* bottom links */}
          <Fade in={scrollTrigger}>
            <AppBar
              component="div"
              position="fixed"
              sx={{
                bgcolor: !scrollTrigger
                  ? "transparent"
                  : alpha(theme.palette.background.default, 0.25),
                backdropFilter: !scrollTrigger ? "blur(0)" : "blur(10px)",
                color: "text.primary",
                width: "fit-content",
                top: "auto",
                bottom: "1rem",
                right: { xs: "1rem", sm: "1.5rem" },
                px: 1,
                py: 0.25,
                transition: "all 0.4s ease-in-out 0.25s",
              }}
              variant="outlined"
            >
              <SocialLinks />
            </AppBar>
          </Fade>
        </>
      ) : (
        <>
          {/* sm - mobile */}
          <AppBar
            color="inherit"
            position="fixed"
            sx={{
              bgcolor: !scrollTrigger
                ? "transparent"
                : alpha(theme.palette.background.default, 0.25),
              backdropFilter: !scrollTrigger ? "blur(0)" : "blur(10px)",
              width: "fit-content",
              height: "fit-content",
              top: "1rem",
              right: { xs: "1rem", sm: "1.5rem" },
              px: 1,
              py: 0.25,
              borderColor: !scrollTrigger ? "transparent" : "default",
              transition: "all 0.4s ease-in-out 0.25s",
            }}
            variant="outlined"
          >
            <IconButton
              disabled={prefersDarkMode}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <ModeNightIcon /> : <LightModeIcon />}
            </IconButton>
          </AppBar>
        </>
      )}
    </>
  );
}
