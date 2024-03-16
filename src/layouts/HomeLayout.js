import { Outlet } from "react-router-dom";
import { Box, Container, Stack } from "@mui/material";

import AlertMsg from "../components/AlertMsg";
import HomeHeader from "./HomeHeader";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import MainFooter from "./MainFooter";

// kiem tra width
// MARGIN HAI BEN MAN HINH
function HomeLayout() {
  return (
    // <>
    //   <Container sx={{ ml: "16px", mr: "16px", background: "white" }}>
    //     <Grid container spacing={3}>
    //       <Stack sx={{ minHeight: "100vh", minWidth: "100vw" }}>
    //         <Box position="sticky">
    //           <HomeHeader />
    //         </Box>

    //         <AlertMsg />
    //         {/* react toastify */}

    //         <Stack className="flex-row">
    //           <Grid xs>
    //             <LeftBar sx={{ width: "300px", background: "black" }} />
    //           </Grid>
    //           <Grid xs={6}>
    //             <Outlet sx={{ width: "800px" }} />
    //           </Grid>
    //           <Grid xs>
    //             <RightBar sx={{ width: "300px", background: "black" }} />
    //           </Grid>
    //         </Stack>

    //         {/* <Box sx={{ flexGrow: 1 }} /> */}
    //         <Box>
    //           <MainFooter />
    //         </Box>
    //       </Stack>
    //     </Grid>
    //   </Container>
    // </>
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

        <MainFooter />
      </Container>
    </>
  );
}

export default HomeLayout;
