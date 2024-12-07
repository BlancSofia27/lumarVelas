"use client";
import React, { useState } from "react";
import { Paper, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const SalesTable = () => {
  // Datos hardcodeados para las ventas
  const salesData = [
    { id: 1, productName: "Vela Aromática", customerName: "Juan Pérez", total: 100, date: "2024-12-01", state: "completa" },
    { id: 2, productName: "Vela Premium", customerName: "María Gómez", total: 150, date: "2024-12-02", state: "pendiente" },
    { id: 3, productName: "Vela Clásica", customerName: "Carlos Díaz", total: 80, date: "2024-12-03", state: "completa" },
    { id: 4, productName: "Vela de Lavanda", customerName: "Ana López", total: 120, date: "2024-12-04", state: "cancelada" },
    { id: 5, productName: "Vela de Cítricos", customerName: "Luis Martínez", total: 90, date: "2024-12-05", state: "pendiente" },
  ];

  // Estado para controlar el filtro de ventas
  const [filteredRows, setFilteredRows] = useState(salesData);

  // Columnas de la tabla
  const columns: GridColDef[] = [
    { field: "productName", headerName: "Producto", width: 200 },
    { field: "customerName", headerName: "Cliente", width: 200 },
    { field: "total", headerName: "Total", width: 100 },
    { field: "date", headerName: "Fecha", width: 150 },
    {
      field: "state",
      headerName: "Estado",
      width: 200,
      renderCell: (params) => {
        let colorClass = "";
        switch (params.value) {
          case "completa":
            colorClass = "bg-green-500"; // Verde
            break;
          case "pendiente":
            colorClass = "bg-yellow-500"; // Amarillo
            break;
          case "cancelada":
            colorClass = "bg-red-500"; // Rojo
            break;
          default:
            colorClass = "bg-gray-500"; // Gris por defecto
        }
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              className={`${colorClass} inline-block w-2 h-2 rounded-full`} // Usar clases Tailwind para los círculos
            ></span>
            <span>{params.value}</span>
          </div>
        );
      },
    },
  ];

  // Función para filtrar las filas por estado
  const handleFilter = (state: string) => {
    const filtered = salesData.filter((sale) => sale.state === state);
    setFilteredRows(filtered);
  };

  return (
    <div>
      {/* Botones para filtrar las ventas */}
      <Button
        variant="contained"
        onClick={() => handleFilter("completa")}
        sx={{
          margin: 1,
          backgroundColor: "#28a745", // Desactivar el fondo azul predeterminado de Material-UI
          border: "none", // Eliminar cualquier borde de Material-UI
        }}
        className="bg-green-500 text-white hover:bg-green-700"
      >
        Completadas
      </Button>
      <Button
        variant="contained"
        onClick={() => handleFilter("pendiente")}
        sx={{
          margin: 1,
          backgroundColor: '#ffc107', // Desactivar el fondo azul predeterminado de Material-UI
          border: "none", // Eliminar cualquier borde de Material-UI
        }}
        className="bg-yellow-500 text-black hover:bg-yellow-700"
      >
        Pendientes
      </Button>
      <Button
        variant="contained"
        onClick={() => handleFilter("cancelada")}
        sx={{
          margin: 1,
          backgroundColor: "#dc3545", // Desactivar el fondo azul predeterminado de Material-UI
          border: "none", // Eliminar cualquier borde de Material-UI
        }}
        className=" text-white hover:bg-red-700"
      >
        Canceladas
      </Button>
      <Button
        variant="contained"
        onClick={() => setFilteredRows(salesData)}
        sx={{
          margin: 1,
          backgroundColor: "#d1d1d1", // Desactivar el fondo azul predeterminado de Material-UI
          border: "none", // Eliminar cualquier borde de Material-UI
        }}
        className="bg-gray-300 text-black hover:bg-gray-500"
      >
        Mostrar Todas
      </Button>

      {/* Tabla de ventas */}
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          sx={{
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
          }}
        />
      </Paper>
    </div>
  );
};

export default SalesTable;
