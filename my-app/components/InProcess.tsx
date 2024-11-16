"use client";

import { HardHat } from "lucide-react"; // Ícono de construcción de Lucide

const InProcess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <HardHat className="w-20 h-20 text-yellow-500 mb-6" />
      <h1 className="text-3xl font-bold text-gray-800">
        Página próximamente disponible
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        Estamos trabajando para traerte esta página lo antes posible.
      </p>
    </div>
  );
};

export default InProcess;
