import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; 
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ReduxProvider from "@/components/ReduxProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Lumar.CO-Velas Homemade",
  description: "Aromas y velas",
  icons: {
    icon: "/favicon.png", // Especificamos la ruta al favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ReduxProvider>
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
