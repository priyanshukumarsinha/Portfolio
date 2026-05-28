import { motion } from 'motion/react'
import SectionContainer from './SectionContainer'

const Intro = () => {
  return (
    <SectionContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-white/75 flex flex-col gap-7 md:gap-8 leading-relaxed md:leading-8"
      >
        <p>
          I'm a Product Engineer Intern at EdgeVerve Systems, building banking workflows and conversational AI systems. I specialize in <span className="text-white font-semibold">React.js, TypeScript, and Agentic AI</span>, crafting intelligent, user-centric interfaces for complex financial workflows.
        </p>
        
        <p>
          My current focus is engineering <span className="text-white font-semibold">conversational banking systems</span> for Universal Banker, where I design intent recognition flows, build BFF architectures, and prototype AI-assisted workflows using LangChain and Langflow. I'm passionate about bridging the gap between frontend elegance and backend complexity.
        </p>
        
        <p>
          When I'm not shipping features, I'm exploring distributed systems through compilers, leading technical documentation efforts, or diving deep into modern AI frameworks. I believe in clean code, thoughtful design, and building products that matter.
        </p>
      </motion.div>
    </SectionContainer>
  )
}

export default Intro