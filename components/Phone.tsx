import { BatteryFull, Signal, Wifi } from 'lucide-react'
import React from 'react'

const Phone = () => {
  return (
    <div className='w-full h-[40px] bg-primary flex items-center justify-between px-4 '>
         <div className='text-white'>
          9:09
         </div>
         <div className='flex gap-2 text-white'>
          <Signal size={16} />
          <Wifi size={16} />
          <BatteryFull size={16} />
         </div>
    </div>
  )
}

export default Phone