import React from 'react'
import Image from 'next/image'
import { FaChartLine, FaFileExport, FaGlobe, FaInstagram, FaLinkedin, FaLocationDot, FaMoneyBills, FaPersonCircleQuestion } from 'react-icons/fa6'
import Mapa from '../../components/Mapa'


export const metadata = {
  title: 'Contacto MineGuard'
}




export default function page() {
  return (
    <main className='relative overflow-x-hidden '>
      <section className="pt-20 md:pt-36 pb-20 bg-gradient-to-t from-white to-blue-100">

        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 gap-8">

          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-lg font-medium tracking-tight leading-none md:text-xl xl:text-3xl">Encuéntranos en la Feria de software 2024 USM.</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 text-sm md:text-lg lg:text-xl">Únete a nosotros el 15 de noviembre en la Universidad Técnica Federico Santa María, sede San Joaquín, para sumergirte en el fascinante mundo de la innovación.</p>

            <div className='flex gap-2 items-center'>
              <FaLocationDot className='text-gray-600 text-4xl'/>
              <p className='text-xs md:text-sm'>Vicuña Mackenna 3939, San Joaquín, Región Metropolitana</p>
            </div>
            <a href='https://www.feriadesoftware.cl/' target='_blank' className='flex gap-2 items-center mt-3 hover:underline'>
              <FaGlobe className='text-gray-600 text-3xl ml-1'/>
              <p className='text-xs md:text-sm '>feriadesoftware.cl</p>
            </a>
            <a href='https://www.linkedin.com/company/arid-dwellers/' target='_blank' className='flex gap-2 items-center mt-3 hover:underline'>
              <FaLinkedin className='text-gray-600 text-3xl ml-1'/>
              <p className='text-xs md:text-sm '>linkedin</p>
            </a>
            <a href='https://www.instagram.com/ariddwellers/?hl=es' target='_blank' className='flex gap-2 items-center mt-3 hover:underline'>
              <FaInstagram className='text-gray-600 text-3xl ml-1'/>
              <p className='text-xs md:text-sm '>Instagram</p>
            </a>
          </div>


          <div className="lg:mt-0 lg:col-span-5 flex justify-center xl:ml-20">
            <Mapa />
          </div>    

        </div>


      </section>
    </main>
  )

}