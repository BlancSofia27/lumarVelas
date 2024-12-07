import React from 'react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Image from 'next/image'; // Si usas Next.js, si no, usa 'img' directamente
import velasData from '../../velas.json'; // Importar el JSON
import AdminLayout from '../page';

const ProductTable = () => {
  return (
    <AdminLayout>
    <Box mt={4} className="p-6">
      <Button
        variant="contained"
        href="newProduct"
        sx={{
          backgroundColor: '#1e90ff',
          color: 'white',
          '&:hover': {
            backgroundColor: '#187bcd',
          },
        }}
        size="large"
      >
        Añadir Nuevo Producto
      </Button>

      

      {/* Tabla de productos */}
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Imagen</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell></TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {velasData.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell>
                  <Image src={sale.imagen} alt={sale.nombre} width={50} height={50} />
                </TableCell>
                <TableCell>{sale.nombre}</TableCell>
                <TableCell>{sale.descripcion}</TableCell>
                <TableCell>${sale.precio}</TableCell>
                <TableCell>{sale.categoria}</TableCell>
                <TableCell>
                  <Button>Editar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </AdminLayout>
  );
};

export default ProductTable;
