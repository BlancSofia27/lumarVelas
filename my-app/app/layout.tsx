import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Cambiar a Montserrat
import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReduxProvider from "@/components/ReduxProvider";

// Importar Montserrat desde Google Fonts
const montserrat = Montserrat({
  subsets: ['latin'], // Especifica el subconjunto que necesitas
  weight: ['400', '500', '600', '700'], // Puedes agregar más pesos según sea necesario
  preload: true, // Mantén el preloading si lo necesitas
});

export const metadata: Metadata = {
  title: "Lumar.CO-Velas Homemade",
  description: "Aromas y velas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>  {/* Aplica Montserrat */}
        <ReduxProvider>
          <ToastContainer position="bottom-right" />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
