import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainNavbarItems } from "../consts/navbarItems";
import { navbarStyles } from "./styles";
import { useNavigate } from "react-router-dom";

// admin dashboard
// left sidebar category
// code along
const Navbar = () => {
  // const drawerWidth = 240;
  const navigate = useNavigate();

  //
  return (
    <Drawer variant="permanent" sx={navbarStyles.drawer}>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {mainNavbarItems.map((item, index) => (
            <ListItem
              key={item.id}
              disablePadding
              onClick={() => navigate(item.route)}
            >
              <ListItemButton>
                <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Navbar;
