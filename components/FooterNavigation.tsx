'use client'
import { Home, Search, Mail, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const FooterNavigation = () => {
  const navigationItems = [
    {
      id: 'dashboard',
      icon: Home,
      label: 'dashboard',
      href: '/dashboard',
    },
    {
      id: 'search',
      icon: Search,
      label: 'Search',
      href: '/search',
    },
    {
      id: 'mail',
      icon: Mail,
      label: 'Mail',
      href: '/mail',
    },
    {
      id: 'settings',
      icon: Settings,
      label: 'Settings',
      href: '/settings',
    },
  ]
  const pathname = usePathname()

  return (
    <div className=' flex items-center justify-center px-4 pb-2'>
      <nav className='w-full flex items-center justify-center gap-4 shadow-xl border border-primary p-2 rounded-lg'>
        {navigationItems.map((item) => {
          const Icon = item.icon

          return (
            <Link
              href={item.href}
              key={item.id}
              className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 ease-in-out hover:bg-primary/80 hover:text-white ${
                pathname === item.href ? 'bg-primary text-white' : ''
              }`}
              aria-label={item.label}
            >
              <Icon
                size={20}
                className={`transition-transform duration-200`}
              />
              <span className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap'>
                {item.label}
              </span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default FooterNavigation
