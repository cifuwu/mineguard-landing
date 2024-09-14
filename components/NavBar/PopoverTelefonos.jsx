'use client'
import React from 'react'
import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FaAngleDown, FaAngleRight, FaBars } from 'react-icons/fa6'
import Link from 'next/link'


function PopoverTelefonos() {
  const [show, setShow] = useState(false);
  const [showProductos, setShowProductos] = useState(false);

  let timeoutId;

  const handleHover = () => {
    clearTimeout(timeoutId);
    setShow(true);
  };

  const handleLeave = () => {
    timeoutId = setTimeout(() => {
      setShow(false);
    }, 50);
  };

  const clickBoton = () => {
    setShow(!show);
  }

  return (
    <div 
      className='relative'
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      >
      <button
        onClick={e=>{clickBoton()}}
        className={`text-xl sm:text-2xl rounded-2xl p-2 text-gray-800 border-gray-700 bg-white/40`}
      >
        <FaBars />
      </button>

      <Transition
        show={show}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="absolute -right-4 sm:-right-0 top-2 z-10 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
            <div className='relative bg-white px-7 py-3 w-full flex flex-col '>
              <Link className='w-full py-2 text-blue-950 font-medium' onClick={()=>{setShow(false)}} href={'/'}> Inicio </Link>
              <Link className='w-full py-2 text-blue-950 font-medium' onClick={()=>{setShow(false)}} href={'/sobre'}> Sobre MineGuard </Link>
              <Link className='w-full py-2 text-blue-950 font-medium' onClick={()=>{setShow(false)}} href={'/nosotros'}> Nuestro equipo </Link>
              <Link className='w-full py-2 text-blue-950 font-medium' onClick={()=>{setShow(false)}} href={'/contacto'}> Contacto </Link>
            </div>
          </div>
        </div>
      </Transition>
      
    </div>
  )
}

export default PopoverTelefonos