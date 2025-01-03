"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store"; // Asegúrate de importar correctamente el tipo RootState
import Image from "next/image";
import { useState } from "react";

const CheckoutPage = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Procesando el pedido con:", formData, items);
    // Aquí puedes implementar la lógica para finalizar la compra, como conectarse a una pasarela de pago
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Finalizar Compra
        </h1>
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Resumen de la Compra */}
          <div>
            <h2 className="text-xl font-medium text-gray-700 mb-4">
              Resumen de la Compra
            </h2>
            <div className="space-y-4">
              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="flex justify-between py-2 border-b">
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500">x{item.quantity}</p>
                      </div>
                    </div>
                    <span>${item.price * item.quantity}</span>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No hay artículos en tu carrito.</p>
              )}
              <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between text-gray-800 font-semibold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          </div>

          {/* Formulario de Información del Cliente */}
          <div>
            <h2 className="text-xl font-medium text-gray-700 mb-4">
              Información del Cliente
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@example.com"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Dirección
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Calle y número"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Ciudad
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Ciudad"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Código Postal
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="12345"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-lg shadow-md hover:bg-purple-700 transition"
              >
                Realizar Pago
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
