"use client";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import Swal from "sweetalert2"; // Importa SweetAlert2

const FraganceModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    color: "#000000",
    description: "",
    intensity: 1, // Asegúrate de que el valor inicial sea un número
  });
  const [isLoading, setIsLoading] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si el campo es "intensity", convierte el valor a número
    if (name === "intensity") {
      setFormData({ ...formData, [name]: parseInt(value, 10) }); // Asegurando que se convierta a número
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await supabase
      .from("fragances") // Reemplaza con el nombre de tu tabla en Supabase
      .insert([formData]);

    if (error) {
      console.error("Error saving data:", error.message);
      alert("Error al guardar los datos. Revisa la consola para más detalles.");
    } else {
      // Mostrar SweetAlert de éxito
      Swal.fire({
        title: "¡Fragancia añadida con éxito!",
        text: "La fragancia ha sido añadida correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      setFormData({
        name: "",
        color: "#000000",
        description: "",
        intensity: 1, // Reset intensity back to 1
      });
    }

    setIsLoading(false);
    toggleModal();
  };

  return (
    <div className="flex justify-center items-center ml-2">
      <button
        onClick={toggleModal}
        className="bg-blue-500 text-white rounded hover:bg-blue-600 p-3 transition"
      >
        Crear Fragancia
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Nueva Fragancia</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="color">
                  Color
                </label>
                <input
                  id="color"
                  name="color"
                  type="color"
                  value={formData.color}
                  onChange={handleChange}
                  required
                  className="w-full h-10 p-0 border-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="description">
                  Descripción
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="intensity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Intensidad (1-5)
                </label>
                <select
                  id="intensity"
                  name="intensity"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.intensity} // Aquí estamos asegurando que el valor siempre se sincroniza
                  onChange={handleChange}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-4 py-2 rounded ${
                    isLoading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  } transition`}
                >
                  {isLoading ? "Agregando fragancia..." : "Añadir"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FraganceModal;
