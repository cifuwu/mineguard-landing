import React from 'react'
import Image from 'next/image'
import { FaChartLine, FaFileExport, FaLinkedin, FaMoneyBills, FaPersonCircleQuestion } from 'react-icons/fa6'
import cifu from '@/public/cifu.jpeg'
import brandon from '@/public/brandon.jpeg'
import cris from '@/public/cris.jpeg'
import hugo from '@/public/hugo.jpeg'
import nico from '@/public/nico.jpeg'
import claudio from '@/public/claudio.png'


export const metadata = {
  title: 'Sobre Nostros - MineGuard'
}




export default function page() {
  return (
    <section className="bg-white bg-gradient-to-t from-white to-blue-100">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6 pt-16 ">


          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-2 text-2xl md:text-4xl tracking-tight font-medium text-gray-900 ">Nuestro equipo</h2>
              <p className="text-sm text-gray-500 lg:mb-16 md:text-lg ">Somos estudiantes de ingeniería civil informática de la Universidad Técnica Federico Santa Maria (USM).</p>
          </div> 


          <div className="gap-x-10 gap-12 mb-6 lg:mb-16 flex justify-center flex-wrap">


            <div className="text-center text-gray-500 w-60">
              <Image width={300} height={300} className="mx-auto mb-4 w-36 h-36 rounded-full" src={brandon} alt="Sebastián Cifuentes"></Image>              
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href="#">Brandon Monsalve</a>
              </h3>
              <p>Encargado de Marketing</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="https://www.linkedin.com/in/brandon-monsalve/" target='_blank' className="text-gray-500 hover:text-gray-900 ">
                      <FaLinkedin className='w-7 h-7'/>
                    </a>
                </li>
              </ul>
            </div>



            <div className="text-center text-gray-500 w-60">
              <Image width={300} height={300} className="mx-auto mb-4 w-36 h-36 rounded-full" src={nico} alt="Sebastián Cifuentes"></Image>              
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href="#">Nicolás Vargas Pavez</a>
              </h3>
              <p>Frontend Developer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="https://www.linkedin.com/in/nicol%C3%A1s-vargas-pavez-6042b4211/" target='_blank' className="text-gray-500 hover:text-gray-900 ">
                      <FaLinkedin className='w-7 h-7'/>
                    </a>
                </li>
              </ul>
            </div>
            

            <div className="text-center text-gray-500 w-60 ">
              <Image width={300} height={300} className="mx-auto mb-4 w-36 h-36 rounded-full" src={claudio} alt="Sebastián Cifuentes"></Image>              
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href="#">Claudio Inal</a>
              </h3>
              <p>Scrum Master</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="https://www.linkedin.com/in/audiocl/" target='_blank' className="text-gray-500 hover:text-gray-900 ">
                      <FaLinkedin className='w-7 h-7'/>
                    </a>
                </li>
              </ul>
            </div>


            <div className="text-center text-gray-500 w-60">
              <Image width={300} height={300} className="mx-auto mb-4 w-36 h-36 rounded-full" src={cris} alt="Sebastián Cifuentes"></Image>              
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href="#">Cristobal Martinez</a>
              </h3>
              <p>Product Owner</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="https://www.linkedin.com/in/cristobal-martinez-513bb1291/" target='_blank' className="text-gray-500 hover:text-gray-900 ">
                      <FaLinkedin className='w-7 h-7'/>
                    </a>
                </li>
              </ul>
            </div>



            <div className="text-center text-gray-500 w-60">
              <Image width={300} height={300} className="mx-auto mb-4 w-36 h-36 rounded-full" src={hugo} alt="Sebastián Cifuentes"></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href="#">Hugo Sepúlveda</a>
              </h3>
              <p>Fullstack Developer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="https://www.linkedin.com/in/hugo-sepulveda-ordonez/" target='_blank' className="text-gray-500 hover:text-gray-900 ">
                      <FaLinkedin className='w-7 h-7'/>
                    </a>
                </li>
              </ul>
            </div>



            <div className="text-center text-gray-500 w-60">
              <Image width={300} height={300} className="mx-auto mb-4 w-36 h-36 rounded-full" src={cifu} alt="Sebastián Cifuentes"></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href="#">Sebastián Cifuentes</a>
              </h3>
              <p>Fullstack Developer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="https://www.linkedin.com/in/cifu/" target='_blank' className="text-gray-500 hover:text-gray-900 ">
                      <FaLinkedin className='w-7 h-7'/>
                    </a>
                </li>
              </ul>
            </div>





          </div>  
      </div>
    </section>
  )

}