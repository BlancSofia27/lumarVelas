"use client";

import { useParams } from "next/navigation"; // Importa useParams de next/navigation
import { useEffect, useState } from "react";
import velas from "@/app/velas.json"; // Asegúrate de que la ruta sea correcta para tu archivo JSON

import Image from "next/image";

// Definimos el tipo de datos para las velas
interface Vela {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

const ProductDetail = () => {
  const { id } = useParams(); // Obtén el parámetro 'id' de la URL

  // Creamos un estado para manejar cuando el id está disponible
  const [product, setProduct] = useState<Vela | null>(null);

  // Usamos useEffect para esperar a que el id esté disponible
  useEffect(() => {
    if (id) {
      // Buscamos el producto con el id proporcionado
      const vela = velas.find((vela: Vela) => vela.id.toString() === id);
      setProduct(vela || null); // Si no encontramos el producto, ponemos null
    }
  }, [id]);

  // Si no hay id o el producto no se encuentra
  if (!id) {
    return <p>Cargando...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="p-4">
      <button onClick={() => window.history.back()} className="text-blue-500">
        Volver a la lista
      </button>
      <div className="mt-4 flex gap-6">
        <div className="w-1/2">
          <Image
            src={product.imagen}
            alt={product.nombre}
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">{product.nombre}</h2>
          <p className="mt-2">{product.descripcion}</p>
          <span className="mt-4 text-xl font-semibold">${product.precio}</span>
          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
