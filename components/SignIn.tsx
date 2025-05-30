
import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import Link from 'next/link'
import { Button } from './ui/button'
import { Fingerprint } from 'lucide-react'

const SignIn = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-6 p-6'>
      <div className='w-full flex flex-col items-start'>
      <h1 className='text-3xl font-bold text-primary'>Welcome Back</h1>
      <p>Hello there, sign in to continue</p>
      </div>
      <div>
        <Image src='/images/Illustration.png' alt='Illustration' width={213} height={165} />
      </div>
      <form action="" className='w-full flex flex-col gap-6' >
        <Input type='email'name='email' id='email' placeholder='Email' />
        <Input type='password' name='password' id='password' placeholder='Password'/>
        <Link href='/forgot-password' className='self-end'>Forgot your password ?</Link>
        <Button type='submit'>Sign in</Button>
      </form>
      <div className='w-full flex flex-col items-center gap-2'>
        <Fingerprint size={48} color='#281c9d' className='' />
        <p>Don&apos;t have an account? <Link className='text-primary font-semibold' href='/sign-up'>Sign up</Link></p>
      </div>
    </div>
  )
}

export default SignIn