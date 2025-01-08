import ProductDetail from "@/components/Detail"

export default function Detail({ params }) {
  const { id } = params

  return <ProductDetail productId={id} />
}
