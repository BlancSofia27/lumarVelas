import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import Link from "next/link";

const ItemsMenuMobile =()=>{
    return(
       <Popover>
        <PopoverTrigger>
           <Menu/>
        </PopoverTrigger>
        <PopoverContent>
            <Link href="/products" className="block">Productos</Link>
            <Link href="/nosotros" className="block">Sobre Nosotros</Link>
            <Link href="/contacto" className="block">Contacto</Link>

        </PopoverContent>
       </Popover>
    );
}

export default ItemsMenuMobile;