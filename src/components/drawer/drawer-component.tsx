"use client";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MacroOff from "@mui/icons-material/MacroOff";
import SafetyCheck from "@mui/icons-material/SafetyCheck";
import GroupIcon from "@mui/icons-material/Group";
import Toolbar from "@mui/material/Toolbar";
import AdminAppBar from "../admin-app-bar/admin-app-bar";
import useLanguage from "@/services/i18n/use-language";
import { dir } from "i18next";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import type { ComponentType } from "react";

const drawerWidth = 240;

interface Props {
  children?: React.ReactNode;
}

const adminRoutes: {
  name: string;
  URL: string;
  Icon?: ComponentType<SvgIconProps>;
}[] = [
  { name: "Manage Users", URL: "/admin-panel/users", Icon: GroupIcon },
  { name: "Starred", URL: "/admin-panel", Icon: MailIcon },
  { name: "Sent Email", URL: "/admin-panel", Icon: MacroOff },
  { name: "Draft", URL: "/admin-panel", Icon: SafetyCheck },
  { name: "Dummy One", URL: "/admin-panel", Icon: MailIcon },
  { name: "Dummy Two", URL: "/admin-panel", Icon: MacroOff },
  { name: "Dummy Three", URL: "/admin-panel", Icon: SafetyCheck },
];

const adminRoutes2: {
  name: string;
  URL: string;
  Icon?: ComponentType<SvgIconProps>;
}[] = [
  { name: "Spam", URL: "/admin-panel", Icon: MailIcon },
  { name: "All Emails", URL: "/admin-panel", Icon: MacroOff },
  { name: "Trash", URL: "/admin-panel", Icon: SafetyCheck },
  { name: "Dummy Four", URL: "/admin-panel", Icon: MailIcon },
  { name: "Dummy Five", URL: "/admin-panel", Icon: MacroOff },
  { name: "Dummy Six", URL: "/admin-panel", Icon: SafetyCheck },
];

export default function ResponsiveDrawer(props: Props) {
  const language = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const anchor = dir(language) === "rtl" ? "right" : "left";

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {adminRoutes.map((route) => (
          <ListItem key={route.name} disablePadding>
            <ListItemButton href={route.URL}>
              <ListItemIcon>
                {route.Icon ? <route.Icon /> : <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {adminRoutes2.map((route) => (
          <ListItem key={route.name} disablePadding>
            <ListItemButton href={route.URL}>
              <ListItemIcon>
                {route.Icon ? <route.Icon /> : <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AdminAppBar
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Drawer For Mobile App */}
        <Drawer
          anchor={anchor}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* Drawer For Desktop */}
        <Drawer
          anchor={anchor}
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ...(anchor === "left"
            ? { ml: { sm: `${drawerWidth}px` } }
            : { mr: { sm: `${drawerWidth}px` } }),
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
