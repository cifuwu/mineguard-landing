import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.png'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-50/70  mt-20">
      <div className="mx-auto w-full xl:px-10 p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex flex-col justify-center items-center gap-1">
            <Image src={logo} width={85} height={85} className="rounded-full" alt="AridDewellers Logo" />
            <p className='font-medium text-sm text-gray-700'>Desarrollado por AridDewellers</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-10">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Recursos</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link href="/contacto" className="hover:underline">Contacto</Link>
                  </li>
                  <li>
                    <Link href="/nosotros" className="hover:underline">Sobre nosotros</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Síguenos</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link href='https://www.instagram.com/ariddwellers/?hl=es' target='_blank'  className="hover:underline">Instagram</Link>
                  </li>
                  <li>
                    <Link href='https://www.linkedin.com/company/arid-dwellers/' target='_blank'  className="hover:underline">linkedin</Link>
                  </li>
                </ul>
              </div>

          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center ">Hecho con ❤️ por <Link href="https://www.linkedin.com/in/cifu/" target='_blank' className="hover:underline">Cifu</Link>.
        </span>
        <div className="flex mt-4 sm:justify-center sm:mt-0">
        
        
        </div>
        </div>
      </div>
    </footer>

  )
}
