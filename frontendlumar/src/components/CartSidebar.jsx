import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const CartSidebar = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 bg-blue-500 text-white p-2 rounded"
      >
        {isOpen ? 'Cerrar Carrito' : 'Abrir Carrito'}
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Carrito de Compras</h2>
          <button onClick={toggleSidebar} className="text-gray-500">
            <FaTimes size={24} />
          </button>
        </div>

        <div className="p-4 overflow-y-auto flex-1">
          {cartItems.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center mb-4">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-4 border-t">
          <button onClick={clearCart} className="bg-red-500 text-white w-full p-2 rounded">
            Vaciar Carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
