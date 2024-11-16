"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import entreRios from "../public/entreRios.jpg";
import laboratorio from "../public/laboratorio.png";
import shop from "../public/shop.jpg";

const images = [
  {
    src: entreRios,
    text: "Historia de Entre Ríos",
    align: "left",
    style: "style1",
    description:
      "Entre Ríos es una provincia argentina rica en historia, cultura y belleza natural. En nuestra región, las tradiciones se fusionan con la modernidad, dando lugar a un ambiente único donde las velas hechas a mano capturan la esencia de este lugar tan especial.",
  },
  {
    src: laboratorio,
    text: "Laboratorio de Velas Handmade",
    align: "right",
    style: "style2",
    description:
      "Nuestro laboratorio es un espacio dedicado a la creación de velas artesanales de la más alta calidad. Cada vela es elaborada a mano, utilizando ingredientes naturales seleccionados cuidadosamente para ofrecer productos que no solo iluminan, sino que también aromatizan y decoran de manera única.",
  },
  {
    src: shop,
    text: "Tienda de Velas Handmade",
    align: "left",
    style: "style3",
    description:
      "En nuestra tienda encontrarás una amplia variedad de velas artesanales, elaboradas con amor y dedicación en Entre Ríos. Ofrecemos productos que no solo aportan calidez y luz a tu hogar, sino que también reflejan nuestra pasión por el arte de crear velas sostenibles y ecológicas.",
  },
];

const History = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Solo se ejecuta en el cliente
    };

    if (typeof window !== "undefined") {
      // Agrega el listener en el cliente
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        // Limpia el listener
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="w-full h-auto">
      {images.map((image, index) => {
        const scrollPercentage =
          (scrollY - window.innerHeight * (index - 0.3)) / window.innerHeight;
        const yOffset = Math.min(200, Math.max(-200, scrollPercentage * 200));

        return (
          <div
            key={index}
            className={`relative w-full mt-[100px] h-[350px] overflow-hidden ${image.style}`}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: { duration: 0.6, ease: "easeOut" },
              }}
            >
              <Image
                src={image.src}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-1000 ease-out h-[250px]"
                style={{
                  transform: `translateY(${yOffset * 0.1}px)`,
                }}
              />
            </motion.div>
            <motion.div
              className={`absolute inset-y-5 ${
                image.align === "left" ? "left-10" : "right-10"
              } w-[600px] h-[200px] flex items-center bg-opacity-45 bg-gris rounded-sm`}
              initial={{ opacity: 0, x: image.align === "left" ? -100 : 100, y: 30 }}
              animate={{
                opacity: 1,
                x: 0,
                y: yOffset,
              }}
              transition={{
                opacity: { duration: 0.5, ease: "easeOut" },
                x: { type: "spring", stiffness: 50, damping: 25 },
                y: { type: "spring", stiffness: 50, damping: 25 },
              }}
            >
              <div className="flex flex-col justify-center p-4 rounded-lg shadow-lg h-16 w-full text-container">
                <motion.h1
                  className="text-2xl font-bold mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    opacity: { duration: 0.5 },
                    scale: { type: "spring", stiffness: 100, damping: 20 },
                    delay: index * 0.6,
                  }}
                >
                  {image.text}
                </motion.h1>
                <motion.p
                  className="text-md font-semibold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    opacity: { duration: 0.5 },
                    y: { type: "spring", stiffness: 30, damping: 30 },
                    delay: index * 0.2,
                  }}
                >
                  {image.description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
