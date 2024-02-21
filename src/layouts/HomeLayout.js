import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import AlertMsg from "../components/AlertMsg";
import HomeHeader from "./HomeHeader";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import MainFooter from "./MainFooter";

// kiem tra width
function HomeLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Stack>
        <HomeHeader />
      </Stack>

      <AlertMsg />
      {/* react toastify */}

      <Stack>
        {/* 3 thanh phan nay phai xep theo hang ngang */}
        <LeftBar />

        <Outlet />

        <RightBar />
      </Stack>

      <Box sx={{ flexGrow: 1 }} />

      <MainFooter />
    </Stack>
  );
}

export default HomeLayout;
