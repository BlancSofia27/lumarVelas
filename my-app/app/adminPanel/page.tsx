// components/AdminLayout.tsx
import React from "react";
import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";
import { Metadata } from "next";

const drawerWidth = 240;
export const metadata: Metadata = {
    title:
      "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
    description: "Dashboard",
  }
  
const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Barra Lateral (Sidebar) */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Image
          src="/lumarCo.png"
          alt="lumar.co velas artesanales"
          width={200}
          height={100}
          className=" transition-all duration-300"
        />
        <List>
          <ListItemButton href="/adminPanel/pedidos">
            <ListItemText primary="Pedidos" />
          </ListItemButton>
          <ListItemButton href="/adminPanel/productos">
            <ListItemText primary="Productos" />
          </ListItemButton>
          <ListItemButton href="#simple-list">
            <ListItemText primary="Estadisticas" />
          </ListItemButton>
          <ListItemButton href="#simple-list">
            <ListItemText primary="Clientes LumarClub" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Contenido Principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
        }}
      >
        {/* Barra Superior (AppBar) */}
        <AppBar position="sticky">
          <Toolbar className="bg-gris">
            <Typography variant="h6" noWrap component="div">
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Contenido dinámico de la página */}
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
