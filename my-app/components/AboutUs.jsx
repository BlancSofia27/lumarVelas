"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  // Estado para manejar la imagen activa
  const [currentImage, setCurrentImage] = useState(0);

  // Array de imágenes para el carrusel
  const images = [
    "/nosotrosimg/DSC_0895.webp",
    "/nosotrosimg/DSC_1120.webp",
    "/nosotrosimg/DSC_0936.webp",
    "/nosotrosimg/DSC_1107.webp"
  ];

  // Función para cambiar a la siguiente imagen
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Cambiar imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4600);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Sección con la imagen de fondo que cambia automáticamente */}
      <section className="relative text-gray-600 body-font">
        <div className="absolute inset-0">
          <motion.div
            key={images[currentImage]} // Establecer la clave para animar cada cambio de imagen
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={images[currentImage]}
              alt="Imagen de fondo"
              fill
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay oscuro */}
        </div>

        {/* Contenido */}
        <div className="container relative mx-auto flex px-5 pt-36 pb-24 md:flex-row flex-col items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Somos una compañía que produce velas aromáticas sofisticadas con el objetivo de transformar ambientes.
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Buscamos brindar soluciones tecnológicas con especial enfoque en nuestros clientes, combinando tecnología y materia prima para ofrecer un producto de calidad con un servicio excepcional.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
