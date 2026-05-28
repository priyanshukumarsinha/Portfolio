import { type ReactNode } from 'react'

const Container = ({children}:{children: ReactNode}) => {
  return (
    <div className='max-w-[95%] md:max-w-[820px] lg:max-w-5xl flex flex-col h-full'>
        {children}
    </div>
  )
}

export default Container