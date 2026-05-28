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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full">
        {Object.entries(socials).map(([key, { icon, label, link }]) => (
          <motion.a
            key={key}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <RectangleBox className="flex-col items-center justify-center gap-2 h-28 md:h-32 group hover:border-white/20 hover:bg-white/4 transition-all">
              <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <span className="text-xs md:text-sm font-medium text-white/75 group-hover:text-white transition-colors">
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
