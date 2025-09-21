import React from 'react'
import FindMeHere from './components/FindMeHere'
import SectionTItle from './components/SectionTItle'
import Container from './components/Container'

const App = () => {
  return (
    <>
      <div className='flex justify-center items-center bg-[#0a0a0a]'>
        <Container>
          <SectionTItle>
            Find Me Here
          </SectionTItle>
          <FindMeHere />
        </Container>
      </div>      
    </>
  )
}

export default App