import SectionContainer from './SectionContainer'
import HeadingDiv from './HeadingDiv'
import { motion } from 'motion/react'

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
  isCurrent: boolean
}

const experiences: ExperienceItem[] = [
  {
    company: "EdgeVerve Systems Limited",
    role: "Product Engineer Intern",
    period: "Feb 2025 – Present",
    location: "Bangalore, India",
    isCurrent: true,
    highlights: [
      "Engineered banking workflows for Universal Banker using React.js and React Native supporting RM and Teller operations",
      "Prototyped conversational Ladder CD workflows with intent recognition and async UI orchestration",
      "Developed BFF workflows and mock service integrations for frontend-backend orchestration",
      "Built AI-assisted workflows using LangChain, Langflow, and Agentic AI systems",
      "Reverse-engineered FlowBuilder platform (Node-RED based) and authored technical documentation"
    ]
  }
]

const Experience = () => {
  return (
    <SectionContainer>
      <HeadingDiv heading="Experience" />
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group border border-white/10 rounded-lg p-7 md:p-8 hover:border-white/20 transition-all duration-300 bg-gradient-to-br from-white/5 to-transparent"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {exp.role}
                </h3>
                <p className="text-base md:text-lg text-white/70 mt-1">{exp.company}</p>
              </div>
              <div className="text-base text-white/60 flex items-center gap-3">
                {exp.isCurrent && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                )}
                <span>{exp.period}</span>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-white/50 mb-5">{exp.location}</p>
            
            <ul className="space-y-3 md:space-y-4">
              {exp.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex gap-4 text-base md:text-lg text-white/75 leading-relaxed">
                  <span className="text-white/40 mt-1.5 flex-shrink-0">→</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Experience
