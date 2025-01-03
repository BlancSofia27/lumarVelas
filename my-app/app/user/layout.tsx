import "../globals.css"; // Asegúrate de que las fuentes estén configuradas en globals.css
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/footer";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        {/* Solo mostramos la Navbar y el Footer */}
        <Navbar />
        {/* Aquí solo mostramos el contenido de la página que se pase como "children" */}
        <ToastContainer position="bottom-right" />
        <main>{children}</main>
        <Footer />
      </>
  );
}
