"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";  // Importa el cliente de Supabase
import Swal from "sweetalert2";  // Importa SweetAlert2

const ProductForm = () => {
  const [name, setName] = useState('');
  const [fragances, setFragances] = useState([]);  // Estado para las fragancias disponibles
  const [selectedFragances, setSelectedFragances] = useState([]);  // Estado para las fragancias seleccionadas
  const [nextFragances, setNextFragances] = useState([]);  // Estado para las fragancias adicionales
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [promotionalPrice, setPromotionalPrice] = useState(''); // Nuevo campo para el precio promocional
  const [oldPrice, setOldPrice] = useState(''); // Nuevo campo para el precio anterior
  const [image, setImage] = useState(null);  // Imagen principal
  const [image1, setImage1] = useState(null); // Imagen secundaria
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imagePublicUrl, setImagePublicUrl] = useState(null); // Estado para la URL pública de la imagen
  const [image1PublicUrl, setImage1PublicUrl] = useState(null); // Estado para la URL pública de la imagen secundaria

  // Cargar fragancias desde la base de datos
  useEffect(() => {
    const fetchFragances = async () => {
      const { data, error } = await supabase.from("fragances").select("*");
      if (error) {
        console.error("Error al cargar las fragancias:", error);
      } else {
        setFragances(data);
      }
    };
    fetchFragances();
  }, []);

  // Función para manejar el cambio de la imagen principal
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Función para manejar el cambio de la imagen secundaria
  const handleImage1Change = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage1(file);
    }
  };

  // Función para subir una imagen a Supabase Storage y obtener la URL pública
  const uploadImageToSupabase = async (file, products) => {
    try {
      if (!file) throw new Error("No se seleccionó un archivo para subir.");

      const fileName = `${Date.now()}_${file.name}`;

      // Subir el archivo
      const { data, error } = await supabase.storage
        .from(products)
        .upload(fileName, file);

      if (error) {
        console.error("Error al subir la imagen:", error.message);
        throw new Error("Error al subir la imagen a Supabase.");
      }

//       const publicURL = supabase.storage.from("cover").getPublicUrl(file.name);
// setImagePublicUrl(publicURL)
      // Obtener la URL pública
      const URL = supabase.storage
        .from("products")
        .getPublicUrl(data.path);
      console.log(data.path)
      const publicUrlfinal = URL.data.publicUrl;
      console.log(URL)
      console.log(publicUrlfinal)
      return publicUrlfinal;
    } catch (err) {
      console.error("Error en uploadImageToSupabase:", err.message);
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !selectedFragances.length || !price || !image || !image1) {
      setError('Por favor completa todos los campos.');
      return;
    }
  
    setLoading(true);
    setError('');
  
    try {
      // Subir las imágenes y obtener las URLs públicas
      const imageUrl = await uploadImageToSupabase(image, 'products');
      const image1Url = await uploadImageToSupabase(image1, 'products');
  
      if (!imageUrl || !image1Url) {
        throw new Error("Error al obtener las URLs de las imágenes.");
      }
  
      // Establecer las URLs públicas en el estado
      setImagePublicUrl(imageUrl);
      setImage1PublicUrl(image1Url);
  
      // Insertar el producto en la base de datos
      const { error } = await supabase
        .from("products")
        .insert([
          {
            name,
            fragance:selectedFragances, // Formatear como cadena JSON
            next_fragance: nextFragances, // Formatear como cadena JSON
            description,
            price,
            promotional_price: promotionalPrice || null,
            old_price: oldPrice || null,
            image_url: imagePublicUrl,  // Usar la URL pública desde el estado
            image1_url: image1PublicUrl, // Usar la URL pública de la imagen secundaria
          },
        ]);

        console.log(selectedFragances,nextFragances)
  
      if (error) {
        throw error;
      }
  
      // Limpiar el formulario después de enviar
      setName('');
      setSelectedFragances([]);
      setNextFragances([]);
      setDescription('');
      setPrice('');
      setPromotionalPrice('');
      setOldPrice('');
      setImage(null);
      setImage1(null);
  
      Swal.fire({
        title: '¡Producto creado con éxito!',
        text: 'El producto ha sido agregado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    } catch (err) {
      console.error("Error al crear el producto:", err.message);
      setError('Error al crear el producto: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Función para manejar la selección y deselección de fragancias
  const handleSelectFragance = (id) => {
    setSelectedFragances((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((fraganceId) => fraganceId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  // Función para manejar la selección y deselección de fragancias adicionales
  const handleSelectNextFragance = (id) => {
    setNextFragances((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((fraganceId) => fraganceId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Crear Producto</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre del Producto
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Fragancias seleccionadas */}
        <div className="mb-4">
          <label htmlFor="fragance" className="block text-sm font-medium text-gray-700">
            Fragancias Disponibles
          </label>
          <div className="grid grid-cols-3 gap-2">
            {fragances.map((fragance) => (
              <button
                type="button"
                key={fragance.id}
                onClick={() => handleSelectFragance(fragance.id)}
                className={`p-2 rounded-lg text-white ${selectedFragances.includes(fragance.id) ? 'bg-blue-500 border-2 border-green-500' : 'bg-gray-500'}`}
                style={{ backgroundColor: fragance.color }}
              >
                {fragance.name}
              </button>
            ))}
          </div>
        </div>

        {/* Fragancias adicionales */}
        <div className="mb-4">
          <label htmlFor="nextFragance" className="block text-sm font-medium text-gray-700">
            Fragancias Proximamente Disponibles
          </label>
          <div className="grid grid-cols-3 gap-2">
            {fragances.map((fragance) => (
              <button
                type="button"
                key={fragance.id}
                onClick={() => handleSelectNextFragance(fragance.id)}
                className={`p-2 rounded-lg text-white ${nextFragances.includes(fragance.id) ? 'bg-green-500 border-2 border-green-500' : 'bg-gray-500'}`}
                style={{ backgroundColor: fragance.color }}
              >
                {fragance.name}
              </button>
            ))}
          </div>
        </div>

        {/* Precio */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Precio Actual
          </label>
          <input
            type="number"
            id="price"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* Precio promocional */}
        <div className="mb-4">
          <label htmlFor="promotionalPrice" className="block text-sm font-medium text-gray-700">
            Precio Promocional con efectivo o tranferencia
          </label>
          <input
            type="number"
            id="promotionalPrice"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={promotionalPrice}
            onChange={(e) => setPromotionalPrice(e.target.value)}
          />
        </div>

        {/* Precio anterior */}
        <div className="mb-4">
          <label htmlFor="oldPrice" className="block text-sm font-medium text-gray-700">
            Precio Anterior
          </label>
          <input
            type="number"
            id="oldPrice"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
          />
        </div>

        {/* Imagen principal */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Imagen Principal
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Imagen secundaria */}
        <div className="mb-4">
          <label htmlFor="image1" className="block text-sm font-medium text-gray-700">
            Imagen Secundaria
          </label>
          <input
            type="file"
            id="image1"
            onChange={handleImage1Change}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg text-white ${loading ? 'bg-gray-500' : 'bg-blue-500'}`}
            disabled={loading}
          >
            {loading ? 'Creando Producto...' : 'Crear Producto'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
