// import React from 'react'
import Projects from './components/Projects'
import FindMeHere from './components/FindMeHere'
import Container from './components/Container'
import LatestBlogs from './components/LatestBlogs'
import TechStack from './components/TechStack'
import Intro from './components/Intro'
import Banner from './components/Banner'
import DockElement  from './DockElement'

const App = () => {
  return (
    <>
      <div className='relative flex justify-center items-center bg-[#0a0a0a] h-full pb-30'>
        <Container>
          <Banner />
          <Intro />
          <TechStack />
          <LatestBlogs />
          <Projects />
          <FindMeHere />
          <div className="flex fixed left-1/2 -translate-x-1/2 bottom-0 justify-center pb-6 z-50">
            <DockElement />
          </div>
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              fixed bottom-0 left-0 right-0
              w-full
              h-48
              z-30
              bg-gradient-to-t
              from-[#0a0a0a]     
              via-[#0a0a0a]/70
              via-[#0a0a0a]/30
              to-transparent
            "
          />
        </Container>
      </div>      
    </>
  )
}

export default App