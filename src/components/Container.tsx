import React, { type ReactNode } from 'react'

const Container = ({children}:{children: ReactNode}) => {
  return (
    <div className='max-w-[600px] flex flex-col h-[100vh]'>
        {children}
    </div>
  )
}

export default Container