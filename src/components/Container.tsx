import { type ReactNode } from 'react'

const Container = ({children}:{children: ReactNode}) => {
  return (
    <div className='max-w-full md:max-w-4xl lg:max-w-5xl px-6 md:px-8 flex flex-col h-full'>
        {children}
    </div>
  )
}

export default Container