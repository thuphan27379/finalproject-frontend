import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

import AlertMsg from "../components/AlertMsg";
import HomeHeader from "./HomeHeader";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import MainFooter from "./MainFooter";

//
function HomeLayout() {
  return (
    <>
      <Container
        sx={{
          minWidth: "unset",
          maxWidth: "unset!important",
          marginX: "auto",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
      >
        <HomeHeader />

        <AlertMsg />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexGrow: 1,
            maxWidth: "1536px",
            marginX: "auto",
            // paddingLeft: "60px",
          }}
        >
          <div style={{ maxWidth: "240px", marginLeft: "60px" }}>
            <LeftBar />
          </div>

          <div
            className="outlet-wrapper"
            style={{ marginTop: "90px", minWidth: "calc(100% - 480px)" }}
          >
            <Outlet />
          </div>

          <div style={{ maxWidth: "240px", marginRight: "60px" }}>
            <RightBar />
          </div>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <MainFooter />
      </Container>
    </>
  );
}

export default HomeLayout;
