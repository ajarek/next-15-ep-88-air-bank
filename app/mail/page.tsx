import Container from '@/components/Container'
import FooterNavigation from '@/components/FooterNavigation'
import NavigationBar from '@/components/NavigationBar'
import Link from 'next/link'
import React from 'react'
import {
  Landmark,
  User,
  MessageSquareWarning,
  HandCoins,
  BanknoteArrowDown,
} from 'lucide-react'

const mailItems = [
  {
    id: 'Bank of America',
    icon: Landmark,
    description:
      'Bank of America: 256486 is your authorization code which expires in 10 minutes.',
    label: 'Bank of America',
    href: '/mail/bank-of-america',
  },
  {
    id: 'account',
    icon: User,
    description: 'Your account has been locked out.',
    label: 'Account',
    href: '/mail/account',
  },
  {
    id: 'alert',
    icon: MessageSquareWarning,
    description: 'Your statement is ready.',
    label: 'Alert',
    href: '/mail/alert',
  },
  {
    id: 'paypal',
    icon: HandCoins,
    description: 'Your account has been locked out.',
    label: 'Paypal',
    href: '/mail/paypal',
  },
  {
    id: 'withdraw',
    icon: BanknoteArrowDown,
    description:
      'Dear customer, 2987456 is your authorization code which expires in 10 minutes.',
    label: 'Withdraw',
    href: '/mail/withdraw',
  },
]

const Search = () => {
  return (
    <div>
      <NavigationBar label='Message' />
      <Container>
        <div className=' flex flex-col items-start justify-center gap-4 p-4'>
          {mailItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                href={item.href}
                className='w-full flex items-center justify-between border border-primary px-2 py-4 rounded-sm shadow-xl hover:bg-primary hover:text-white transition-transform duration-200 '
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center gap-2 ${
                    item.id === 'Bank of America'
                      ? 'bg-blue-400'
                      : item.id === 'account'
                      ? 'bg-yellow-400'
                      : item.id === 'alert'
                      ? 'bg-red-400'
                      : item.id === 'paypal'
                      ? 'bg-green-400'
                      : item.id === 'withdraw'
                      ? 'bg-pink-400'
                      : ''
                  }`}
                >
                  <Icon
                    size={24}
                    className={`transition-transform duration-200`}
                  />
                </div>

                <div>
                  <h1 className='text-xl font-semibold'>{item.label}</h1>
                  <p>{item.description.slice(0, 16)}...</p>
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

export default Search
