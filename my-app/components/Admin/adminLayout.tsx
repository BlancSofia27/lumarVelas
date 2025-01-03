"use client";

import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// Ancho del drawer lateral
const drawerWidth = 240;

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar (Drawer) */}
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
        {/* Logo de la barra lateral */}
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Image
            src="/lumarCo.png"
            alt="lumar.co velas artesanales"
            width={200}
            height={100}
            priority
          />
        </Box>

        {/* Lista de navegación */}
        <List>
          <Link href="/adminPanel/pedidos" passHref legacyBehavior>
            <ListItemButton component="a">
              <ListItemText primary="Pedidos" />
            </ListItemButton>
          </Link>
          <Link href="/adminPanel/productos" passHref legacyBehavior>
            <ListItemButton component="a">
              <ListItemText primary="Productos" />
            </ListItemButton>
          </Link>
          <Link href="/adminPanel/estadisticas" passHref legacyBehavior>
            <ListItemButton component="a">
              <ListItemText primary="Estadísticas" />
            </ListItemButton>
          </Link>
          <Link href="/adminPanel/clientes" passHref legacyBehavior>
            <ListItemButton component="a">
              <ListItemText primary="Clientes LumarClub" />
            </ListItemButton>
          </Link>
        </List>
      </Drawer>

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
        }}
      >
        {/* Barra superior */}
        <AppBar position="sticky" elevation={0}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Contenido dinámico */}
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
