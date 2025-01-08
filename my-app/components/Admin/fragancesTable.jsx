"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient"; // Importa el cliente de Supabase
import Swal from "sweetalert2"; // Importa SweetAlert2

const FraganceTable = () => {
  const [Fragances, setFragances] = useState([]); // Para almacenar las fragancias
  const [loading, setLoading] = useState(true); // Para mostrar un estado de carga

  // Cargar las fragancias desde Supabase
  const fetchFragances = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("fragances").select("*"); // Reemplaza 'Fragances' con el nombre de tu tabla

      if (error) {
        throw error;
      }

      setFragances(data); // Guarda las fragancias en el estado
    } catch (error) {
      console.error("Error al obtener las fragancias:", error);
    } finally {
      setLoading(false);
    }
  };

  // Cargar las fragancias al montar el componente
  useEffect(() => {
    fetchFragances();
  }, []);

  // Función de eliminación
  const handleDelete = async (FraganceId) => {
    try {
      // Confirmar eliminación usando SweetAlert2
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "¡Este fragancia se eliminará permanentemente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        // Eliminar la fragancia de Supabase
        const { error } = await supabase.from("Fragances").delete().eq("id", FraganceId);

        if (error) {
          throw error;
        }

        // Refrescar las fragancias después de eliminar
        Swal.fire("¡Eliminado!", "La fragancia ha sido eliminada.", "success");
        fetchFragances(); // Volver a cargar las fragancias después de la eliminación
      }
    } catch (error) {
      console.error("Error al eliminar la fragancia:", error);
      Swal.fire("Error", "Hubo un problema al eliminar la fragancia.", "error");
    }
  };

  return (
    <div className="p-6 mt-4">

      <div className="mt-6 overflow-x-auto">
        {/* Tabla */}
        <div className="w-full border border-gray-300 rounded-lg">
          <div className="flex bg-gray-100 p-3">
            <div className="w-2/6 font-semibold text-center">Nombre</div>
            <div className="w-2/6 font-semibold text-center">Descripción</div>
            <div className="w-1/6 font-semibold text-center">Intensidad</div>
            <div className="w-1/6 font-semibold text-center">Color</div>
            <div className="w-1/6 font-semibold text-center">Acciones</div>
          </div>

          {/* Mapeo de Fraganceos */}
          {loading ? (
            <div className="flex justify-center items-center py-6">
              <span>Cargando...</span>
            </div>
          ) : (
            Fragances.map((Fragance) => (
              <div
                key={Fragance.id}
                className="flex items-center border-t border-gray-200"
              >
                <div className="w-2/6 text-center">{Fragance.name}</div>
                <div className="w-2/6 text-center">{Fragance.description}</div>
                <div className="w-1/6 text-center">{Fragance.intensity}</div>
                <div className="w-1/6 text-center">
                  {/* Mostrar color como un círculo */}
                  <div
                    className="w-8 h-8 rounded-full mx-auto"
                    style={{ backgroundColor: Fragance.color }}
                  ></div>
                </div>

                <div className="w-1/6 text-center">
                  {/* Botón de eliminar */}
                  <button
                    onClick={() => handleDelete(Fragance.id)}
                    className="bg-red-500 text-white p-2 rounded-lg ml-2 hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FraganceTable;
