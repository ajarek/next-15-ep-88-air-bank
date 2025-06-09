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

const Withdraw = () => {
  return (
    <div>
      <NavigationBar label='Withdraw' />
      <Container>
        <div className='relative w-full flex items-center justify-center p-4'>
          <Image
            src='/images/Illustration 4.png'
            alt='withdraw'
            width={342}
            height={188}
          />
        </div>
        <form action="">
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
         
          
           <AmountSelector/>
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

export default Withdraw
