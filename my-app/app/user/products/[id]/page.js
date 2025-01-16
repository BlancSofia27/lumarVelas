import { supabase } from "../../../../utils/supabaseClient";
import ProductDetail from "../../../../components/Detail";

// Generar los parámetros estáticos para las rutas dinámicas
export async function generateStaticParams() {
  try {
    const { data: products, error } = await supabase.from("products").select("id");

    if (error || !products) {
      console.error("Error al obtener productos:", error);
      return [];
    }

    // Retornar un array de objetos con los parámetros
    return products.map((product) => ({
      id: product.id.toString(), // Asegúrate de que el id sea una cadena
    }));
  } catch (error) {
    console.error("Error al generar parámetros estáticos:", error);
    return [];
  }
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  if (!id) {
    return <div>Error: No se proporcionó un ID válido para el producto.</div>;
  }

  return (
    <div>
      <ProductDetail id={id} />
    </div>
  );
}
