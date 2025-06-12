import Container from '@/components/Container'
import FooterNavigation from '@/components/FooterNavigation'
import NavigationBar from '@/components/NavigationBar'
import React from 'react'
import { auth } from '@/app/api/auth/auth'
import Image from 'next/image'
import Link from 'next/link'
import { headers } from 'next/headers'

const accounts = [
  {
    name: 'Account1',
    number: '1234567890',
    balance: '$1000',
    branch: 'New York',
  },
  {
    name: 'Account2',
    number: '0987654321',
    balance: '$2000',
    branch: 'Los Angeles',
  },
  {
    name: 'Account3',
    number: '1357924680',
    balance: '$3000',
    branch: 'Chicago',
  },
]

const AccountAndCard = async () => {
  const headersList = await headers()
  const referer = headersList.get('referer')

  const session = await auth()
  return (
    <div>
      <NavigationBar label='Accounts ' />
      <Container>
        <div className=' flex flex-col items-center justify-start p-4 gap-4'>
          <div className='flex items-center justify-center gap-4 w-full'>
            <Link
              className={`text-xl text-center text-white w-40 rounded-xl ${
                referer === 'http://localhost:3000/dashboard/account'
                  ? 'bg-primary'
                  : ''
              } bg-gray-500 hover:bg-primary focus:bg-primary transition-all duration-200 ease-in-out  py-2 px-4`}
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
        <div className='flex flex-col items-start justify-start gap-4 p-4'>
          {accounts.map((account) => {
            return (
              <div
                key={account.name}
                className='w-full flex flex-col items-start  border border-primary px-2 py-4 rounded-sm shadow-xl hover:bg-primary hover:text-white transition-transform duration-200 '
              >
                <div className='w-full flex  items-center justify-between'>
                  <h1 className='text-xl font-semibold'>{account.name}</h1>
                  <p>{account.number}</p>
                </div>
                <div className='w-full flex  items-center justify-between'>
                  <p>Available balance</p>
                  <p>{account.balance}</p>
                </div>
                <div className='w-full flex  items-center justify-between'>
                  <p>Branch</p>
                  <p>{account.branch}</p>
                </div>
              </div>
            )
          })}
        </div>

        <FooterNavigation />
      </Container>
    </div>
  )
}

export default AccountAndCard
