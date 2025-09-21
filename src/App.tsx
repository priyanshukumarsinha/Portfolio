// import React from 'react'
import Projects from './components/Projects'
import FindMeHere from './components/FindMeHere'
import Container from './components/Container'
import LatestBlogs from './components/LatestBlogs'
import TechStack from './components/TechStack'

const App = () => {
  return (
    <>
      <div className='flex justify-center items-center bg-[#0a0a0a] h-full'>
        <Container>
          <TechStack />
          <LatestBlogs />
          <Projects />
          <FindMeHere />
        </Container>
      </div>      
    </>
  )
}

export default App