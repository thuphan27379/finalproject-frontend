import React from "react";
import { BrowserRouter } from "react-router-dom";

import MUIThemeProvider from "./theme/index";

import Router from "./routes";
import { AuthProvider } from "./contexts/AuthContext"; //access token

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <MUIThemeProvider>
            <Router />
          </MUIThemeProvider>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
