import React from "react"
import { Gift, ShoppingCart, Users, Star, Heart } from "lucide-react" // Importa íconos de Lucide

export default function LumarClub() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center ">
      <div className="bg-verde h-[130px] w-full"></div>
      <header className="text-center mb-8 ">
        <h1 className="text-4xl font-bold text-verde m-3">
          ¡Bienvenido al Lumar Club!
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Descubre los beneficios exclusivos que te esperan.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {/* Beneficio 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <Gift className="w-12 h-12 mx-auto text-gray-700 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">
            Regalos Especiales
          </h2>
          <p className="text-gris mt-2">
            Disfruta de regalos únicos y personalizados como miembro.
          </p>
        </div>

        {/* Beneficio 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <ShoppingCart className="w-12 h-12 mx-auto text-gray-700 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">
            Descuentos Exclusivos
          </h2>
          <p className="text-gris mt-2">
            Obtén descuentos exclusivos en nuestras colecciones.
          </p>
        </div>

        {/* Beneficio 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <Users className="w-12 h-12 mx-auto text-gray-700 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">
            Comunidad Premium
          </h2>
          <p className="text-gris mt-2">
            Conéctate con otros miembros y comparte experiencias.
          </p>
        </div>

        {/* Beneficio 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <Star className="w-12 h-12 mx-auto text-gray-700 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">Acceso VIP</h2>
          <p className="text-gris mt-2">
            Acceso anticipado a nuestras novedades y promociones.
          </p>
        </div>

        {/* Beneficio 5 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <Heart className="w-12 h-12 mx-auto text-gray-700 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">
            Soporte Exclusivo
          </h2>
          <p className="text-gris mt-2">
            Recibe atención personalizada y prioritaria.
          </p>
        </div>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-gris">
          Únete hoy y empieza a disfrutar de todos estos beneficios.
        </p>
      </footer>
    </div>
  )
}
