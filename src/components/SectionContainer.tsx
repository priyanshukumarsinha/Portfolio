import { type ReactNode } from 'react'

const SectionContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className='mb-16 md:mb-20'>
        {children}
    </div>
  )
}

export default SectionContainer