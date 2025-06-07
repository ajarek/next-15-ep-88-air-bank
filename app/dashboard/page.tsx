import React from 'react'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { Bell } from 'lucide-react'
import Container from '@/components/Container'
import LogoutBtn from '@/components/LogoutBtn'
import CreditCard from '@/components/CreditCard'
import ActionGrid from '@/components/ActionGrid'
import FooterNavigation from '@/components/FooterNavigation'



const Dashboard = async () => {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  return (
    <div>
      <div className='w-full h-[53px] bg-primary flex items-center justify-start px-4 text-white gap-4 '>
        <Image
          src={session?.user?.image || ''}
          alt='hero image'
          width={40}
          height={40}
          className='rounded-full'
        />
        <h1 className='text-xl font-semibold'>
          Hi {session?.user?.name || ''}
        </h1>
        <div className='relative flex items-center'>
          <Bell />
          <div className='absolute -right-2 -top-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center'>
            3
          </div>
        </div>
        <LogoutBtn/>
      </div>
      <Container>
        <div className='w-full flex items-center justify-center py-4 pr-4'>
        <CreditCard nameUser={session?.user?.name || ''} />
        </div>
         <ActionGrid/>
         <FooterNavigation/>
      </Container>
    </div>
  )
}

export default Dashboard
