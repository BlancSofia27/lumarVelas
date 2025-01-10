// components/Detail.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/utils/supabaseClient";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/store/cartSlice";
import { toast } from "react-toastify"; // Importamos Toastify

export default function ProductDetail({ id }) {
  const [product, setProduct] = useState(null);
  const [fragances, setFragances] = useState([]);
  const [nextFragances, setNextFragances] = useState([]); // Fragancias proximas
  const [selectedFragance, setSelectedFragance] = useState(null);
  const [selectedNextFragance, setSelectedNextFragance] = useState(null); // Fragancia seleccionada (proximamente)
  const dispatch = useDispatch(); // Para despachar la acción de Redux

  const fetchProduct = async () => {
    if (!id) return;
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setProduct(data);
      fetchFragances(data.fragance);
      fetchNextFragances(data.next_fragance); // Obtener las fragancias proximas
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  };

  const fetchFragances = async (fraganceIds) => {
    try {
      if (!fraganceIds || fraganceIds.length === 0) return;

      const { data, error } = await supabase
        .from("fragances")
        .select("id, name, description, color, intensity")
        .in("id", fraganceIds);

      if (error) throw error;
      setFragances(data);
    } catch (error) {
      console.error("Error al obtener las fragancias:", error);
    }
  };

  const fetchNextFragances = async (nextFraganceIds) => {
    try {
      if (!nextFraganceIds || nextFraganceIds.length === 0) return;

      const { data, error } = await supabase
        .from("fragances")
        .select("id, name, description, color, intensity")
        .in("id", nextFraganceIds);

      if (error) throw error;
      setNextFragances(data);
    } catch (error) {
      console.error("Error al obtener las fragancias proximas:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  // Función para manejar la adición al carrito
  const handleAddToCart = () => {
    if (!product) return;

    // Asegúrate de que la fragancia seleccionada esté en fragances
    if (!selectedFragance && !selectedNextFragance) {
      toast.error("Por favor, selecciona una fragancia disponible."); // Toastify Error
      return;
    }

    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.image_url,
      fragance: selectedFragance.name ? selectedFragance.name : selectedNextFragance.name,
      quantity: 1,
    };
    dispatch(addItemToCart(item)); // Despachamos la acción para agregar el producto al carrito
    toast.success(`${product.name} añadido al carrito`);
  };

  // Función para calcular el porcentaje de descuento
  const calculateDiscountPercentage = () => {
    if (product.old_price && product.old_price > 0) {
      const discount = ((product.old_price - product.price) / product.old_price) * 100;
      return Math.round(discount); // Redondear el porcentaje
    }
    return 0;
  };


  return (
    <>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen del producto */}
                      <div className="w-full relative group">
                        <Image
                          src={product.image_url}
                          alt={product.name}
                          width={400}
                          height={600}
                          className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-md object-cover transition-opacity duration-300 group-hover:opacity-0"
                        />
                        <Image
                          src={product.image1_url}
                          alt={product.name}
                          width={400}
                          height={600}
                          className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-md object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
          
          {/* Detalles del producto */}
          <div>
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

            <p className="text-gray-600 mb-4">{product.description}</p>

            {/* Precio Actual, Precio Anterior (tachado) y Precio Promocional */}
            <div className="mb-3">
              <span className="text-2xl font-semibold text-black mr-1">
                ${product.price}
              </span>

              {/* Precio anterior tachado */}
              {product.old_price && (
                <span className="text-md text-gray-500 line-through">
                  ${product.old_price}
                </span>
              )}

              {/* Mostrar el porcentaje de descuento */}
              {product.old_price && (
                <span className="text-xl text-red-600 ml-2">
                  {calculateDiscountPercentage()}%
                </span>
              )}
            </div>

            {/* Precio Promocional */}
            {product.promotional_price && (
              <div className="text-sm text-green-600 font-semibold">
                <p className="text-lg text-gray-600">
                  ${product.promotional_price} Pagando en efectivo o transferencia
                </p>
              </div>
            )}

            {/* Mostrar fragancias disponibles y proximas en un mismo grid */}
            {fragances.length > 0 || nextFragances.length > 0 ? (
              <div className="mt-2">
                <h2 className="text-xl font-semibold mb-4">Fragancias:</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1">
                  {/* Fragancias disponibles */}
                  {fragances.map((fragance) => (
                    <button
                      key={fragance.id}
                      onClick={() => {
                        setSelectedFragance(fragance);
                        setSelectedNextFragance(null);
                      }}
                      className="flex flex-col items-center justify-center py-2 px-5 rounded-lg border-2 border-gray-300 w-max"
                      style={{ backgroundColor: fragance.color }}
                    >
                      <span className="text-white font-semibold">{fragance.name}</span>
                    </button>
                  ))}
                  {/* Fragancias proximas */}
                  {nextFragances.map((fragance) => (
                    <button
                      key={fragance.id}
                      onClick={() => {
                        setSelectedNextFragance(fragance);
                        setSelectedFragance(null);
                      }}
                      className="flex flex-col items-center justify-center py-2 px-5 rounded-lg border-2 border-gray-300 opacity-70 cursor-not-allowed w-max"
                      style={{ backgroundColor: fragance.color }}
                    >
                      <span className="text-white font-semibold">{fragance.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <button
              onClick={handleAddToCart}
              className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>

      {/* Mostrar la descripción de la fragancia seleccionada (solo si está disponible) */}
      {(selectedFragance || selectedNextFragance) && (
        <>
           <div className="mt-4 p-4 border-t-2 border-gray-300 max-w-xl mx-auto">
         <div className="flex items-center justify-center mb-4">
         <label className="mr-2 text-sm font-medium text-gray-700">
           Intensidad:
         </label>
         <div className="flex gap-1">
           {/* Usar la fragancia seleccionada, ya sea fragance o nextFragance */}
           {(selectedFragance || selectedNextFragance).intensity &&
             Array.from({ length: 5 }).map((_, index) => (
               <span
                 key={index}
                 className={`w-3 h-3 rounded-full ${
                   index < (selectedFragance || selectedNextFragance).intensity
                     ? "bg-black"
                     : "bg-gray-300"
                 }`}></span>
             ))}
         </div>
       </div>

          <h3 className="text-lg font-bold">
            {(selectedFragance || selectedNextFragance).name}
          </h3>
          <p className="text-gray-600">
            {(selectedFragance || selectedNextFragance).description}
          </p>
        </div>

             {/* Texto de "Próximamente disponible" */}
            {selectedNextFragance && (
              <div className="text-center text-sm text-gray-600 font-semibold mb-4">
                Próximamente disponible
              </div>
            )}
        </>
      )}
    </>
  );
}
