import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import Link from "next/link";

const ItemsMenuMobile =()=>{
    return(
       <Popover>
        <PopoverTrigger>
           <Menu/>
        </PopoverTrigger>
        <PopoverContent className="bg-negro text-white">
            <Link href="/user/products" className="block">Productos</Link>
            <Link href="/user/sobreNosotros" className="block">Sobre Nosotros</Link>

        </PopoverContent>
       </Popover>
    );
}

export default ItemsMenuMobile;