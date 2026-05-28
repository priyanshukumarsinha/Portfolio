import { type ReactNode } from 'react'

const SectionContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className='mb-20 md:mb-24'>
        {children}
    </div>
  )
}

export default SectionContainer