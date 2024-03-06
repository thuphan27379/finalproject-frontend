import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import React from "react";

import Logo from "../components/Logo";
import HomeHeader from "./HomeHeader";

// login/register/notfound
// delete/with header
function BlankLayout() {
  return (
    <Stack minHeight="100vh" justifyContent="center" alignItems="center">
      <HomeHeader />
      {/* <Logo sx={{ width: 90, height: 90, mb: 5 }} /> */}

      <Outlet />
    </Stack>
  );
}

export default BlankLayout;
