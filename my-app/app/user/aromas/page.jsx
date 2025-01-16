"use client"
import Image from "next/image"

const AromasPage = () => {
  return (
    <>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="Vela con aroma cítrico"
                  className="object-cover object-center h-full w-full"
                  src="/citricos.png"
                  width={1204}
                  height={504}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Citrus
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Una explosión refrescante de aromas cítricos que revitalizan tus
                sentidos y llenan de energía cualquier espacio.
              </p>
            </div>
            <div>
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="Vela con aroma amaderado"
                  className="object-cover object-center h-full w-full"
                  src="/amaderados.png"
                  width={1204}
                  height={504}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Amaderados
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Sumérgete en la calidez y profundidad de los aromas amaderados,
                perfectos para crear una atmósfera relajante.
              </p>
            </div>
            <div>
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="Vela con aroma a ámbar"
                  className="object-cover object-center h-full w-full"
                  src="/ambar.png"
                  width={1204}
                  height={504}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Ambar
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Descubre el equilibrio perfecto entre dulzura y especias con el
                exótico aroma del ámbar.
              </p>
            </div>
            <div>
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="Vela con aroma floral"
                  className="object-cover object-center h-full w-full"
                  src="/floral.png"
                  width={1204}
                  height={504}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Floral
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Llena tus espacios con la frescura y suavidad de nuestros aromas
                florales cuidadosamente seleccionados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AromasPage
