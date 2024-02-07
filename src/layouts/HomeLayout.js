import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import MainFooter from "./MainFooter";
import HomeHeader from "./HomeHeader";
import AlertMsg from "../components/AlertMsg";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

//
function HomeLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <HomeHeader />

      <AlertMsg />
      {/* react toastify */}

      <LeftBar/>

      <Outlet />

      <RightBar/>

      <Box sx={{ flexGrow: 1 }} />

      <MainFooter />
    </Stack>
  );
}

export default HomeLayout;
