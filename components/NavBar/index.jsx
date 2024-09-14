'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '@/public/logo_2.png'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa6'
import PopoverTelefonos from './PopoverTelefonos'

export default function NavBar() {
  const [navbarBackground, setNavbarBackground] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      // Cambia el color de fondo cuando haces scroll hacia abajo
      if (window.scrollY > 10) {
        setNavbarBackground(true); // Cambia el color según tus preferencias
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Limpia el escuchador de eventos al desmontar el componente
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed flex w-full items-center justify-between px-4 lg:px-14 pt-3 pb-2 z-50 ${navbarBackground ? 'backdrop-blur-lg' : 'bg-transparent'} `}>
      <div className="flex items-center">
        <Link href={'/'} className="flex items-center gap-1">
          <Image src={logo} alt='logo shopingcloud' width={40} height={40}></Image>
          <p className="text-sm font-medium">MineGuard</p>
        </Link>

        <ul className="hidden lg:flex ml-10 gap-5 items-center font-medium">
          <li>
            <Link href={'/'} className='hover:underline'>
              Inicio
            </Link>
          </li>
          <li>
            <Link href={'/sobre'} className='hover:underline'>
              Sobre MineGuard
            </Link>
          </li>
          <li>
            <Link href={'/nosotros'} className='hover:underline'>
              Nuestro equipo
            </Link>
          </li>
          <li>
            <Link href={'/contacto'} className='hover:underline'>
              Contacto
            </Link>
          </li>

        </ul>

      </div>


      <div className="hidden lg:flex gap-5">

      </div>

      <div className="flex lg:hidden gap-5">
        <PopoverTelefonos />
      </div>


      </nav>
  )
}
