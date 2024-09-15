import React from 'react'
import Image from 'next/image'
import { FaChartLine, FaFileExport, FaMoneyBills, FaPersonCircleQuestion } from 'react-icons/fa6'

import camion_1 from '@/public/1.png'
import camion_2 from '@/public/2.png'
import camion_3 from '@/public/3.png'


export const metadata = {
  title: 'Sobre MineGuard'
}




export default function page() {
  return (
    <main className='relative overflow-x-hidden '>

      <div className='w-screen absolute overflow-x-hidden min-h-screen bg-gradient-to-t from-white to-blue-100'>
        
      </div>







      <section className="container-custom card-grande my-6 mt-20 md:mt-40 bg-gray-50" >

        <div className='hidden md:flex justify-center items-start md:items-center mx-auto w-full sm:w-7/12 md:w-full xl:w-10/12 lg:mt-0 z-50'>
          <Image 
            src={camion_2}
            alt="" 
            placeholder='blur'
            className="w-full rounded-2xl" 
          />

        </div>



        <div className='flex justify-center items-center mr-auto max-w-xl 2xl:max-w-2xl'>
          <div className=''>
            <h2 className="text-xl md:text-2xl xl:text-4xl font-medium">¿Por qué surge MineGuard?</h2>
            <h4 className="mt-1 sm:mt-3 md:mt-4 lg:mt-6 text-sm lg:text-base 2xl:text-lg text-gray-600 font-medium">MineGuard surge de la necesidad de mejorar la eficiencia operativa y la seguridad en la minería, donde las fallas inesperadas de camiones mineros generan altos costos, tiempos de inactividad no planificados y riesgos ambientales. Las empresas mineras requieren una solución que anticipe estos problemas para mantener la productividad y cumplir con normativas.
            </h4>
            <div className="flex mt-5 gap-5">

            </div>
          </div>
        </div>


        <div className='flex md:hidden justify-center items-start md:items-center mx-auto w-full sm:w-7/12 md:w-full xl:w-10/12 lg:mt-0 z-50'>
          <Image 
            src={camion_1}
            alt="" 
            placeholder='blur'
            className="w-full rounded-2xl" 
          />

        </div>


      </section>


      <section className="container-custom card-grande my-6 bg-gray-50" >


        <div className='flex justify-center items-center ml-auto max-w-xl 2xl:max-w-2xl'>
          <div className=''>
            <h2 className="text-xl md:text-2xl xl:text-4xl font-medium">¿Cómo MineGuard solucionaría este problema?</h2>
            <h4 className="mt-1 sm:mt-3 md:mt-4 lg:mt-6 text-sm lg:text-base 2xl:text-lg text-gray-600 font-medium">MineGuard utiliza inteligencia artificial para analizar datos de sensores en tiempo real, predecir fallas operativas y alertar sobre posibles problemas antes de que ocurran. Esto permite optimizar el mantenimiento preventivo, reducir costos asociados con reparaciones y tiempos de inactividad, además de garantizar la seguridad y el cumplimiento ambiental.            </h4>
            <div className="flex mt-5 gap-5">

            </div>
          </div>
        </div>


        <div className='flex justify-center items-start md:items-center mx-auto w-full sm:w-7/12 md:w-full xl:w-10/12 lg:mt-0 z-50'>
          <Image 
            src={camion_1}
            placeholder='blur'
            alt="" 
            className="w-full rounded-2xl" 
          />

        </div>


      </section>



      <section className="container-custom card-grande my-6 bg-gray-50" >

        <div className='hidden md:flex justify-center items-start md:items-center mx-auto w-full sm:w-7/12 md:w-full xl:w-10/12 lg:mt-0 z-50'>
          <Image 
            src={camion_3}
            placeholder='blur'
            alt="" 
            className="w-full rounded-2xl" 
          />

        </div>



        <div className='flex justify-center items-center mr-auto max-w-xl 2xl:max-w-2xl'>
          <div className=''>
            <h2 className="text-xl md:text-2xl xl:text-4xl font-medium">¿A quién está dirigido MineGuard?</h2>
            <h4 className="mt-1 sm:mt-3 md:mt-4 lg:mt-6 text-sm lg:text-base 2xl:text-lg text-gray-600 font-medium">MineGuard está dirigido a empresas mineras, ingenieros de mantenimiento y operadores de camiones. Su objetivo es ayudarlos a mejorar la eficiencia operativa, reducir riesgos y costos, y garantizar el cumplimiento de las normativas medioambientales en la operación de flotas de camiones mineros. </h4>
            <div className="flex mt-5 gap-5">

            </div>
          </div>
        </div>


        <div className='flex md:hidden justify-center items-start md:items-center mx-auto w-full sm:w-7/12 md:w-full xl:w-10/12 lg:mt-0 z-50'>
          <Image 
            src={camion_3}
            placeholder='blur'
            alt="" 
            className="w-full rounded-2xl" 
          />

        </div>


      </section>

      <div className='container-custom mt-16 md:mt-20 mb-5 flex justify-center flex-col gap-5'>
        <h3 className='font-semibold text-lg md:text-2xl text-center text-gray-800'>¿Quieres saber más sobre MineGuard? Mira este video</h3>
        <div className="flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/xAZMCZHOdJ8?si=2J_fTn7N6yOcyYSz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>

{/* 

      <div className='container-custom mt-10 md:mt-20 mb-5'>
        <h3 className='font-semibold text-2xl md:text-3xl text-center text-blue-700'>Otros beneficios de ShopingCloud</h3>
      </div>

      <section className='container-custom grid grid-cols-2 md:grid-cols-4 gap-4'>
      
        <div className='card bg-red-50'>
          <div className='flex justify-center mb-2'>
            <FaMoneyBills className='text-5xl text-red-900'/>
          </div>
          <div className='text-sm md:text-base font-medium text-red-800'>
            Costos claros y convenientes. No cobramos por transacción, sólo un costo fijo mensual.
          </div>
        </div>

        <div className='card bg-blue-50'>
          <div className='flex justify-center mb-2'>
          <FaPersonCircleQuestion className='text-5xl text-blue-900'/>
          </div>
          <div className='text-sm md:text-base font-medium text-blue-800'>
            Obtén asistencia por correo electrónico o por WhatsApp, como más te acomode.
          </div>
        </div>

        <div className='card bg-violet-50'>
          <div className='flex justify-center mb-2'>
            <FaChartLine className='text-5xl text-violet-900'/>
          </div>
          <div className='text-sm md:text-base font-medium text-violet-800'>
            Maneja estadísticas e informes sobre tus ventas.
          </div>
        </div>

        <div className='card bg-green-50'>
          <div className='flex justify-center mb-2'>
            <FaFileExport className='text-5xl text-green-900'/>
          </div>
          <div className='text-sm md:text-base font-medium text-green-800'>
            Exporta e importa los datos de tus productos, pedidos y ventas con la comodidad de un archivo Excel.
          </div>
        </div>

      </section>
 */}

    </main>
  )
}
