import React, { type ReactNode } from 'react'

const SectionTItle = ({children}:{children: ReactNode}) => {
  return (
    <span
    className='font-semibold text-lg text-white opacity-80 my-5 text-6'
    >
        {children}
    </span>
  )
}

export default SectionTItle