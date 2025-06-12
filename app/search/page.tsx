import Container from '@/components/Container'
import FooterNavigation from '@/components/FooterNavigation'
import NavigationBar from '@/components/NavigationBar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const searchItems = [
  {
    id: 'branch',
    img: '/images/branch.png',
    label: 'Branch',
    href: '/search/branch',
  },
  {
    id: 'interest-rate',
    img: '/images/interest-rate.png',
    label: 'Interest rate',
    href: '/search/interest-rate',
  },
  {
    id: 'exchange-rate',
    img: '/images/exchange-rate.png',
    label: 'Exchange rate',
    href: '/search/exchange-rate',
  },
  {
    id: 'exchange',
    img: '/images/exchange.png',
    label: 'Exchange',
    href: '/search/exchange',
  },
]

const Search = () => {
  return (
    <div>
      <NavigationBar label='Search' />
      <Container>
        <div className=' flex flex-col items-start justify-center gap-4 p-4'>
          {searchItems.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.href}
                className='w-full flex items-center justify-between border border-primary px-2 py-4 rounded-sm shadow-xl hover:bg-primary hover:text-white transition-transform duration-200'
              >
                <div>
                  <h1 className='text-xl font-semibold'>{item.label}</h1>
                  <p>Search for {item.label}</p>
                </div>
                <Image
                  src={item.img}
                  alt={item.label}
                  width={120}
                  height={85}
                />
              </Link>
            )
          })}
        </div>
        <FooterNavigation />
      </Container>
    </div>
  )
}

export default Search
