// components/CartSidebar.tsx
"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store"; // Asegúrate de importar correctamente el tipo RootState
import { CartItem } from "@/store/cartSlice"; // Importa el tipo CartItem
import Image from "next/image";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-40`}
    >
      <button onClick={onClose} className="p-4 text-gray-500">
        Cerrar
      </button>
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Carrito de Compras</h2>
      </div>
      <div className="p-4 overflow-y-auto">
        {items.length > 0 ? (
          items.map((item: CartItem) => (
            <div key={item.id} className="flex justify-between py-2 border-b">
              <div className="flex items-center gap-4">
                <Image
                  src={item.img} // Utiliza item.img para la imagen
                  alt={item.name}
                  width={30}
                  height={30}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500">x{item.quantity}</p> {/* Aquí mostramos la cantidad */}
                </div>
              </div>
              <span>${item.price * item.quantity}</span> {/* Aquí multiplicamos el precio por la cantidad */}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">El carrito está vacío</p>
        )}
      </div>
      <div className="p-4 border-t">
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${total}</span>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md mt-4">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
