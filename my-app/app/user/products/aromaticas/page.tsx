"use client";
import { motion } from "framer-motion"; // Importamos motion
import VelasGrid from "@/components/products";

const AromaticasPage = () => {
  

  return (
    <div className="text-white">
      <div className="bg-verde h-[130px] w-full"></div>

      {/* Sección con animación de entrada utilizando Framer Motion */}
      <motion.section
        className="text-center py-12 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://bohemiavelas.com.ar/wp-content/uploads/2017/09/vela-natural-encabezado-1b.jpg')",
          backgroundPosition: "20% bottom", // Ajusta la imagen al fondo
        }}
        initial={{ opacity: 0 }} // Empieza invisible
        animate={{ opacity: 1 }} // Termina visible
        transition={{ duration: 1 }} // Duración de la animación
      >
        <motion.h1
          className="text-4xl font-bold"
          initial={{ y: 20, opacity: 0 }} // Empieza desplazado hacia abajo
          animate={{ y: 0, opacity: 1 }} // Termina en su posición original
          transition={{ duration: 1 }}
        >
          Velas Aromáticas
        </motion.h1>
        <motion.p
          className="mt-2 text-lg"
          initial={{ opacity: 0 }} // Empieza invisible
          animate={{ opacity: 1 }} // Termina visible
          transition={{ duration: 1, delay: 0.5 }} // Retraso para animación
        >
          Para decorar en ocasiones especiales y eventos.
        </motion.p>
      </motion.section>

      {/* Grid de Velas */}
      <motion.div
        className=""
        initial={{ opacity: 0 }} // Empieza invisible
        animate={{ opacity: 1 }} // Termina visible
        transition={{ duration: 1, delay: 1 }} // Retraso para el grid
      >
        <VelasGrid filters={{ categoria: "Aromaticas" }} />
      </motion.div>
    </div>
  );
};

export default AromaticasPage;
