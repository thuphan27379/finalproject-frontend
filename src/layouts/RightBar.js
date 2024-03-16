import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

// homepage: domain..
// LINK TO PAGE
const drawerWidth = 240;

export default function RightBar() {
  return (
    <Box sx={{ width: "25vw", marginTop: "90px" }}>
      {/* <CssBaseline /> */}

      <List sx={{ color: "#0A3161" }}>
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
