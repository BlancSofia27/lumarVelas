import { supabase } from './supabaseClient';

// Función para subir una imagen al Storage de Supabase
export const uploadImage = async (image, fieldName) => {
  if (!image) {
    throw new Error(`No image provided for field: ${fieldName}`);
  }

  const fileName = `${Date.now()}_${fieldName}_${image.name}`;
  const { data, error } = await supabase.storage
    .from('products')  // Nombre del bucket
    .upload(`images/${fileName}`, image, {
      contentType: image.type,
    });

  if (error) {
    console.error(`Error uploading image (${fieldName}): ${error.message}`);
    throw new Error(`Error uploading image (${fieldName}): ${error.message}`);
  }

  console.log('Upload response:', data);  // Imprime toda la respuesta para ver qué contiene

  // Generar la URL pública directamente después de la carga
  const publicURL = supabase.storage.from('products').getPublicUrl(data.path).publicURL;

  if (!publicURL) {
    console.error('Public URL is null');
    throw new Error(`Error generating public URL for ${fieldName}`);
  }

  console.log('Public URL:', publicURL);  // Verifica la URL pública generada
  return publicURL;
};

// Función para crear un producto en la base de datos
export const createProduct = async (product) => {
  try {
    // Validar que las imágenes estén presentes
    if (!product.image || !product.image1) {
      throw new Error('Both image and image1 are required.');
    }

    // Subir las imágenes y obtener sus URLs públicas
    const [imageUrl, imageUrl1] = await Promise.all([ 
      uploadImage(product.image, 'product_image'),
      uploadImage(product.image1, 'product_image1')
    ]);

    // Verificar que las URLs no sean null
    if (!imageUrl || !imageUrl1) {
      throw new Error('Failed to upload one or both images.');
    }

    console.log('Image URLs:', imageUrl, imageUrl1);  // Verifica las URLs de las imágenes

    // Insertar el producto en la base de datos con las URLs generadas
    const { data, error } = await supabase
      .from('products')  // Nombre de la tabla
      .insert([{
        name: product.name,
        fragance: product.fragance,
        description: product.description || '',
        price: parseFloat(product.price) || null,
        image: imageUrl,  // Guardar la URL de la imagen principal
        image1: imageUrl1,  // Guardar la URL de la segunda imagen
        intensity: parseInt(product.intensity, 10),  // Convertir intensidad a número
      }]);

    if (error) {
      console.error('Error creating product:', error.message);
      throw new Error('Error creating product: ' + error.message);
    }

    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error('Error: ' + error.message);
  }
};
