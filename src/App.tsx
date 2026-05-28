import { motion } from 'motion/react'
import Projects from './components/Projects'
import FindMeHere from './components/FindMeHere'
import Container from './components/Container'
import TechStack from './components/TechStack'
import Intro from './components/Intro'
import Banner from './components/Banner'
import DockElement from './DockElement'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import CTA from './components/CTA'

const App = () => {
  return (
    <>
      <div className='relative flex justify-center items-center bg-[#0a0a0a] min-h-screen pb-30'>
        <Container>
          {/* Animated Background Gradient */}
          <motion.div
            className="fixed inset-0 -z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Main Content */}
          <Banner />
          <Intro />
          <Experience />
          <Projects />
          <TechStack />
          <Achievements />
          <CTA />
          <FindMeHere />
          
          {/* Dock Navigation */}
          <div className="flex fixed left-1/2 -translate-x-1/2 bottom-0 justify-center pb-6 z-50">
            <DockElement />
          </div>

          {/* Bottom Gradient Fade */}
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