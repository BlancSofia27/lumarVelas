"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const AboutUs = () => {
  return (
    <>
       {/* Primera sección */}
       <section className="relative text-gray-600 body-font">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/bglm.jpg" // Ruta de la imagen del backroom
            alt="Backroom"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay oscuro */}
        </div>

        {/* Contenido */}
        <div className="container relative mx-auto flex px-5 pt-36 pb-24 md:flex-row flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Somos una compañía que produce velas aromáticas sofisticadas con
              el objetivo de transformar ambientes.
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Buscamos brindar soluciones tecnológicas con especial enfoque en
              nuestros clientes, combinando tecnología y materia prima para
              ofrecer un producto de calidad con un servicio excepcional.
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-negro border-0 py-2 px-6 focus:outline-none hover:bg-zinc-700 rounded text-lg">
                Conoce más
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Contáctanos
              </button>
            </div> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <Image
              src="/lumarWhiteNuevo.png"
              alt="lumar.co velas artesanales"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Segunda sección */}
      <section className="text-gray-600 body-font bg-gradient-to-r from-gris via-marron to-verde">
        <div className="container px-5 py-24 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col text-center w-full mb-20"
          >
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
              Nuestros canales de contacto
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Nos enorgullecemos de los logros alcanzados junto a nuestra
              comunidad. Nuestro enfoque en la calidad y la sostenibilidad nos
              ha permitido marcar la diferencia.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="border-2 border-gray-200 px-8 py-10 rounded-lg text-center"
            >
              <h2 className="title-font font-medium text-4xl text-gray-900">
                3.2K
              </h2>
              <p className="leading-relaxed mt-2">Clientes felices</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="border-2 border-gray-200 px-8 py-10 rounded-lg text-center"
            >
              <h2 className="title-font font-medium text-4xl text-gray-900">
                1.8K
              </h2>
              <p className="leading-relaxed mt-2">Pedidos completados</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="border-2 border-gray-200 px-8 py-10 rounded-lg text-center"
            >
              <h2 className="title-font font-medium text-4xl text-gray-900">
                85
              </h2>
              <p className="leading-relaxed mt-2">Colaboradores</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tercera sección */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-verde"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Velas Artesanales Lumar
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Creamos velas únicas hechas a mano, diseñadas para iluminar tus
                momentos especiales con aromas y diseños que inspiran
                tranquilidad y calidez.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="Vela Serenity"
                  className="object-cover object-center h-full w-full"
                  src="https://cdn.shopify.com/s/files/1/0732/7734/1971/files/VI107___PORTAVELA_PUCCI_c.jpg?v=1686324456"
                  width={1204}
                  height={504}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Serenity
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Déjate envolver por la suavidad de nuestros aromas florales,
                ideales para transformar cualquier espacio en un refugio de paz.
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="Vela Harmony"
                  className="object-cover object-center h-full w-full"
                  src="https://cdn.shopify.com/s/files/1/0732/7734/1971/files/VI043___PORTAVELA_DE_VIDRIO_GLOBITO_c.jpg?v=1686324380"
                  width={1204}
                  height={504}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Harmony
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Descubre una sinfonía de aromas dulces y refrescantes que te
                transportarán a un lugar de calma y serenidad.
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
              <Image alt="Vela Bliss" className="object-cover object-center h-full w-full" src="https://cdn.shopify.com/s/files/1/0732/7734/1971/files/VI105___PORTAVELA_DIAMOND_II_c.jpg?v=1686324339" width={1204} height={504}/>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Tranquility
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Una mezcla perfecta de especias y notas cítricas para esos
                momentos donde la tranquilidad es esencial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
