import Image from "next/image";
import heart from "../public/iconHeart.png";
import leaf from "../public/iconLeaf.png";
import aroma from "../public/iconAroma.png";
import { FC } from "react";

const Info: FC = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full h-auto justify-center items-center bg-white text-black p-4 space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="flex items-center w-full sm:w-[360px] h-[200px]">
        <Image src={aroma} alt="Aroma Icon" className="w-20 h-20 p-4" />
        <h2 className="font-bold">Calidad de los aromas</h2>
        <p className="text-justify px-2">
         Nuestras velas handmade están creadas con fragancias de alta calidad que llenan tu espacio con aromas envolventes y duraderos.
        </p>
      </div>
      <div className="flex items-center w-full sm:w-[360px] h-[200px]">
        <Image src={heart} alt="Heart Icon" className="w-20 h-20 p-4" />
        <h2 className="font-bold">Proceso de creación</h2>
        <p className="text-justify px-2">
        Cada vela es elaborada a mano con cuidado y dedicación, utilizando cera natural y mechas de algodón, lo que asegura una combustión limpia y segura.
        </p>
      </div>
      <div className="flex items-center w-full sm:w-[360px] h-[200px]">
        <Image src={leaf} alt="Leaf Icon" className="w-20 h-20 p-4" />
        <h2 className="font-bold">Sustentabilidad</h2>
        <p className="text-justify px-2">
         Nos comprometemos con el medio ambiente, utilizando materiales eco-amigables en todo el proceso de producción.
        </p>
      </div>
    </div>
  );
};

export default Info;
