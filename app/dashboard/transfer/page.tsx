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
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

import { CreditCard, Landmark, User } from 'lucide-react'

const Cards = () => {
  const [isFocused1, setIsFocused1] = React.useState(false)
  const [isFocused2, setIsFocused2] = React.useState(false)
  const [isFocused3, setIsFocused3] = React.useState(false)

  return (
    <div>
      <NavigationBar label='Transfer' />
      <Container>
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
          </div>
          <div>
            <h1 className='font-semibold pl-4'>Chose transaction</h1>
            <div className='grid grid-cols-3 gap-2 p-4'>
              <Button
                className={`h-24 flex flex-col items-center justify-start p-1   ${
                  isFocused1 ? 'bg-primary' : 'bg-gray-500'
                }  `}
                onClick={() => {
                  setIsFocused1(true)
                  setIsFocused2(false)
                  setIsFocused3(false)
                }}
              >
                <CreditCard />
                <p>
                  Transfer via <br /> card number
                </p>
              </Button>
              <Button
                className={`h-24 flex flex-col items-center justify-start p-1   ${
                  isFocused2 ? 'bg-primary' : 'bg-gray-500'
                }  `}
                onClick={() => {
                  setIsFocused2(true)
                  setIsFocused1(false)
                  setIsFocused3(false)
                }}
              >
                <User />
                <p>
                  Transfer your <br /> bank
                </p>
              </Button>
              <Button
                className={`h-24 flex flex-col items-center justify-start p-1   ${
                  isFocused3 ? 'bg-primary' : 'bg-gray-500'
                } `}
                onClick={() => {
                  setIsFocused3(true)
                  setIsFocused1(false)
                  setIsFocused2(false)
                }}
              >
                <Landmark />
                <p>
                  Transfer to <br /> aby bank
                </p>
              </Button>
            </div>
          </div>
          <div className='flex flex-col items-center justify-start p-4 gap-4'>
            <Input
              type='text'
              placeholder='Name'
              className='w-full border border-primary  rounded-lg'
              required
            />
            <Input
              type='text'
              placeholder='Card number'
              className='w-full border border-primary p-2 rounded-lg'
            />
            <Input
              type='text'
              placeholder='Amount'
              className='w-full border border-primary p-2 rounded-lg'
              required
            />
            <Input
              type='text'
              placeholder='Content'
              className='w-full border border-primary p-2 rounded-lg'
              required
            />
            <div className='w-full flex items-center justify-start gap-4'>
              <Input
                type='checkbox'
                className='w-6 h-6 border border-primary rounded-lg'
                required
              />
              <Label>Save to directory of beneficiary</Label>
            </div>
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

export default Cards
