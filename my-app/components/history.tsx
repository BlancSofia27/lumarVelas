"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import entreRios from "../public/entreRios.jpg";
import laboratorio from "../public/laboratorio.png";
import shop from "../public/shop.jpg";

const images = [
  {
    src: entreRios,
    text: "Historia de Entre Ríos",
    align: "left",
    style: "style1",
    description: "Entre Ríos es una provincia argentina que cuenta con una rica historia cultural, natural y económica. Desde sus orígenes hasta la actualidad, su gente ha trabajado para construir una región vibrante llena de tradiciones y avances."
  },
  {
    src: laboratorio,
    text: "Laboratorio Lumar.CO",
    align: "right",
    style: "style2",
    description: "Laboratorio Lumar.CO es una empresa dedicada a la innovación en el sector farmacéutico, trabajando incansablemente para ofrecer soluciones de salud de la más alta calidad. La investigación y el desarrollo son pilares fundamentales de su misión."
  },
  {
    src: shop,
    text: "Tienda Lumar.CO",
    align: "left",
    style: "style3",
    description: "La tienda Lumar.CO ofrece productos exclusivos para el cuidado personal, bienestar y salud. Desde cosméticos hasta equipos tecnológicos, la tienda cuenta con una amplia variedad de productos para mejorar la calidad de vida de sus clientes."
  },
];

const History = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-auto">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative w-full h-[350px] overflow-hidden ${image.style}`}
        >
          <Image
            src={image.src}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-1000 ease-out h-[250px]"
            style={{
              transform: `translateY(${scrollY * 0.10}px)`,
            }}
          />
          <div
            className={`absolute inset-y-5 ${image.align === "left" ? "left-10" : "right-10"} w-[600px] h-[200px] flex items-center bg-opacity-50 bg-black`}
          >
            <div
              className={`flex flex-col  justify-center p-4 rounded-lg shadow-lg h-16 w-full transform transition-all duration-700 ease-in-out text-container ${image.style}`}
              style={{
                transform: `translateX(${image.align === "left" ? "-10px" : "10px"})`,
                opacity: scrollY > index * window.innerHeight * 0.7 ? 1 : 0,
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <h1 className="text-2xl font-bold mb-4">{image.text}</h1>
              <p className="text-sm">
                {image.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
