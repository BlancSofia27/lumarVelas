"use client";
import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";  // Importa el cliente de Supabase
import Image from "next/image";  // Asegúrate de importar Image correctamente
import Swal from "sweetalert2";  // Importa SweetAlert2
const ProductForm = () => {
  const [name, setName] = useState('');
  const [fragance, setFragance] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);  // Imagen principal
  const [image1, setImage1] = useState(null); // Imagen secundaria
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imagePublicUrl, setImagePublicUrl] = useState(null);
  const [image1PublicUrl, setImage1PublicUrl] = useState(null);
  const [intensity, setIntensity] = useState(1); // Estado para la intensidad

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
  const uploadImageToSupabase = async (file, folder) => {
    try {
      const { data, error } = await supabase.storage
        .from(folder)  // Aquí se usa el nuevo bucket "products"
        .upload(`${Date.now()}-${file.name}`, file);

      if (error) {
        console.error("Error al subir la imagen:", error);
        throw error;
      }

      // Obtener la URL pública del archivo cargado usando el método getPublicUrl
      const publicURL = supabase.storage.from("products").getPublicUrl(data.path);  // Referencia al bucket "products"
      setImagePublicUrl(publicURL.publicURL);  // Actualiza la URL pública de la imagen
      
      return publicURL.data.publicUrl;  // Devuelve la URL pública de la imagen
    } catch (err) {
      console.error("Error al obtener la URL pública:", err);
      throw err;
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !fragance || !price || !image || !image1) {
      setError('Por favor completa todos los campos.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Subir las imágenes a Supabase y obtener las URLs públicas
      const imageUrl = await uploadImageToSupabase(image, 'products');  // Imagen principal
      const image1Url = await uploadImageToSupabase(image1, 'products');  // Imagen secundaria

      setImagePublicUrl(imageUrl);
      setImage1PublicUrl(image1Url);

      // Agregar el console.log para ver los datos que se van a enviar
      console.log({
        name,
        fragance,
        description,
        price,
        imageUrl,
        image1Url,
      });

      // Guardar el producto en la base de datos de Supabase
      const { data, error } = await supabase
        .from("products")
        .insert([{
          name, 
          fragance, 
          description, 
          price, 
          intensity,  // Enviar la intensidad seleccionada
          image_url: imageUrl, 
          image1_url: image1Url 
        }]);

      if (error) {
        throw error;
      }

      // Limpiar el formulario
      setName('');
      setFragance('');
      setDescription('');
      setPrice('');
      setImage(null);
      setImage1(null);
      setIntensity(1);  // Reiniciar la intensidad a su valor inicial

      // Mostrar SweetAlert de éxito
      Swal.fire({
        title: '¡Producto creado con éxito!',
        text: 'El producto ha sido agregado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    } catch (err) {
      setError('Error al crear el producto: ' + err.message);
    } finally {
      setLoading(false);
    }
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

        <div className="mb-4">
          <label htmlFor="fragance" className="block text-sm font-medium text-gray-700">
            Fragancia
          </label>
          <input
            type="text"
            id="fragance"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={fragance}
            onChange={(e) => setFragance(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Precio
          </label>
          <input
            type="number"
            id="price"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="intensity" className="block text-sm font-medium text-gray-700">
            Intensidad (1-5)
          </label>
          <select
            id="intensity"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={intensity}
            onChange={(e) => setIntensity(parseInt(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Imagen del Producto (Principal)
          </label>
          <input
            type="file"
            id="image"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleImageChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image1" className="block text-sm font-medium text-gray-700">
            Imagen del Producto (Secundaria)
          </label>
          <input
            type="file"
            id="image1"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleImage1Change}
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Crear Producto'}
        </button>
      </form>

      {imagePublicUrl && image1PublicUrl && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Imágenes cargadas:</h3>
          <div className="flex space-x-4">
            <Image src={imagePublicUrl} width={100} height={100} alt="Imagen del producto principal" className="w-32 h-32 object-cover" />
            <Image src={image1PublicUrl} width={100} height={100} alt="Imagen del producto secundaria" className="w-32 h-32 object-cover" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductForm;
