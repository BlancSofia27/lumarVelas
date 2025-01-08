"use client";

import Image from "next/image";
import Link from "next/link";

const AdminSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-48 bg-white text-gray-800 shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-40`}
    >
      

      {/* Logo */}
      <div className="p-4 border-b flex justify-center">
        <Image
          src="/lumarCo.png"
          alt="lumar.co velas artesanales"
          width={150}
          height={75}
          priority
        />
      </div>

      {/* Enlaces de navegación */}
      <nav className="p-4 space-y-4">
        <Link href="/adminPanel/pedidos" legacyBehavior>
          <a className="block text-gray-600 hover:text-gray-900">Pedidos</a>
        </Link>
        <Link href="/adminPanel/productos" legacyBehavior>
          <a className="block text-gray-600 hover:text-gray-900">Stock</a>
        </Link>
        <Link href="/adminPanel/fragancias" legacyBehavior>
          <a className="block text-gray-600 hover:text-gray-900">Fragancias</a>
        </Link>
        <Link href="/adminPanel/estadisticas" legacyBehavior>
          <a className="block text-gray-600 hover:text-gray-900">Estadísticas</a>
        </Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
