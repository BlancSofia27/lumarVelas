"use client";

import velas from "@/app/velas.json";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Vela } from "@/types/product";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/store/cartSlice";
import { toast } from "react-toastify";

import { Heart } from "lucide-react"; // Ícono de corazón de Lucide

interface VelasGridProps {
  filters?: {
    categoria?: string;
    nombre?: string;
  };
}

const VelasGrid: React.FC<VelasGridProps> = ({ filters = {} }) => {
  const dispatch = useDispatch();
  

  // Filtrar velas con base en los parámetros recibidos
  const filteredVelas = velas.filter((vela) => {
    let isMatch = true;
    if (filters.categoria) {
      isMatch = isMatch && vela.categoria === filters.categoria;
    }
    if (filters.nombre) {
      isMatch = isMatch && vela.nombre.toLowerCase().includes(filters.nombre.toLowerCase());
    }
    return isMatch;
  });

  const handleAddToCart = (vela: Vela) => {
    dispatch(
      addItemToCart({
        id: vela.id,
        name: vela.nombre,
        price: vela.precio,
        img: vela.imagen,
        quantity: 1, // Inicializa la cantidad en 1
      })
    );
    toast.success(`${vela.nombre} añadido al carrito`);
  };

  // const handleCardClick = (id: string) => {
  //   router.push(`/products/${id}`);
  // };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredVelas.map((vela: Vela) => (
        <Skeleton key={vela.id} className="bg-white" title={vela.nombre}>
          <div className="relative flex flex-col items-center cursor-pointer">
            {/* Ícono de corazón con hover */}
            <div className="absolute top-2 right-2 p-1 rounded-full">
              <Heart className="text-black w-6 h-6 hover:fill-black hover:text-black transition-all" />
            </div>

            {/* Imagen del producto */}
            <Image
              src={vela.imagen}
              alt={vela.nombre}
              width={400}
              height={450}
              className="w-full rounded-md object-cover"
              // onClick={() => handleCardClick(vela.id)} // Redirige al hacer clic en la imagen
            />

            {/* Texto centrado */}
            <h3 className="mt-4 text-lg font-semibold text-center">{vela.nombre}</h3>
            <p className="text-sm text-muted-foreground text-center">{vela.descripcion}</p>
            <span className="text-md font-bold text-center">${vela.precio}</span>

            {/* Botón de añadir al carrito */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Evita que el clic en el botón también active la redirección
                handleAddToCart(vela);
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
