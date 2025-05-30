import {  ChevronLeft } from 'lucide-react'
import React from 'react'

const NavigationBar = () => {
  return (
    <div className='w-full h-[53px] bg-primary flex items-center justify-start px-4 text-white gap-2 '>
         
          <ChevronLeft size={30} />
          <h1 className='text-2xl font-semibold'>Sign In</h1>
         
         
    </div>
  )
}

export default NavigationBar