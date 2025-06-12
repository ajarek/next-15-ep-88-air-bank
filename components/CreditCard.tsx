'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function CreditCard({ nameUser }: { nameUser: string }) {
  return (
    <div className='relative w-[320px] h-[200px]'>
      <div className='absolute top-2 left-2 w-full h-full rounded-2xl bg-pink-400 z-20'></div>
      <div className='absolute top-4 left-4 w-full h-full rounded-2xl bg-indigo-500 z-10 shadow-2xl'></div>

      <Card className='absolute top-0 left-0 rounded-2xl w-full h-full bg-gradient-to-r from-[#1A1266] to-[#339CFF] text-white  flex flex-col justify-between p-6 z-30'>
        <CardContent className='p-0 flex flex-col justify-between h-full'>
          <div>
            <h2 className='text-xl font-semibold'>{nameUser}</h2>
            <p className='text-sm mt-2'>Amazon Platinium</p>
          </div>

          <div className='text-lg tracking-widest mt-4'>
            4756 •••• •••• 9018
          </div>

          <div className='flex justify-between items-end mt-4'>
            <span className='text-2xl font-bold'>${'3.469.52'}</span>
            <span className='text-lg font-bold'>VISA</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
