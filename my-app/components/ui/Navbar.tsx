"use client"
import { useState, useEffect } from "react"
import { Heart, ShoppingCart, User } from "lucide-react"
import { useRouter } from "next/navigation"
import MenuList from "./menu-list"
import ItemsMenuMobile from "./Items-menu-mobile"
import CartSidebar from "../CartSideBar" // Importa el sidebar del carrito
import Image from "next/image"

const Navbar = () => {
  const router = useRouter()
  const [isCartOpen, setIsCartOpen] = useState(false) // Estado para controlar el sidebar
  const [isScrolled, setIsScrolled] = useState(false) // Estado para el scroll
  const [logoSize, setLogoSize] = useState(200) // Tamaño del logo

  // Detecta cuando el usuario hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
        setLogoSize(150) // Reducir el tamaño del logo
      } else {
        setIsScrolled(false)
        setLogoSize(200) // Tamaño original del logo
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`p-3 fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 text-white ${
        isScrolled ? "bg-negro shadow-md p-0" : "bg-transparent "
      }`}
    >
      <div className="flex items-center justify-between px-4 py-5 w-full cursor-pointer">
        <h1 onClick={() => router.push("/")}>
          <Image
            src="/lumarWhiteNuevo.png"
            alt="lumar.co velas artesanales"
            width={logoSize}
            height={100}
            className=" transition-all duration-300"
          />
        </h1>
        <div className="items-center justify-between hidden sm:flex">
          <MenuList />
        </div>
        <div className="flex sm:hidden">
          <ItemsMenuMobile />
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap-7">
          <ShoppingCart
            strokeWidth={1}
            className="cursor-pointer"
            onClick={() => setIsCartOpen(!isCartOpen)} // Abre o cierra el sidebar
          />
          <Heart
            strokeWidth={1}
            className="cursor-pointer"
            onClick={() => router.push("/products/loved-products")}
          />
          <User
            strokeWidth={1}
            className="cursor-pointer"
            onClick={() => router.push("/adminPanel")}
          />
        </div>
      </div>

      {/* Sidebar del carrito */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}

export default Navbar
