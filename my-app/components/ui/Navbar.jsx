"use client"
import { useState, useEffect } from "react"
import { Instagram, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import MenuList from "./menu-list"
import ItemsMenuMobile from "./Items-menu-mobile"
import CartSidebar from "../CartSideBar" // Importa el sidebar del carrito
import Image from "next/image"
import Auth from "../../components/Auth"
import JoinButton from "../buttonLmr"

const Navbar = () => {
  const router = useRouter()
  const [isCartOpen, setIsCartOpen] = useState(false) // Estado para controlar el sidebar
  const [isAuthOpen, setIsAuthOpen] = useState(false) // Estado para controlar Auth
  const [isScrolled, setIsScrolled] = useState(false) // Estado para el scroll

  // Detecta cuando el usuario hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 text-white ${
        isScrolled ? "bg-negro shadow-md p-2 " : "bg-transparent "
      }`}
    >
      <div
        className={`flex items-center justify-between lg:px-4 xl:px-4 w-full cursor-pointer 
          xs:mt-10 sm:mt-10 md:mt-2 lg:mt-0 xl:mt-0 px-2`} // Aplica mt-10 cuando el tamaño de pantalla es cercano a 350px.
      >
        <h1 onClick={() => router.push("/")}>
          <Image
            src="/lumarWhiteNuevo.png"
            alt="lumar.co velas artesanales"
            width={250} // Tamaño base en sm
            height={250 / 1.5} // Proporción más grande
            className="transition-all duration-300 xs:w-[200px] sm:w-[200px] sm:h-[80px] lg:w-[230px] lg:h-[98px] mt-5"
          />
        </h1>
        {/* Menú para pantallas grandes */}
        <div className="items-center justify-between hidden sm:flex">
          <MenuList />
        </div>
        {/* Menú para pantallas pequeñas */}
        <div className="flex sm:hidden">
          <ItemsMenuMobile />
        </div>
        {/* Botón adicional */}
        <JoinButton />
        {/* Íconos de navegación */}
        <div className="flex items-center justify-between gap-3 sm:gap-7">
          <ShoppingCart
            strokeWidth={1}
            className="cursor-pointer"
            onClick={() => setIsCartOpen(!isCartOpen)} // Abre o cierra el sidebar
          />
          {/* <Heart
            strokeWidth={1}
            className="cursor-pointer"
            onClick={() => router.push("/products/loved-products")}
          /> */}

          <a
            href="https://www.instagram.com/lumar.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Instagram strokeWidth={1} />
          </a>
        </div>
      </div>

      {/* Sidebar del carrito */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Modal de Auth */}
      {isAuthOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded shadow-lg w-full max-w-md overflow-y-auto h-[90vh]">
            <button
              onClick={() => setIsAuthOpen(false)}
              className="absolute top-2 right-2 text-gray-600"
            >
              ✖
            </button>
            <Auth />
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
