import React from 'react'
import SectionContainer from './SectionContainer'

const Banner = () => {
  return (
    <SectionContainer>
        <div className='relative flex justify-start items-center gap-4 w-full mt-14'>
            <div className='flex flex-col gap-1 justify-center items-start w-[60%]'>
                <h1 className='font-semibold text-white text-xl opacity-80'>Priyanshu</h1>
                <p className='text-sm opacity-80 text-white'>Full Stack Developer</p>
            </div>
            <div className='flex-1 flex justify-end items-center'>
                <img 
                src="https://picsum.photos/200" 
                alt="avatar" 
                className='w-16 h-16 rounded-full object-cover' 
                />
            </div>
            <div className='absolute right-0 bottom-1 h-3 w-3 bg-green-600 rounded-full border-2 border-[#0a0a0a]'>
                
            </div>
        </div>

    </SectionContainer>
  )
}

export default Banner