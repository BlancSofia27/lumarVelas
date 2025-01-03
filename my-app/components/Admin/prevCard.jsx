import React from 'react';
import Image from 'next/image'; // Si usas Next.js, puedes usar este componente para optimizar las imágenes
import { Heart } from 'lucide-react'; // Ícono de corazón de Lucide

const PrevCard = ({ product }) => {
  return (
    <div className="relative flex flex-col items-center cursor-pointer">
      {/* Ícono de corazón */}
      <div className="absolute top-2 right-2 p-1 rounded-full">
        <Heart className="text-black w-6 h-6 hover:fill-black hover:text-black transition-all" />
      </div>

      {/* Contenedor de imágenes */}
      <div className="relative w-full h-[300px]">
        {/* Imagen principal */}
        {product.image && (
          <Image
            src={product.image}
            alt={product.name || "Producto"}
            className="w-full h-full object-cover rounded-md transition duration-300 ease-in-out"
            width={300}
            height={300}
          />
        )}
        {/* Imagen secundaria (para hover) */}
        {product.image1 && (
          <Image
            src={product.image1}
            alt={product.name || "Producto"}
            className="w-full h-full object-cover rounded-md absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out hover:opacity-100"
            width={300}
            height={300}
          />
        )}
      </div>

      {/* Información del producto */}
      <h3 className="mt-4 text-lg font-semibold text-center">
        {product.name || "Nombre del Producto"}
      </h3>
      <p className="text-sm text-muted-foreground text-center">
        {product.description || "Descripción del producto..."}
      </p>
      <span className="text-md font-bold text-center">
        ${product.price || "Precio"}
      </span>

      {/* Botón de añadir al carrito */}
      <button className="mt-2 px-4 py-2 bg-black text-white rounded-lg">
        Añadir al carrito
      </button>
    </div>
  );
};

export default PrevCard;
