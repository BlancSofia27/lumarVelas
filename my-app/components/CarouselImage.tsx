"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

const CarouselImage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      let startPosition = 0;

      const scroll = () => {
        startPosition += 1; // Velocidad del desplazamiento
        if (startPosition >= scrollElement.scrollWidth / 2) {
          startPosition = 0; // Reinicia al final del desplazamiento
        }
        scrollElement.style.transform = `translateX(-${startPosition}px)`;
        requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);
    }
  }, []);

  return (
    <div className="w-full h-auto bg-verde overflow-hidden relative">
      <div
        ref={scrollRef}
        className="flex items-center whitespace-nowrap"
        style={{
          width: "max-content", // Asegura que el contenido se ajuste al tamaño de las imágenes repetidas
        }}
      >
        {/* Repetir la imagen varias veces para el efecto infinito */}
        {[...Array(10)].map((_, i) => (
          <Image
            key={i}
            src="/lumarClub.png" // Ruta de la imagen
            alt="Lumar Club"
            className="w-[200px] h-full object-cover" // Imagen de 300px de ancho y ajustada al contenedor
            width={200} // Ancho de cada imagen
            height={200} // Altura de cada imagen
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselImage;
