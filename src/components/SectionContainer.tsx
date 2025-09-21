import React, { type ReactNode } from 'react'

const SectionContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className='mb-14'>
        {children}
    </div>
  )
}

export default SectionContainer