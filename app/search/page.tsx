import Container from '@/components/Container'
import FooterNavigation from '@/components/FooterNavigation'
import NavigationBar from '@/components/NavigationBar'
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
       <NavigationBar label='Search'/>
     <Container>
      <FooterNavigation/>
     </Container>
    </div>
  )
}

export default Search