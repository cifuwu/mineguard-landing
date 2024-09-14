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
      <section className="pt-36 pb-20 bg-gradient-to-t from-white to-blue-100">
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-lg font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl">Encuéntranos en la Feria de software 2024 USM.</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Universidad Técnica Federico Santa Maria Campus San Joaquín.</p>
 
            </div>


            <div className=" lg:mt-0 lg:col-span-5">
              <Mapa />
            </div>    


        </div>
      </section>
    </main>
  )

}