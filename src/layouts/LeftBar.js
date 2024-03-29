import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

// homepage: company tabs
// LINK TO PAGE
export default function LeftBar() {
  return (
    <Box
      sx={{
        // width: "25vw",
        marginTop: "90px",
        minHeight: "120vh",
        marginLeft: "-30px",
      }}
    >
      <List sx={{ color: "#0A3161", fontWeight: "900" }}>
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
    </Box>
  );
}
