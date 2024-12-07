"use client";
import React, { useState } from 'react';
import { Paper, TextField, Button, Grid, Typography} from '@mui/material';
import Image from 'next/image'; // Si estás usando Next.js, puedes usar el componente Image de Next.js
import { Skeleton } from "@/components/ui/skeleton";
import { Heart } from "lucide-react"; // Ícono de corazón de Lucide
import FileUpload from './fileUpload';
//import { Product } from "@/types/product";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductPublish = () => {
  // Estado para controlar los datos del formulario
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  // Función para actualizar el estado del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función para manejar la carga de la imagen
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct((prev) => ({
          ...prev,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(file); // Cargar la imagen como una URL de datos
    }
  };

  // Función para manejar añadir al carrito
  const handlePublish = () => {
    toast.success(`Producto Publicado con exito`);
  };

  return (
    <Grid container spacing={2} className="p-8">
        <ToastContainer position="bottom-right" />
      {/* Columna izquierda con el formulario */}
      <Grid item xs={12} md={8}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Publicar un Producto</Typography>
          
          <TextField
            fullWidth
            label="Nombre del Producto"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Descripción"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Precio"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          
        {/* Componente para seleccionar archivo */}
        <FileUpload onFileSelect={handleImageUpload} />
          
          {/* Botón para enviar el formulario */}
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}
          onClick={() => {
            // Evita que el clic en el botón también active la redirección
            handlePublish();
          }}
          
          >
            Publicar Producto
          </Button>
        </Paper>
      </Grid>

      {/* Columna derecha con la tarjeta de vista previa */}
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Vista Previa</Typography>

          {/* Vista previa con el modelo de Card */}
          <Skeleton key={product.name} className="bg-white">
            <div className="relative flex flex-col items-center cursor-pointer">
              {/* Ícono de corazón con hover */}
              <div className="absolute top-2 right-2 p-1 rounded-full">
                <Heart className="text-black w-6 h-6 hover:fill-black hover:text-black transition-all" />
              </div>

              {/* Imagen del producto */}
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={450}
                  className="w-full rounded-md object-cover"
                />
              ) : (
                <div className="w-full h-56 bg-gray-300 rounded-md" />
              )}

              {/* Texto centrado */}
              <h3 className="mt-4 text-lg font-semibold text-center">{product.name || 'Nombre del Producto'}</h3>
              <p className="text-sm text-muted-foreground text-center">{product.description || 'Descripción del producto...'}</p>
              <span className="text-md font-bold text-center">${product.price || 'Precio'}</span>

              {/* Botón de añadir al carrito */}
              <button
                onClick={() => {
                  // Evita que el clic en el botón también active la redirección
                  handlePublish();
                }}
                className="mt-2 px-4 py-2 bg-black text-white rounded-lg"
              >
                Añadir al carrito
              </button>
            </div>
          </Skeleton>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductPublish;
