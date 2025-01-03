"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient"; // Importa el cliente de Supabase
import Image from "next/image"; // Si usas Next.js, si no, usa 'img' directamente
import Swal from "sweetalert2"; // Importa SweetAlert2

const ProductTable = () => {
  const [products, setProducts] = useState([]); // Para almacenar los productos
  const [loading, setLoading] = useState(true); // Para mostrar un estado de carga

  // Cargar los productos desde Supabase
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("products").select("*"); // Reemplaza 'products' con el nombre de tu tabla

      if (error) {
        throw error;
      }

      setProducts(data); // Guarda los productos en el estado
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Cargar los productos al montar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  // Función de edición (aquí puedes agregar la lógica para abrir un modal o redirigir)
  // const handleEdit = (productId) => {
  //   alert(`Editar producto con ID: ${productId}`);
  //   // Aquí deberías redirigir a un formulario de edición o abrir un modal
  // };

  // Función de eliminación
  const handleDelete = async (productId) => {
    try {
      // Confirmar eliminación usando SweetAlert2
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "¡Este producto se eliminará permanentemente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        // Eliminar el producto de Supabase
        const { error } = await supabase.from("products").delete().eq("id", productId);

        if (error) {
          throw error;
        }

        // Refrescar los productos después de eliminar
        Swal.fire("¡Eliminado!", "El producto ha sido eliminado.", "success");
        fetchProducts(); // Volver a cargar los productos después de la eliminación
      }
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      Swal.fire("Error", "Hubo un problema al eliminar el producto.", "error");
    }
  };

  return (
    <div className="p-6 mt-4">
      
      <a
        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
        href="newProduct"
      >
        Añadir Nuevo Producto
      </a>

      <div className="mt-6 overflow-x-auto">
        {/* Tabla */}
        <div className="w-full border border-gray-300 rounded-lg">
          <div className="flex bg-gray-100 p-3">
            <div className="w-1/6 font-semibold text-center ml-7">Imagen</div>
            <div className="w-2/6 font-semibold text-center">Producto</div>
            <div className="w-2/6 font-semibold text-center">Descripción</div>
            <div className="w-1/6 font-semibold text-center">Precio</div>
            <div className="w-1/6 font-semibold text-center">Aroma</div>
            <div className="w-1/6 font-semibold text-center">Intensidad</div>
            <div className="w-1/6 font-semibold text-center">Acción</div>
          </div>

          {/* Mapeo de productos */}
          {loading ? (
            <div className="flex justify-center items-center py-6">
              <span>Cargando...</span>
            </div>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="flex items-center border-t border-gray-200"
              >
                <div className="w-1/6">
                  <div className="relative w-[150px] h-[150px]">
                    {/* Imagen por defecto */}
                    <Image
                      src={product.image_url} // Imagen por defecto
                      alt={product.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full transition-opacity duration-600 ease-in-out"
                    />
                    {/* Imagen al hacer hover */}
                    <Image
                      src={product.image1_url} // Imagen al hacer hover
                      alt={product.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-600 ease-in-out"
                    />
                  </div>
                </div>
                <div className="w-2/6 text-center">{product.name}</div>
                <div className="w-2/6 text-center">{product.description}</div>
                <div className="w-1/6 text-center">${product.price}</div>
                <div className="w-1/6 text-center">{product.fragance}</div>
                <div className="w-1/6 text-center">{product.intensity}</div>

                <div className="w-1/6 text-center">
                  {/* <button
                    onClick={() => handleEdit(product.id)}
                    className="bg-verde text-white p-2 rounded-lg hover:bg-yellow-600"
                  >
                    Editar
                  </button> */}
                  {/* Botón de eliminar */}
                  <button
                    onClick={() => handleDelete(product.id)}
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

export default ProductTable;
