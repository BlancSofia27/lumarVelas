import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'hngtcilvtlfttimesspf.supabase.co', // Dominio de tu bucket en Supabase
        port: '', // Usualmente vacío para HTTPS
        pathname: '/storage/v1/object/public/products/**', // Ruta a tus imágenes
      },
  ],
    domains: [
      "via.placeholder.com",
      "d22fxaf9t8d39k.cloudfront.net",
      "thecandleshop.com.ar",
      "tse2.mm.bing.net",
      "www.freewebheaders.com",
      "bohemiavelas.com.ar",
      "cdn-icons-png.flaticon.com",
      "hngtcilvtlfttimesspf.supabase.co",
    ], // Agrega aquí los dominios permitidos
    unoptimized: true,
  },

  output: "export", // Activa el modo de exportación estática

  // Opcional: Añade una barra inclinada al final de las rutas
  trailingSlash: true, // Ruta `/about` -> `/about/`

  // Opcional: Cambia la carpeta de salida
  distDir: "dist", // Cambia `out` por `dist`
}

export default nextConfig
