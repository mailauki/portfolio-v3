"use client";

import { useEffect, useState } from "react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { brown, grey, indigo } from "@mui/material/colors";

import { Context } from "../_utils/context";

export default function ThemeRegistry(props: {
  options: { key: string };
  children: React.ReactNode;
}) {
  const { options, children } = props;

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    prefersDarkMode ? setDarkMode(prefersDarkMode) : setDarkMode(darkMode);
  }, [prefersDarkMode, darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? grey[200] : indigo[800],
      },
      background: {
        paper: darkMode ? "#121212" : brown[50],
        default: darkMode ? "#121212" : brown[50],
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            borderRadius: 64,
            // backgroundColor: darkMode ? '#121212': '#f4efed',
          },
        },
      },
      MuiCard: {
        defaultProps: {
          variant: "outlined",
        },
        styleOverrides: {
          root: {
            borderRadius: 8,
            borderColor: "transparent",
            // backgroundColor: darkMode ? '#121212': '#f4efed',
            backgroundColor: darkMode
              ? "rgba(0,0,0,0.32)"
              : "rgba(255,255,255,0.16)",
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          variant: "outlined",
        },
        styleOverrides: {
          root: {
            borderRadius: 8,
            borderColor: "transparent",
            backgroundColor: darkMode
              ? "rgba(0,0,0,0.32)"
              : "rgba(255,255,255,0.16)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 64,
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            cursor: "pointer",
          },
        },
      },
    },
  });

  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);

    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted = [] as string[];

    cache.insert = (...args) => {
      const serialized = args[1];

      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }

      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;

      inserted = [];

      return prevInserted;
    };

    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();

    if (names.length === 0) {
      return null;
    }
    let styles = "";

    for (const name of names) {
      styles += cache.inserted[name];
    }

    return (
      <style
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
      />
    );
  });

  return (
    <Context.Provider value={{ darkMode: darkMode, setDarkMode: setDarkMode }}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </Context.Provider>
  );
}
