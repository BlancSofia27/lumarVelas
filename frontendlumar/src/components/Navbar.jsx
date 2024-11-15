"use client"; // Esta línea indica que este es un componente de cliente
import CartSidebar from './CartSidebar';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from "../../public/lumarhandmadeWhite.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <CartSidebar/>
        <nav 
            className={`fixed top-0 w-full py-2 flex items-center justify-between px-6 transition-colors duration-300 ${
                isScrolled ? 'bg-black' : 'bg-transparent'
            }`}
            style={{ zIndex: 1000 }} // Asegura que la navbar esté en la parte superior
        >
            <Image 
                src={logo}
                alt="Descripción de la imagen"
                className={`p-4 w-[300px] ${
                isScrolled ? 'w-[140px]' : 'bg-transparent'
            }`}
            />
            <div className='flex space-x-4 text-white'>
                <a href="#productos" className="p-3 hover:underline">Productos</a>
                <a href="#quienes-somos" className="p-3 hover:underline">Quienes somos</a>
                <a href="#contacto" className="p-3 hover:underline">Contacto</a>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
