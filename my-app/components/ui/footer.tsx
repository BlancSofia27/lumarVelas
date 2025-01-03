import Link from "next/link";
import logo from "../../public/lumarBlackNuevo.png";
import Image from "next/image";
import { Separator } from "./separator";

const dataFooter = [
  {
    id: 1,
    name: "Productos",
    link: "/user/products",
  },
  {
    id: 2,
    name: "Sobre Nosotros",
    link: "/user/sobrenosotros",
  },
];

const Footer = () => {
  return (
    <footer className="mt-4 bg-gray-50">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src={logo}
              alt="lumar velas handmade logo"
              width={200}
              height={100}
              className="mb-4"
            />
            <div className="flex gap-4">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png"
                alt="instagram"
                width={40}
                height={40}
                className="hover:opacity-80"
              />
              <Image
                src="https://cdn-icons-png.flaticon.com/128/4401/4401403.png"
                alt="facebook"
                width={40}
                height={40}
                className="hover:opacity-80"
              />
              <Image
                src="https://cdn-icons-png.flaticon.com/128/4494/4494467.png"
                alt="youtube"
                width={40}
                height={40}
                className="hover:opacity-80"
              />
              <Image
                src="https://cdn-icons-png.flaticon.com/128/4401/4401420.png"
                alt="pinterest"
                width={40}
                height={40}
                className="hover:opacity-80"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="mt-6 sm:mt-0 flex flex-col items-center sm:items-start">
            {dataFooter.map((data) => (
              <li key={data.id} className="mb-2">
                <Link href={data.link} className="hover:underline">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Certification Logos */}
          <div className="flex gap-4 mt-6 sm:mt-0">
            <Image
              src="https://thecandleshop.com.ar/cdn/shop/files/Logos_Mesa_de_trabajo_1_copia_4.jpg?v=1714071004"
              alt="data fiscal"
              width={40}
              height={40}
              className="hover:opacity-80"
            />
            <Image
              src="https://thecandleshop.com.ar/cdn/shop/files/Logos_Mesa_de_trabajo_1_copia_3.jpg?v=1714070956"
              alt="empresa certificada B"
              width={40}
              height={40}
              className="hover:opacity-80"
            />
          </div>
        </div>

        {/* Separator and Footer Info */}
        <Separator className="my-6 border-gray-300 sm:mx-auto" />
        <span className="text-sm text-center block">
          &copy;2024{" "}
          <Link href="#" className="hover:underline">
            Lumar Velas.CO
          </Link>{" "}
          - TODOS LOS DERECHOS RESERVADOS. DESIGNED & DEVELOPED BY CLEAR BUNNY |
          E-COMMERCE EXPERTS
        </span>
      </div>
    </footer>
  );
};

export default Footer;
