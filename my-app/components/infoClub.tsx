"use client";

import { motion } from "framer-motion";
import { Gift, Star } from "lucide-react";
import DiscountIcon from "@mui/icons-material/LocalOffer";
import Image from "next/image";

const InfoClub = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-zinc-700 to-gris text-white">
        <div className="container mx-auto px-5 py-20 flex flex-col lg:flex-row items-center lg:justify-between pt-28">
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-4"
            >
              ¡Únete al Club Lumar!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              Vive una experiencia única con beneficios exclusivos. Solo para
              socios apasionados por el bienestar y los detalles especiales.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/lumarClub.png"
              alt="Club Lumar"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-5 py-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-verde mb-4">
            Beneficios exclusivos
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Descubre por qué miles de personas ya forman parte de nuestro club.
          </p>
        </motion.div>

        <div className="flex flex-wrap -m-4">
          {[
            {
              title: "Descuentos Exclusivos",
              description:
                "Disfruta de hasta un 20% de descuento en toda nuestra colección de velas handmade.",
              icon: (
                <DiscountIcon fontSize="large" className="text-marron" />
              ),
            },
            {
              title: "Ofertas Únicas",
              description:
                "Accede a promociones especiales solo para miembros del Club Lumar.",
              icon: <Gift className="text-marron" size={40} />,
            },
            {
              title: "Sorpresas Mensuales",
              description:
                "Recibe regalos exclusivos con tus pedidos cada mes.",
              icon: <Star className="text-marron" size={40} />,
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-4 md:w-1/3"
            >
              <div className="h-full bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-5 py-16 bg-white shadow-lg rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contáctanos
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            ¿Tienes dudas o deseas más información? Completa el formulario y te
            responderemos pronto.
          </p>
        </motion.div>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Tu nombre completo"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows={5}
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-verde text-white rounded-full shadow-md hover:bg-marron transition-transform transform hover:scale-105"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InfoClub;
