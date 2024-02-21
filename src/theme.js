import { createTheme } from "@mui/material/styles";

// theme customization
// default theme of the webapp for reuseable primary (button, menu, header, navbar, ...)
// bo vo themeProvider routes/index.js
export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          fontSize: "0.875rem",
        },
      },
    },
  },

  // responsive
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  // color palette
  palette: {
    primary: {
      main: "#B31942 ", //700
      light: "#e65e7a", //300
      dark: "#7c093a",
      contrastText: "#fbe3e7",
    },
    secondary: {
      main: "#0A3161", //800
      light: "#476390", //400
      dark: "#04214a",
      contrastText: "#e5e8ef",
    },
  },

  // font, text
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 12,
    spacing: 4,
  },

  // transition, ease
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
});
