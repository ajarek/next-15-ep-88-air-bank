import Container from '@/components/Container'
import FooterNavigation from '@/components/FooterNavigation'
import NavigationBar from '@/components/NavigationBar'
import React from 'react'
import { auth } from '@/app/api/auth/auth'
import Image from 'next/image'
import Link from 'next/link'

const AccountAndCard = async () => {
   const session = await auth()
  return (
    <div>
      <NavigationBar label='Account and card'/>
      <Container>
        <div className=' flex flex-col items-center justify-start p-4 gap-4'>
          <div className='flex items-center justify-center gap-4 w-full'>
            <Link className='text-xl text-center text-white w-40 rounded-xl bg-gray-500 hover:bg-primary focus:bg-primary transition-all duration-200 ease-in-out  py-2 px-4' href='/dashboard/account'>Accounts</Link>
            <Link className='text-xl text-center text-white w-40 rounded-xl bg-gray-500 hover:bg-primary focus:bg-primary transition-all duration-200 ease-in-out  py-2 px-4' href='/dashboard/account/card'>Cards</Link>
          </div>
           <Image
                    src={session?.user?.image || ''}
                    alt='hero image'
                    width={80}
                    height={80}
                    className='rounded-full shadow-lg'
                  />
                   <h1 className='text-xl text-primary font-semibold'>
          {session?.user?.name || ''}
        </h1>
        </div>
        <FooterNavigation/>
      </Container>
    </div>
  )
}

export default AccountAndCard