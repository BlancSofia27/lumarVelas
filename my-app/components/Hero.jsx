import Carousel from './Carousel';

const Hero = () => {
  return (
    <div className="relative w-full h-[400px] ">
      {/* Carrusel de fondo */}
      <Carousel />

      {/* Texto superpuesto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
       
       <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4">
        Creando Momentos de Calidez con Velas Handmade
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl">
          Explora nuestros productos y descubre todo lo que tenemos para ofrecerte.
        </p>
       
      </div>
    </div>
  );
};

export default Hero;
