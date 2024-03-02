import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import Router from "./routes";
import { AuthProvider } from "./contexts/AuthContext"; //access token
// import ThemeProvider, { theme } from "./theme";
// import { dashboardTheme } from "./dashboardTheme";
import { createTheme } from "@mui/material/styles";

// CAN SUA THEME CUSTOMIZE, LAM DARK/LIGHT, RESPONSIVE
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  // const colorMode = React.useContext(ColorModeContext);

  const themeCustom = createTheme({
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
  });

  //
  // return (
  // dark/light mode
  //   <Box
  //     sx={{
  //       display: "flex",
  //       width: "100%",
  //       alignItems: "center",
  //       justifyContent: "center",
  //       bgcolor: "background.default",
  //       color: "text.primary",
  //       borderRadius: 1,
  //       p: 3,
  //     }}
  //   >
  //     {theme.palette.mode} mode
  //     <IconButton
  //       sx={{ ml: 1 }}
  //       onClick={colorMode.toggleColorMode}
  //       color="inherit"
  //     >
  //       {theme.palette.mode === "dark" ? (
  //         <Brightness7Icon />
  //       ) : (
  //         <Brightness4Icon />
  //       )}
  //     </IconButton>
  //     {/* <Navbar/> */}
  //   </Box>
  // );
}

// Dark/Light modes
export default function ToggleColorMode() {
  // const [mode, setMode] = React.useState("light");
  // const colorMode = React.useMemo(
  //   () => ({
  //     toggleColorMode: () => {
  //       setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  //     },
  //   }),
  //   []
  // );

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );

  //
  return (
    <div>
      <Grid container>
        {/* <ColorModeContext.Provider value={colorMode}> */}
        {/* <ThemeProvider> */}
        <AuthProvider>
          <BrowserRouter>
            <CssBaseline enableColorScheme />
            <Router />
            <App />
          </BrowserRouter>
        </AuthProvider>
        {/* </ThemeProvider> */}
        {/* </ColorModeContext.Provider> */}
      </Grid>
    </div>
  );
}
