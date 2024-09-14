'use client'
import React, { useEffect } from 'react'

import { Gradient } from '@/utils/Gradient'




export default function Gradiente() {
  useEffect(()=>{
    // Create your instance
    const gradient = new Gradient()

    // Call `initGradient` with the selector to your canvas
    gradient.initGradient('#gradient-canvas')
  },[])
  return (
    <canvas className='w-full absolute h-full' id="gradient-canvas" data-js-darken-top data-transition-in />
  )
}
