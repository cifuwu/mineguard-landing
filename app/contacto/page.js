import React from 'react'
import Image from 'next/image'
import { FaChartLine, FaFileExport, FaMoneyBills, FaPersonCircleQuestion } from 'react-icons/fa6'
import Mapa from '../../components/Mapa'


export const metadata = {
  title: 'Contacto MineGuard'
}




export default function page() {
  return (
    <main className='relative overflow-x-hidden '>
      <section class="pt-36 pb-20 bg-gradient-to-t from-white to-blue-100">
        <div class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-lg font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl">Encuentranos en la Feria de software 2024 USM.</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Universidad Técnica Federico Santa Maria Campus San Joaquín.</p>
 
            </div>


            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Mapa />
            </div>    


        </div>
      </section>
    </main>
  )

}