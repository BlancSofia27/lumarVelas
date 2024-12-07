"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
//import { Icons } from "@/components/icons"
import "./ui.css"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { SparkleIcon } from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Vainilla",
    href: "/products/vainilla",
    description:
      "Una fragancia dulce y reconfortante que llena tus espacios de calidez.",
  },
  {
    title: "Florales",
    href: "/products/florales",
    description:
      "Aromas inspirados en flores frescas para crear ambientes delicados y relajantes.",
  },
  {
    title: "Tropicales",
    href: "/products/tropicales",
    description:
      "Fragancias exóticas que evocan la frescura de la naturaleza tropical.",
  },
  {
    title: "Cítricas",
    href: "/products/citricas",
    description: "Aromas refrescantes perfectos para revitalizar tus espacios.",
  },
  {
    title: "Maderas",
    href: "/products/maderas",
    description:
      "Esencias cálidas y terrosas que aportan elegancia y sofisticación a cualquier ambiente.",
  },
  {
    title: "Frutales",
    href: "/products/frutales",
    description:
      "Aromas jugosos y dulces que llenan tus espacios de frescura y alegría.",
  },
]

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black bg-opacity-85">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild className="hover: bg-gris">
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md bg-zinc-300 bg-opacity-60 hover:bg-zinc-400"
                    href="/products"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      <SparkleIcon />
                      Todas nuestras velas
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Descubre nuestra exclusiva colección de velas, donde
                      diseño, calidad y versatilidad se combinan.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/products/aromaticas"
                title="Aromaticas"
                className="bg-zinc-800 bg-opacity-60 hover:bg-zinc-400"
              >
                Diseñadas para llenar tus espacios con agradables fragancias.
              </ListItem>
              <ListItem
                href="/products/vegan"
                title="Veganas"
                className="bg-zinc-800 bg-opacity-60 hover:bg-zinc-400"
              >
                Libres de productos de origen animal y perfectas para un estilo
                de vida consciente.
              </ListItem>
              <ListItem
                href="/products/flotantes"
                title="Flotantes"
                className="bg-zinc-800 bg-opacity-60 hover:bg-zinc-400"
              >
                Velas decorativas que flotan en agua, ideales para eventos
                especiales.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Aromas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black bg-opacity-85">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  className="bg-zinc-800 bg-opacity-60 hover:bg-zinc-400"
                  // href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/sobreNosotros" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sobre Nosotros
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/lumarClub" legacyBehavior passHref>
            <button className="btn">
              <Image
                src="/lumarClub.png"
                alt="lumar.co velas artesanales"
                width={90}
                height={90}
                className="btn-text-one transition-all duration-300 p-3"
              />

              <span className="btn-text-two">Quiero unirme!</span>
            </button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default MenuList
