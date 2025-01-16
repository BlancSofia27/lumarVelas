import VelasGrid from "@/components/VelasGrid"

const Products = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-black h-[60px] sm:h-[60px] lg:h-[100px] xl:h-[100px] p-3 lg:py-7 lg:px-16">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-left">
          Toda nuestra colección hecha a mano
        </h3>
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal text-center lg:text-left">
          COLECCIÓN TENNESSEE
        </h1>
      </div>
      <VelasGrid/>
    </div>
  )
}

export default Products
