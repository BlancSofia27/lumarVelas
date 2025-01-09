// app/products/[id]/page.js (para rutas dinámicas de productos)
import { supabase } from "../../../../utils/supabaseClient"; 
import ProductDetail from "../../../../components/Detail"
export async function generateStaticParams() {
  const { data: products } = await supabase.from('products').select('id');

  // Retornar un array de objetos con los parámetros que quieres usar
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }) {
  const { id } = params;

  return (
    <div>
      <ProductDetail id={id} />
    </div>
  );
}
