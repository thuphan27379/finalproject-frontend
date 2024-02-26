import { Outlet } from "react-router-dom";
import { Box, Container, Stack } from "@mui/material";

import AlertMsg from "../components/AlertMsg";
import HomeHeader from "./HomeHeader";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import MainFooter from "./MainFooter";
// import styled from "styled-components";
// import SearchIcon from "@mui/icons-material/Search"; //

// kiem tra width
function HomeLayout() {
  // const Search = styled("div")(({ theme }) => ({
  //   position: "relative",
  //   // borderRadius: theme.shape.borderRadius,
  //   // backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   // "&:hover": {
  //   //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   // },
  //   marginLeft: 0,
  //   width: "100%",
  //   // [theme.breakpoints.up("sm")]: {
  //   //   marginLeft: theme.spacing(1),
  //   //   width: "auto",
  //   // },
  // }));

  // const SearchIconWrapper = styled("div")(({ theme }) => ({
  //   // padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }));

  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: "inherit",
  //   width: "100%",
  //   "& .MuiInputBase-input": {
  //     // padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     // transition: theme.transitions.create("width"),
  //     // [theme.breakpoints.up("sm")]: {
  //     //   width: "12ch",
  //     //   "&:focus": {
  //     //     width: "20ch",
  //     //   },
  //     // },
  //   },
  // }));
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

          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
          {/* <input placeholder={"Search"} /> */}
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
