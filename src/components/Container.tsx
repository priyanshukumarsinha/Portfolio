import { type ReactNode } from 'react'

const Container = ({children}:{children: ReactNode}) => {
  return (
    <div className='max-w-[90%] md:max-w-[600px] flex flex-col h-full'>
        {children}
    </div>
  )
}

export default Container