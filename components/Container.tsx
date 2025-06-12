import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative w-full  '>
      <div className='w-full h-[53px] bg-primary flex items-center justify-start  '></div>
      <div className='absolute top-[13px] w-full min-h-523px]  rounded-ss-4xl rounded-se-4xl bg-background  shadow-2xl border-2 border-primary'>
        {children}
      </div>
    </div>
  )
}

export default Container
