"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart } from "lucide-react";
// import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation"; // Importa el hook useRouter
// import { addItemToCart } from "@/store/cartSlice";
// import { toast } from "react-toastify";
import { supabase } from "../utils/supabaseClient";

const VelasGrid = ({ filters = {} }) => {
  const [products, setProducts] = useState([]);
  // const dispatch = useDispatch();
  const router = useRouter(); // Inicializa el router

  // Función para cargar los productos desde Supabase
  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
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

  // const handleAddToCart = (producto) => {
  //   dispatch(
  //     addItemToCart({
  //       id: producto.id,
  //       name: producto.name,
  //       price: producto.price,
  //       img: producto.image_url,
  //       quantity: 1,
  //     })
  //   );
  //   toast.success(`${producto.name} añadido al carrito`);
  // };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-zinc-900 py-4">
      {filteredProducts.map((producto) => (
        <Skeleton
          key={producto.id}
          className="bg-white"
          title={producto.name}
          onClick={() => router.push(`/user/products/${producto.id}`)} // Redirige al detalle
        >
          <div className="relative flex flex-col items-center cursor-pointer">
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
                height={600}
                className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-md object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src={producto.image1_url}
                alt={producto.name}
                width={400}
                height={600}
                className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-md object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Texto centrado */}
            <h3 className="mt-4 text-lg font-semibold text-center">
              {producto.name}
            </h3>
            <p className="text-sm text-center">{producto.description}</p>
            <span className="text-md font-bold text-center">
              ${producto.price}
            </span>

           

            
          </div>
        </Skeleton>
      ))}
    </div>
  );
};

export default VelasGrid;
