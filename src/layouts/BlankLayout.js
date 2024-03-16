import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import React from "react";

import Logo from "../components/Logo";
import HomeHeader from "./HomeHeader";

// login/register/notfound
function BlankLayout() {
  return (
    <Stack minHeight="100vh" justifyContent="center" alignItems="center">
      <HomeHeader />

      <Outlet />
    </Stack>
  );
}

export default BlankLayout;
