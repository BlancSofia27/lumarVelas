import FormProduct from "@/components/Admin/formProduct";


export default function NewProduct() {
    return (
      <>
       <a href="/adminPanel/productos"><button className="p-4 bg-blue-600 hover:bg-blue-700 text-white">Volver a todos los productos</button></a> 
        <FormProduct/>
      </>
    )
  }