"use client"

import * as React from "react"
import Link from "next/link"
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

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Citronella",
//     href: "/products/citronella",
//     description:
//       "Ideal para repeler insectos y aportar un aire limpio y natural.",
//   },
//   {
//     title: "Coco Vainilla",
//     href: "/products/coco-vainilla",
//     description:
//       "Una mezcla suave y dulce que crea un ambiente cálido.",
//   },
//   {
//     title: "Sándalo",
//     href: "/products/sandalo",
//     description:
//       "Una fragancia profunda y terrosa con notas amaderadas.",
//   },
//   {
//     title: "Verbena",
//     href: "/products/verbena",
//     description:
//       "Aroma refrescante, ideal para purificar cualquier espacio.",
//   },
// ]

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
                    href="/user/products"
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
                
                title="Aromaticas"
                className="bg-zinc-800 bg-opacity-60 hover:bg-zinc-400"
              >
                 <div className="bg-zinc-400">Proximamente</div>
                Diseñadas para llenar tus espacios con agradables fragancias.
              </ListItem>
              <ListItem
                
                title="Veganas"
                className="bg-zinc-800 bg-opacity-60 hover:bg-zinc-400"
              >
                 <div className="bg-zinc-400">Proximamente</div>
                Libres de productos de origen animal y perfectas para un estilo
                de vida consciente.
              </ListItem>
              <ListItem
                
                title="Flotantes"
                className="bg-zinc-800 bg-opacity-60 hover:bg-zinc-400"
              >
                 <div className="bg-zinc-400">Proximamente</div>
                Velas decorativas que flotan en agua, ideales para eventos
                especiales.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
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
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="/user/sobreNosotros" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sobre Nosotros
            </NavigationMenuLink>
          </Link>
          <Link href="/user/aromas" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Nuestros Aromas
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
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
