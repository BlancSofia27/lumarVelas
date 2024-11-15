"use client";
import velas from "@/app/velas.json";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Vela } from "@/types/product";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/store/cartSlice";
import { toast } from "react-toastify"; // Asegúrate de instalar react-toastify
import { useRouter } from "next/navigation"; // Importar useRouter para la redirección

function VelasGrid() {
  const dispatch = useDispatch();
  const router = useRouter(); // Inicializamos el hook de enrutamiento

  const handleAddToCart = (vela: Vela) => {
    // Aquí agregamos la propiedad quantity con valor inicial de 1
    dispatch(addItemToCart({
      id: vela.id,
      name: vela.nombre,
      price: vela.precio,
      img: vela.imagen,
      quantity: 1, // Inicializamos la cantidad en 1
    }));
    toast.success(`${vela.nombre} añadido al carrito`);
  };

  const handleCardClick = (id: string) => {
    // Redirige a la página de detalles del producto
    router.push(`/products/${id}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {velas.map((vela: Vela) => (
        <Skeleton key={vela.id} className="p-4" title={vela.nombre}>
          <div 
            className="flex flex-col items-center cursor-pointer" 
            onClick={() => handleCardClick(vela.id)} // Redirige al hacer clic
          >
            <Image
              src={vela.imagen}
              alt={vela.nombre}
              width={96}
              height={96}
              className="h-24 w-24 rounded-md object-cover"
            />
            <h3 className="mt-2 text-lg font-semibold">{vela.nombre}</h3>
            <p className="text-sm text-muted-foreground">{vela.descripcion}</p>
            <span className="text-md font-bold">${vela.precio}</span>
            <span className="text-sm mt-1">{vela.categoria}</span>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Evita que el clic en el botón también active la redirección
                handleAddToCart(vela);
              }}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Añadir al carrito
            </button>
          </div>
        </Skeleton>
      ))}
    </div>
  );
}

export default VelasGrid;
