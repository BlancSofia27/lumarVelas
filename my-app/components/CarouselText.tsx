"use client";
import React, { useEffect, useRef } from "react";

const messages = [
  "Retiro sin cargo en tiendas exclusivas",
  "|",
  "3 cuotas sin interés",
  "|",
  "Envíos gratuitos para compras mayores a $60.000",
  "|",
];

const CarouselText: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      let startPosition = 0;

      const scroll = () => {
        startPosition += 1;
        if (startPosition >= scrollElement.scrollWidth / 2) {
          startPosition = 0; // Reinicia cuando llega al final de la animación
        }
        scrollElement.style.transform = `translateX(-${startPosition}px)`;
        requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);
    }
  }, []);

  return (
    <div className="h-8 w-full bg-black overflow-hidden relative">
      <div
        ref={scrollRef}
        className="flex items-center whitespace-nowrap text-white text-lg gap-8"
        style={{
          width: "max-content", // Asegura que todo se adapte al contenido
        }}
      >
        {/* Mensajes duplicados para efecto continuo */}
        {messages.concat(messages).map((message, index) => (
          <span key={index} className="px-4">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CarouselText;
