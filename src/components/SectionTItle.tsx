import { type ReactNode } from 'react'

const SectionTItle = ({children}:{children: ReactNode}) => {
  return (
    <span
    className='font-bold text-2xl md:text-3xl text-white opacity-90 mb-8 md:mb-10 block tracking-tight'
    >
        {children}
    </span>
  )
}

export default SectionTItle