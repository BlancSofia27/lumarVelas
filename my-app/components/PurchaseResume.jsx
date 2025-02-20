"use client";
import React from "react";
import { useSelector } from "react-redux"; // Asumiendo que usas Redux para manejar el estado global

const PurchaseResume = () => {
  // Accedemos al carrito del estado global
  const cart = useSelector((state) => state.cart.items); // Ajusta según tu slice y estado
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0); // Calculamos el total de la compra

  return (
    <section className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Resumen de la compra</h2>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between p-4 bg-gray-100 rounded-md">
            <div className="flex items-center space-x-4">
              <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.fragance}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span>{item.quantity} x ${item.price.toFixed(2)}</span>
              <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
    </section>
  );
};

export default PurchaseResume;
