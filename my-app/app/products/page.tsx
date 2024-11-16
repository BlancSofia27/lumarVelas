import VelasGrid from "@/components/products";


export default function Products() {
  return (
    <>
    <div className="bg-verde h-[130px] w-full"></div>
    <div className="flex flex-col justify-start text-black  h-[100px] py-7 px-16">
      <h3 className="text-xl">Toda nuestra coleccion hecha a mano</h3>
      <h1 className="text-4xl">HANDMADE COLLECTION</h1>
    </div>
      <VelasGrid/>
    </>
  )
}
  