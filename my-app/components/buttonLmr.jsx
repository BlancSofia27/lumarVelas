import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Auth from "./Auth";
import { supabase } from "../utils/supabaseClient";

export default function JoinButton() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Revisar si el usuario está autenticado al cargar el componente
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };
    checkSession();
  }, []);

  // Alternar el modal de autenticación
  const toggleAuthModal = () => {
    setShowAuthModal((prev) => !prev);
  };

  // Cerrar sesión
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  // Manejar el click en "Lumar Club"
  // const handleLumarClubClick = (e) => {
  //   if (!isAuthenticated) {
  //     e.preventDefault(); // Evitar la redirección
  //     toggleAuthModal();
  //   }
  // };

  return (
    <div className="flex items-center space-x-4">
      {/* Botón Lumar Club */}
      <Link href="/user/lumarclub" legacyBehavior passHref>
        <button className="btn" >
          <Image
            src="/lumarClub.png"
            alt="lumar.co velas artesanales"
            width={50}
            height={50}
            className="btn-text-one transition-all duration-300 p-6"
          />
          <span className="btn-text-two">Quiero unirme!</span>
        </button>
      </Link>

      {/* Botón Cerrar sesión (si autenticado) */}
      {isAuthenticated && (
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={handleSignOut}
        >
          Cerrar sesión
        </button>
      )}

      {/* Modal de autenticación */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] max-w-lg relative">
            {/* Botón de cerrar modal */}
            <button
              onClick={toggleAuthModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            {/* Componente de autenticación */}
            <Auth />
          </div>
        </div>
      )}
    </div>
  );
}
