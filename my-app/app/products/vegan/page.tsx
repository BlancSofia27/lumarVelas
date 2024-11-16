"use client";
import { motion } from "framer-motion"; // Importamos motion
import VelasGrid from "@/components/products";

const VeganasPage = () => {
  return (
    <div className="text-white">
      <div className="bg-verde h-[130px] w-full"></div>

      {/* Sección con animación de entrada */}
      <motion.section
        className="text-center py-12 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.freewebheaders.com/wp-content/gallery/grass/green-grass-with-daisies-flowers-natural-scenery-background-header.jpg')",
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
          Velas Veganas
        </motion.h1>
        <motion.p
          className="mt-2 text-lg"
          initial={{ opacity: 0 }} // Empieza invisible
          animate={{ opacity: 1 }} // Termina visible
          transition={{ duration: 1, delay: 0.5 }} // Retraso para animación
        >
          Disfruta de velas ecológicas y suaves libres de crueldad.
        </motion.p>
      </motion.section>

      {/* Grid de Velas */}
      <motion.div
        className=""
        initial={{ opacity: 0 }} // Empieza invisible
        animate={{ opacity: 1 }} // Termina visible
        transition={{ duration: 1, delay: 1 }} // Retraso para el grid
      >
        <VelasGrid filters={{ categoria: "Vegan" }} />
      </motion.div>
    </div>
  );
};

export default VeganasPage;
