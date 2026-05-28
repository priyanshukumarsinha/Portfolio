import { type ReactNode } from 'react'

const SectionTItle = ({children}:{children: ReactNode}) => {
  return (
    <span
    className='font-bold text-xl md:text-2xl text-white opacity-90 mb-6 md:mb-8 block tracking-tight'
    >
        {children}
    </span>
  )
}

export default SectionTItle