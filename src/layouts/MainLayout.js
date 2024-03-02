import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import AlertMsg from "../components/AlertMsg";

// DELETE
function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />

      <AlertMsg />
      {/* react toastify */}
      <div style={{ maxWidth: "calc(100vw - 480px)" }}>
        <Outlet />
      </div>
      {/* <Box sx={{ flexGrow: 1 }} /> */}

      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
