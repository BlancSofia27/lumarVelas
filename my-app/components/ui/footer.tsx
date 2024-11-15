import Link from "next/link";
import logo from "../../public/lumarWhite.png"
import Image from "next/image"
import { Separator } from "./separator";

const dataFooter = [
  {
    id: 1,
    name: "Productos",
    link: "/productos",
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
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-gray-500 bg-gray-100">
        <div className="flex flex-row sm:items-center sm:justify-between">
          <Image
            src={logo} // Imagen actual
            alt="luma.co logo"
            className=" w-32" // Asegura que la imagen cubra el contenedor
          />
          <ul className="">
            {dataFooter.map((data)=>(
                <li key={data.id}>
                    <Link href={data.link} className="hover: underline m-4">{data.name} </Link>
                </li>
            ))}
          </ul>
          <Image
            src='https://thecandleshop.com.ar/cdn/shop/files/Logos_Mesa_de_trabajo_1_copia_4.jpg?v=1714071004' // Imagen actual
            alt="luma.co logo"
            className=" " // Asegura que la imagen cubra el contenedor
            width={40}
            height={40}
          />
           <Image
            src='https://thecandleshop.com.ar/cdn/shop/files/Logos_Mesa_de_trabajo_1_copia_4.jpg?v=1714071004' // Imagen actual
            alt="luma.co logo"
            className=" " // Asegura que la imagen cubra el contenedor
            width={40}
            height={40}
          />
        </div>
        <Separator className="my-6 border-gray-600 sm:mx-auto "/>
        <span>
            &copy;2024
            <Link href="#">Lumar Velas.CO</Link>Todos los derechos reservados.
        </span>
      </div>
    </footer>
  )
}
export default Footer
