import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'

function Redes() {
  return (
    <div className='fixed z-50 top-1/2 right-1 md:right-2'>
      <a href='https://www.linkedin.com/company/arid-dwellers/' target='_blank' className="-mt-16 flex justify-center items-center w-[44px] h-[44px] md:w-[52px] md:h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 ">
        <FaLinkedin className='w-5 md:w-7 h-5 md:h-7'/>    
      </a>
      <a href='https://www.instagram.com/ariddwellers/?hl=es' target='_blank' className="mt-2 flex justify-center items-center w-[44px] h-[44px] md:w-[52px] md:h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 ">
        <FaInstagram className='w-5 md:w-7 h-5 md:h-7'/>    
      </a>
    </div>
  )
}

export default Redes