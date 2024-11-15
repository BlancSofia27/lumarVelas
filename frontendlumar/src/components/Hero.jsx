"use client" // Indica que es un componente de cliente en Next.js

import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from "next/image"
import header1 from "../../public/header1.png"
import header2 from "../../public/header2.jpg"
import header3 from "../../public/header3.webp"

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <div className="relative h-screen">
          <Image
            src={header1}
            fill
            style={{ objectFit: "cover" }}
            alt="Descripción de la imagen"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Vela Aromática de Lavanda
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Relájate con el suave aroma de lavanda.
            </p>
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-md text-lg font-semibold">
              Comprar Ahora
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-screen">
          <Image
            src={header2}
            fill
            style={{ objectFit: "cover" }}
            alt="Descripción de la imagen"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Vela de Cera Natural
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Hecha a mano con cera 100% natural.
            </p>
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-md text-lg font-semibold">
              Ver más
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-screen">
          <Image
            src={header3}
            fill
            style={{ objectFit: "cover" }}
            alt="Descripción de la imagen"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Vela Artesanal de Coco
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Disfruta de un aroma tropical en tu hogar.
            </p>
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-md text-lg font-semibold">
              Explorar
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Hero
