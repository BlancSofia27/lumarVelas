"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const images = [
  {
    src: "/inicioimg/DSC_1107.webp",
    title: "Disfruta de Promociones Exclusivas",
    text: "Hasta 70% OFF en la segunda unidad\n3 cuotas sin interés en nuestras velas handmade.",
    position: "left-10 text-left ",
  },
  {
    src: "/inicioimg/DSC_1091.webp",
    title: "",
    text: "",
    position: "left-10 text-left ",
  },
  {
    src: "/inicioimg/DSC_0975.webp",
    title: "",
    text: "",
    position: "left-1/2 -translate-x-1/2 text-center",
  },
  {
    src: "/inicioimg/DSC_1079.webp",
    title: "Lumar Club: Más que Velas",
    text: "Forma parte de nuestra comunidad\npromociones exclusivas y ediciones limitadas.",
    position: "left-10 text-left ",
  },
  {
    src: "/inicioimg/DSC_0771.webp",
    title: "",
    text: "",
    position: "right-10 text-right",
  },
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image animation with framer-motion */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src}
            alt={`header ${currentIndex + 1}`}
            layout="fill" // Hace que la imagen llene todo el contenedor
            objectFit="cover" // Asegura que la imagen mantenga su proporción y cubra el espacio
            quality={100} // Aumenta la calidad de la imagen para evitar pixelación
            className="object-cover w-full h-full"
          />
        </motion.div>
      </AnimatePresence>

      {/* Text for the current image */}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 text-white p-7 rounded ${images[currentIndex].position}`}
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-bold">{images[currentIndex].title}</h1>
          <h3 className="text-lg whitespace-pre-line">
            {images[currentIndex].text}
          </h3>
        </div>
        {/* <button className="text-center text-sm mt-4 py-2 w-[200px] bg-white text-black font-medium rounded hover:bg-gray-200 transition-all duration-300">
          Más información
        </button> */}
      </div>

      {/* Navigation dots below the carousel */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-gray-300" : "bg-gray-400"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
