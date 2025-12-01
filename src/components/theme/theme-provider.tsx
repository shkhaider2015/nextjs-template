"use client";

import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { useMemo, PropsWithChildren } from "react";
import StyledJsxRegistry from "./registry";

export const lightThemeOptions = {
  palette: {
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9c27b0",
      light: "#d05ce3",
      dark: "#6a0080",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#555555",
    },
    divider: "rgba(0,0,0,0.12)",
  },
};

export const darkThemeOptions = {
  palette: {
    primary: {
      main: "#90caf9",
      light: "#e3f2fd",
      dark: "#42a5f5",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ce93d8",
      light: "#f3e5f5",
      dark: "#ab47bc",
      contrastText: "#000000",
    },
    background: {
      default: "#141414",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
    divider: "rgba(255,255,255,0.12)",
  },
};

function ThemeProvider(props: PropsWithChildren) {
  const theme = useMemo(
    () =>
      createTheme({
        cssVariables: {
          colorSchemeSelector: "class",
        },
        colorSchemes: {
          light: {
            palette: lightThemeOptions.palette,
          },
          dark: {
            palette: darkThemeOptions.palette,
          },
        },
      }),
    []
  );

  return (
    <StyledJsxRegistry>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </StyledJsxRegistry>
  );
}

export default ThemeProvider;
