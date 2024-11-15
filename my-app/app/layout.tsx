
import type { Metadata } from "next";
import {Urbanist} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReduxProvider from "@/components/ReduxProvider";



const urbanist = Urbanist({subsets:["latin"]})
 

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
      <body className={urbanist.className}>
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
