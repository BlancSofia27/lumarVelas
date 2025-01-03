"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart } from "lucide-react"; // Ícono de corazón de Lucide
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/store/cartSlice";
import { toast } from "react-toastify";
import { supabase } from "../utils/supabaseClient"; // Importa el cliente de Supabase

const VelasGrid = ({ filters = {} }) => {
  const [products, setProducts] = useState([]); // Almacenar productos de Supabase
  const dispatch = useDispatch();

  // Función para cargar los productos desde Supabase
  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products") // Asume que la tabla se llama 'products'
        .select("*");

      if (error) throw error;

      setProducts(data);
    } catch (error) {
      console.error("Error al obtener productos de Supabase:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filtrar productos basados en los filtros pasados como props
  const filteredProducts = products.filter((producto) => {
    let isMatch = true;
    if (filters.categoria) {
      isMatch = isMatch && producto.categoria === filters.categoria;
    }
    if (filters.name) {
      isMatch =
        isMatch &&
        producto.name.toLowerCase().includes(filters.name.toLowerCase());
    }
    return isMatch;
  });

  const handleAddToCart = (producto) => {
    dispatch(
      addItemToCart({
        id: producto.id,
        name: producto.name,
        price: producto.price,
        img: producto.image_url,
        quantity: 1, // Inicializa la cantidad en 1
      })
    );
    toast.success(`${producto.name} añadido al carrito`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-zinc-900 py-4">
      {filteredProducts.map((producto) => (
        <Skeleton key={producto.id} className="bg-white " title={producto.name}>
          <div className="relative flex flex-col items-center cursor-pointer">
            {/* Ícono de corazón con hover */}
            {/* Ícono de corazón con hover */}
            <div className="absolute top-2 right-2 p-1 rounded-full z-10">
              <Heart className="text-zinc-900 w-6 h-6 hover:fill-zinc-900 hover:text-zinc-900 transition-all" />
            </div>

            {/* Imagen del producto */}
            <div className="w-full relative group">
              <Image
                src={producto.image_url}
                alt={producto.name}
                width={400}
                height={600} // Aumenta la altura
                className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-md object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src={producto.image1_url} // Imagen secundaria al hacer hover
                alt={producto.name}
                width={400}
                height={600}
                className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-md object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Texto centrado */}
            <h3 className="mt-4 text-lg font-semibold text-center">{producto.name}</h3>
            <p className="text-sm text-center">{producto.description}</p>
            <span className="text-md font-bold text-center">${producto.price}</span>

 {/* Indicador de intensidad */}
 <div className="flex items-center justify-center mt-2">
              <label className="mr-2 text-sm font-medium text-gray-700">
                Intensidad:
              </label>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index < producto.intensity ? "bg-black" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
            </div>

            {/* Botón de añadir al carrito */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Evita que el clic en el botón también active la redirección
                handleAddToCart(producto);
              }}
              className="mt-2 px-4 py-2 bg-black text-white rounded-lg"
            >
              Añadir al carrito
            </button>
          </div>
        </Skeleton>
      ))}
    </div>
  );
};

export default VelasGrid;
