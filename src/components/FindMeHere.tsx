import { motion } from 'motion/react'
import RectangleBox from './RectangleBox'
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi"
import HeadingDiv from './HeadingDiv'
import SectionContainer from './SectionContainer'
import type { JSX } from 'react'

type Social = {
  icon: JSX.Element
  label: string
  link: string
}

function FindMeHere() {
  const socials: Record<string, Social> = {
    github: { 
      icon: <FiGithub className="text-2xl opacity-75" />, 
      label: "GitHub", 
      link: "https://github.com/priyanshukumarsinha" 
    },
    linkedin: { 
      icon: <FiLinkedin className="text-2xl opacity-75" />, 
      label: "LinkedIn", 
      link: "https://linkedin.com/in/priyanshukumarsinha" 
    },
    email: { 
      icon: <FiMail className="text-2xl opacity-75" />, 
      label: "Email", 
      link: "mailto:sinhapriyanshukumar05@gmail.com" 
    },
  }

  return (
    <SectionContainer>
      <HeadingDiv heading="Connect" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 w-full">
        {Object.entries(socials).map(([key, { icon, label, link }]) => (
          <motion.a
            key={key}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <RectangleBox className="flex-col items-center justify-center gap-3 h-[160px] md:h-[180px] group hover:border-white/30 hover:bg-white/5 transition-all">
              <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <span className="text-base md:text-lg font-semibold text-white/85 group-hover:text-white transition-colors">
                {label}
              </span>
            </RectangleBox>
          </motion.a>
        ))}
      </div>
    </SectionContainer>
  )
}

export default FindMeHere
