"use client";
import Image from "next/image";

import { FC } from "react";
import { motion } from "framer-motion"; // Importamos motion para las animaciones
import { PaintBucket, Pipette } from "lucide-react";

const Info: FC = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full h-auto justify-center items-center bg-gris text-black p-4 space-y-4 sm:space-y-0 sm:space-x-4">
      {/* Primer Div Animado */}
      <motion.div
        className="flex items-center w-full "
        initial={{ x: -200, opacity: 0 }} // Comienza a la izquierda fuera de la pantalla
        animate={{ x: 0, opacity: 1 }} // Se mueve a su posición y se vuelve visible
        transition={{ duration: 1, delay: 1 }} // Retraso de 1 segundo
      >
        <Pipette size={20} className="w-24 h-24 p-4" />
        <div className="flex flex-col">
          <h2 className="font-bold">Calidad de los aromas</h2>
          <p className="text-justify px-2">
            Fragancias de alta calidad que llenan tu espacio con aromas duraderos.
          </p>
        </div>
      </motion.div>

      {/* Segundo Div Animado */}
      <motion.div
        className="flex items-center w-full "
        initial={{ x: -200, opacity: 0 }} // Comienza a la izquierda fuera de la pantalla
        animate={{ x: 0, opacity: 1 }} // Se mueve a su posición y se vuelve visible
        transition={{ duration: 1, delay: 1.2 }} // Retraso de 1.2 segundos
      >
        <PaintBucket size={20} className="w-28 h-28 p-4" />
        <div className="flex flex-col">
          <h2 className="font-bold">Proceso de creación</h2>
          <p className="text-justify px-2">
            Cada vela es elaborada a mano con cuidado y dedicación para lograr su durabilidad.
          </p>
        </div>
      </motion.div>

      {/* Tercer Div Animado */}
      <motion.div
        className="flex items-center w-full "
        initial={{ x: -200, opacity: 0 }} // Comienza a la izquierda fuera de la pantalla
        animate={{ x: 0, opacity: 1 }} // Se mueve a su posición y se vuelve visible
        transition={{ duration: 1, delay: 1.4 }} // Retraso de 1.4 segundos
      >
        <Image src="./iconLeaf.png" alt="Leaf Icon" className="w-20 h-20 p-4 "  width={20} height={20}/>
        <div className="flex flex-col">
          <h2 className="font-bold">Sustentabilidad</h2>
          <p className="text-justify px-2">
            Usamos materiales eco-amigables en todo el proceso de producción.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
