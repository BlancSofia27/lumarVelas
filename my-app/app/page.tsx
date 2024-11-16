import CarouselImage from "@/components/CarouselImage";
import CarouselText from "@/components/CarouselText";
import Hero from "@/components/Hero";
import Info from "@/components/Info";

export default function Home() {
  return (
    <main>
      <CarouselText />
      <Hero />
      <Info />
      <CarouselImage/>
      <div className="relative w-full h-auto">
        <video
          src="/lumarvideo.mp4" // Ruta relativa desde la carpeta "public"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[500px]"
        />
      </div>
    </main>
  );
}
