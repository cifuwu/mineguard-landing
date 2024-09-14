import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import startup from "@/public/panel.svg"
import Gradiente from "@/components/Gradiente";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      
      <section className="relative z-10 grid pt-5 md:pt-0 grid-cols-1 md:grid-cols-2 px-4 md:px-8 md:gap-5 lg:gap-10 overflow-x-hidden min-h-screen ">
        
        <Gradiente />

        <div className="flex justify-center items-center lg:ml-auto max-w-xl 2xl:max-w-2xl z-50">
          <div>
            <h2 className="text-3xl xl:text-5xl font-medium">Sistema para la gestión y seguimiento de <span className="font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">camiones mineros.</span></h2>
            <h4 className="mt-1 sm:mt-3 md:mt-4 lg:mt-6 text-sm lg:text-base 2xl:text-lg text-gray-800 font-medium">Utiliza MineGuard para gestionar el uso y ubicación de camiones mineros. Entregando datos y estadísticas en tiempo real, útiles para el correcto funcionamiento de éstos.</h4>
            <div className="flex mt-5 gap-5 items-center">
              <Link href='/sobre' className="flex items-center gap-2 hover:gap-3 transition-all py-2.5 px-5 me-2 mb-2 hover:pr-4 text-xs lg:text-sm font-medium text-gray-50 bg-gray-700 rounded-full border-gray-200 hover:bg-gray-600">
                Saber más
                <FaAngleRight />
              </Link>
              <Link href='/contacto' className="flex items-center text-xs lg:text-sm gap-2 hover:gap-3 transition-all font-medium hover:text-gray-700">
                Contáctanos
                <FaAngleRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start md:items-center mx-auto w-full lg:mt-0 z-50">

          <div className="">
            <Image src={startup} alt="2" priority className="w-2/3 m-auto"></Image>
          </div>
          
        </div>
      </section>

      <div className='container-custom mt-16 md:mt-20 mb-5'>
        <h3 className='font-semibold text-lg md:text-2xl text-center text-gray-800'>¿Quieres saber más sobre MineGuard? Mira este video</h3>
      </div>
    </div>
  );
}
