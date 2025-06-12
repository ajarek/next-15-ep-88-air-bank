'use client'

import Container from '@/components/Container'
import FooterNavigation from '@/components/FooterNavigation'
import NavigationBar from '@/components/NavigationBar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import AmountSelector from '@/components/AmountSelector'

const MobilePrepaid = () => {
  const [isFocused1, setIsFocused1] = React.useState(false)
  const [isFocused2, setIsFocused2] = React.useState(false)
  const [isFocused3, setIsFocused3] = React.useState(false)

  return (
    <div>
      <NavigationBar label='Mobile Prepaid' />
      <Container>
        <h1 className='text-center'>Find beneficiary</h1>

        <div className='relative w-full grid grid-cols-3 p-4 place-items-center'>
          <button
            className={`flex flex-col items-center justify-center hover:bg-primary hover:text-white p-4 rounded-lg transition duration-200 ease-in-out ${
              isFocused1 ? 'bg-primary text-white' : ''
            }`}
            onClick={() => {
              setIsFocused1(!isFocused1)
              setIsFocused2(false)
              setIsFocused3(false)
            }}
          >
            <Image
              src='https://randomuser.me/api/portraits/men/75.jpg'
              alt='Mobile Prepaid'
              width={60}
              height={60}
              className='rounded-full'
            />
            <p>John</p>
          </button>

          <button
            className={`flex flex-col items-center justify-center hover:bg-primary hover:text-white p-4 rounded-lg transition duration-200 ease-in-out ${
              isFocused2 ? 'bg-primary text-white' : ''
            }`}
            onClick={() => {
              setIsFocused2(!isFocused2)
              setIsFocused1(false)
              setIsFocused3(false)
            }}
          >
            <Image
              src='https://randomuser.me/api/portraits/women/68.jpg'
              alt='Mobile Prepaid'
              width={60}
              height={60}
              className='rounded-full'
            />
            <p>Emma</p>
          </button>

          <button
            className={`flex flex-col items-center justify-center hover:bg-primary hover:text-white p-4 rounded-lg transition duration-200 ease-in-out ${
              isFocused3 ? 'bg-primary text-white' : ''
            }`}
            onClick={() => {
              setIsFocused3(!isFocused3)
              setIsFocused1(false)
              setIsFocused2(false)
            }}
          >
            <Image
              src='https://randomuser.me/api/portraits/women/65.jpg'
              alt='Mobile Prepaid'
              width={60}
              height={60}
              className='rounded-full'
            />
            <p>Julia</p>
          </button>
        </div>
        <form action=''>
          <div className=' flex flex-col items-center justify-start p-4 gap-4'>
            <Select required>
              <SelectTrigger className='w-full border border-primary '>
                <SelectValue placeholder='Choose account/card' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='account1'>Account 1</SelectItem>
                <SelectItem value='account2'>Account 2</SelectItem>
                <SelectItem value='account3'>Account 3</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type='text'
              placeholder='Phone number'
              className='w-full border border-primary p-2 rounded-lg'
              required
            />

            <AmountSelector />
            <Button
              type='submit'
              className='w-full'
            >
              Confirm
            </Button>
          </div>
        </form>

        <FooterNavigation />
      </Container>
    </div>
  )
}

export default MobilePrepaid
