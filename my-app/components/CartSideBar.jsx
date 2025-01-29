"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";

const CartSidebar = ({ isOpen, onClose }) => {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  // Generar el resumen de la compra
  const generateWhatsAppMessage = () => {
    if (items.length === 0) return "El carrito está vacío.";
    let message = "¡Hola! Me gustaría finalizar mi compra:\n\n";
    items.forEach((item) => {
      message += `- ${item.name} x${item.quantity} = $${item.price * item.quantity}\n`;
    });
    message += `\nTotal: $${total}`;
    return encodeURIComponent(message);
  };

  // Número de WhatsApp
  const whatsappNumber = "+543442664988";

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white text-gray-800 shadow-lg transform ${
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
          items.map((item) => (
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
                  <p className="font-medium">{item.fragance}</p>
                  <p className="text-gray-500">x{item.quantity}</p> {/* Cantidad */}
                </div>
              </div>
              <span>${item.price * item.quantity}</span> {/* Precio total por producto */}
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
        <Link href='/api/paymentResume'>
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
};

export default CartSidebar;
