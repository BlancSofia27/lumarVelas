import Link from "next/link";
import logo from "../../public/lumarBlack.png"
import Image from "next/image"
import { Separator } from "./separator";


const dataFooter = [
  {
    id: 1,
    name: "Productos",
    link: "/products",
  },
  {
    id: 2,
    name: "Sobre Nosotros",
    link: "/nosotros",
  },
  {
    id: 3,
    name: "Contacto",
    link: "/contacto",
  },
  {
    id: 4,
    name: "Galeria",
    link: "/galeria",
  },
]

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-8 text-gray-500 ">
        <div className="flex flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
          <Image
            src={logo} // Imagen actual
            alt="luma.co logo"
            className=" w-[200px]" // Asegura que la imagen cubra el contenedor
          />
          <div className="flex flex-row p-2">
          <Image
            src='https://cdn-icons-png.flaticon.com/128/1384/1384015.png' // Imagen actual
            alt="instagram"
            className=" p-2" // Asegura que la imagen cubra el contenedor
            width={40}
            height={40}
          />
           <Image
            src='https://cdn-icons-png.flaticon.com/128/4401/4401403.png' // Imagen actual
            alt="facebook"
            className="p-2 " // Asegura que la imagen cubra el contenedor
            width={40}
            height={40}
          />
          <Image
            src='https://cdn-icons-png.flaticon.com/128/4494/4494467.png' // Imagen actual
            alt="youtube"
            className="p-2 " // Asegura que la imagen cubra el contenedor
            width={40}
            height={40}
          />
          <Image
            src='https://cdn-icons-png.flaticon.com/128/4401/4401420.png' // Imagen actual
            alt="pinterest"
            className="p-2 " // Asegura que la imagen cubra el contenedor
            width={40}
            height={40}
          />

          </div>
          </div>
          <ul className="">
            {dataFooter.map((data)=>(
                <li key={data.id}>
                    <Link href={data.link} className="hover: underline m-4">{data.name} </Link>
                </li>
            ))}
          </ul>
          <div className="flex flex-row p-2">
          <Image
            src='https://thecandleshop.com.ar/cdn/shop/files/Logos_Mesa_de_trabajo_1_copia_4.jpg?v=1714071004' // Imagen actual
            alt="data fiscal"
            className=" " // Asegura que la imagen cubra el contenedor
            width={40}
            height={40}
          />
          <Image
            src='https://thecandleshop.com.ar/cdn/shop/files/Logos_Mesa_de_trabajo_1_copia_3.jpg?v=1714070956' // Imagen actual
            alt="empresa certificada B"
            className=" " // Asegura que la imagen cubra el contenedor
            width={40}
            height={40}
          />
          </div>
        </div>
        <Separator className="my-6 border-gray-600 sm:mx-auto "/>
        <span className="text-sm">
            &copy;2024
            <Link href="#"> Lumar Velas.CO - </Link>TODOS LOS DERECHOS RESERVADOS. DESIGNED & DEVELOPED BY CLEAR BUNNY | E-COMMERCE EXPERTS
        </span>
      </div>
    </footer>
  )
}
export default Footer
