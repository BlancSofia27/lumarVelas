
import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReduxProvider from "@/components/ReduxProvider";



const poppins = Poppins({
  subsets: ['latin'], // Especifica el subconjunto que necesitas
  weight: ['400', '700'], // Opcional: especifica los pesos que necesitas
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
      <body className={poppins.className}>
        <ReduxProvider >
        <Navbar/>
        <ToastContainer position="bottom-right" />
        {children}
        <Footer/>
        </ReduxProvider>
      </body>
    </html>
  );
}
