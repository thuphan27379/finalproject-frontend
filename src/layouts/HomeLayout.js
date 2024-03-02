import { Outlet } from "react-router-dom";
import { Box, Container, Stack } from "@mui/material";

import AlertMsg from "../components/AlertMsg";
import HomeHeader from "./HomeHeader";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import MainFooter from "./MainFooter";

// kiem tra width
function HomeLayout() {
  return (
    <>
      {/* <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <HomeHeader />

        <main>
          <LeftBar />

          <Outlet />

          <RightBar />
        </main>

        <MainFooter />
      </Box> */}

      <Stack sx={{ minHeight: "100vh", minWidth: "100vw" }}>
        <Box position="sticky">
          <HomeHeader />
        </Box>

        <AlertMsg />
        {/* react toastify */}

        <Container className="flex-row">
          {/* 3 thanh phan nay phai xep theo hang ngang */}
          <LeftBar />

          <Outlet />

          <RightBar />
        </Container>

        <Box sx={{ flexGrow: 1 }} />

        <MainFooter />
      </Stack>
    </>
  );
}

export default HomeLayout;
