import Container from '@/components/Container'
import FooterNavigation from '@/components/FooterNavigation'
import NavigationBar from '@/components/NavigationBar'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const settingItems = [
  {
    id: 'password',
    label: 'Password',
    href: '/setting/password',
  },
  {
    id: 'touchId',
    label: 'Touch ID',
    href: '/setting/touchId',
  },
  {
    id: 'languages',
    label: 'Languages',
    href: '/setting/languages',
  },
  {
    id: 'information',
    label: 'App information',
    href: '/setting/information',
  },
  {
    id: 'customer',
    label: 'Customer care',
    href: '/setting/customer',
  },
]

const Settings = () => {
  return (
    <div>
      <NavigationBar label='Setting' />
      <Container>
        <div className=' flex flex-col items-start justify-center gap-4 p-6'>
          {settingItems.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.href}
                className='w-full flex items-center justify-between border border-primary px-2 py-4 rounded-sm shadow-xl hover:bg-primary hover:text-white transition-transform duration-200'
              >
                <div className='w-full flex items-center justify-between'>
                  <h1 className='text-xl font-semibold'>{item.label}</h1>
                  <ChevronRight />
                </div>
              </Link>
            )
          })}
        </div>
        <FooterNavigation />
      </Container>
    </div>
  )
}

export default Settings
