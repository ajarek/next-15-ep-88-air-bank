import Container from '@/components/Container'
import FooterNavigation from '@/components/FooterNavigation'
import NavigationBar from '@/components/NavigationBar'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'
import { auth } from '@/app/api/auth/auth'



const Cards = async () => {
  const session = await auth()
  const nameUser = session?.user?.name || ''
  return (
    <div>
      <NavigationBar label='Account and card' />
      <Container>
        <div className=' flex flex-col items-center justify-start p-4 gap-4'>
          <div className='flex items-center justify-center gap-4 w-full'>
            <Link
              className='text-xl text-center text-white w-40 rounded-xl bg-gray-500 hover:bg-primary focus:bg-primary transition-all duration-200 ease-in-out  py-2 px-4'
              href='/dashboard/account'
            >
              Accounts
            </Link>
            <Link
              className='text-xl text-center text-white w-40 rounded-xl bg-gray-500 hover:bg-primary focus:bg-primary transition-all duration-200 ease-in-out  py-2 px-4'
              href='/dashboard/account/card'
            >
              Cards
            </Link>
          </div>
          <div className='relative w-[320px] h-[200px]'>
            <Card className='absolute top-0 left-0 rounded-2xl w-full h-full bg-gradient-to-r from-[#1A1266] to-[#339CFF] text-white  flex flex-col justify-between p-6 z-30 shadow-xl'>
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
          <div className='relative w-[320px] h-[200px]'>
            <Card className='absolute top-0 left-0 rounded-2xl w-full h-full bg-gradient-to-r from-[#f29b0e] to-[#d09c47] text-white  flex flex-col justify-between p-6 z-30 shadow-xl'>
              <CardContent className='p-0 flex flex-col justify-between h-full'>
                <div>
                  <h2 className='text-xl font-semibold'>{nameUser}</h2>
                  <p className='text-sm mt-2'>Amazon Gold</p>
                </div>

                <div className='text-lg tracking-widest mt-4'>
                  3748 •••• •••• 1854
                </div>

                <div className='flex justify-between items-end mt-4'>
                  <span className='text-2xl font-bold'>${'4254,25'}</span>
                  <span className='text-lg font-bold'>VISA</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='relative w-[320px] h-[200px]'>
            <Card className='absolute top-0 left-0 rounded-2xl w-full h-full bg-gradient-to-r from-[#737372] to-[#c0bfbe] text-black  flex flex-col justify-between p-6 z-30 shadow-xl'>
              <CardContent className='p-0 flex flex-col justify-between h-full'>
                <div>
                  <h2 className='text-xl font-semibold'>{nameUser}</h2>
                  <p className='text-sm mt-2'>Amazon Silver</p>
                </div>

                <div className='text-lg tracking-widest mt-4'>
                  1458 •••• •••• 9658
                </div>

                <div className='flex justify-between items-end mt-4'>
                  <span className='text-2xl font-bold'>${'1547,25'}</span>
                  <span className='text-lg font-bold'>VISA</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <FooterNavigation />
      </Container>
    </div>
  )
}

export default Cards
