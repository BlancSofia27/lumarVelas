import CarouselImage from "@/components/CarouselImage";
import CarouselText from "@/components/CarouselText";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main>
      <CarouselText />
      <Hero />
      <Navbar/>
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
      <Footer/>
    </main>
  );
}
