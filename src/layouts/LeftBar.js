import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

// homepage: company tabs
// blogPage: blog tabs
// LINK TO PAGE
const drawerWidth = 240;

export default function LeftBar() {
  return (
    <Box sx={{ width: "25vw", marginTop: "90px" }}>
      {/* <CssBaseline /> */}
      {/* <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          "& .MuiPaper-root": {
            top: "70px",
          },
          "& .MuiPaper-elevation": {
            border: "none",
          },
        }}
        variant="permanent"
        anchor="left"
        backgroundColor="black" //
      > */}
      <List sx={{ color: "#0A3161", fontWeight: "800" }}>
        {[
          "Startup Support Program",
          "Our Projects",
          "Cooperate with us",
          "Domains for sale",
          "Your Domains",
          "Donate us",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* </Drawer> */}
    </Box>
  );
}
