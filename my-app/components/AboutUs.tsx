// components/AboutUs.tsx
"use client"
import React from "react";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

const AboutUs: FC = () => {
  return (
    <>
      {/* Primera sección */}
      <section className="text-gray-600 body-font bg-gradient-to-r from-gris via-marron to-verde">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Nuestra misión es ofrecer un servicio excepcional.
            </h1>
            <p className="mb-8 leading-relaxed">
              Nos especializamos en crear productos sustentables, cuidando cada etapa del proceso y brindando una atención al cliente que marca la diferencia.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-negro border-0 py-2 px-6 focus:outline-none hover:bg-zinc-700 rounded text-lg">
                Conoce más
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Contáctanos
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <Image
              src="/lumarBlackNuevo.png"
              alt="lumar.co velas artesanales"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Segunda sección */}
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col text-center w-full mb-20"
          >
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
              Nuestro Impacto
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Nos enorgullecemos de los logros alcanzados junto a nuestra comunidad. Nuestro enfoque en la calidad y la sostenibilidad nos ha permitido marcar la diferencia.
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
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-verde"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Velas Artesanales Lumar</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Creamos velas únicas hechas a mano, diseñadas para iluminar tus momentos especiales con aromas y diseños que inspiran tranquilidad y calidez.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="Vela Serenity" className="object-cover object-center h-full w-full"  src="https://cdn.shopify.com/s/files/1/0732/7734/1971/files/VI107___PORTAVELA_PUCCI_c.jpg?v=1686324456" width={1204} height={504}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Serenity</h2>
        <p className="text-base leading-relaxed mt-2">Déjate envolver por la suavidad de nuestros aromas florales, ideales para transformar cualquier espacio en un refugio de paz.</p>
        <a className="text-verde inline-flex items-center mt-3">Descubre Más
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="Vela Harmony" className="object-cover object-center h-full w-full" src="https://cdn.shopify.com/s/files/1/0732/7734/1971/files/VI043___PORTAVELA_DE_VIDRIO_GLOBITO_c.jpg?v=1686324380" width={1204} height={504}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Harmony</h2>
        <p className="text-base leading-relaxed mt-2">La combinación perfecta de diseño minimalista y fragancias suaves, para equilibrar cuerpo y mente.</p>
        <a className="text-verde inline-flex items-center mt-3">Descubre Más
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="Vela Bliss" className="object-cover object-center h-full w-full" src="https://cdn.shopify.com/s/files/1/0732/7734/1971/files/VI105___PORTAVELA_DIAMOND_II_c.jpg?v=1686324339" width={1204} height={504}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Bliss</h2>
        <p className="text-base leading-relaxed mt-2">Vive momentos únicos con nuestras velas aromáticas, hechas con cera 100% natural y amor en cada detalle.</p>
        <a className="text-verde inline-flex items-center mt-3">Descubre Más
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default AboutUs;
