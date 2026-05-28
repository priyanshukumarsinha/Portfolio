import SectionContainer from './SectionContainer'
import HeadingDiv from './HeadingDiv'
import { motion } from 'motion/react'
import { FaTrophy, FaAward, FaBookmark } from 'react-icons/fa'
import type { JSX } from 'react'

interface Achievement {
  title: string
  description: string
  icon: JSX.Element
  year?: string
}

const achievements: Achievement[] = [
  {
    icon: <FaTrophy className="text-lg" />,
    title: "Top 5 Position - Hack-o-Rama 2024",
    description: "Secured top 5 among 35 teams in Hack-o-Rama 2024"
  },
  {
    icon: <FaTrophy className="text-lg" />,
    title: "Top 100 Projects - SMVIET Hackathon",
    description: "Selected among top 100 projects out of 500+ participants at SMVIET Puducherry organized by OX.day"
  },
  {
    icon: <FaBookmark className="text-lg" />,
    title: "RainCheck Presentation",
    description: "Presented RainCheck at DSI-DMMES-2026 International Conference hosted by Dayananda Sagar College of Engineering"
  },
  {
    icon: <FaAward className="text-lg" />,
    title: "Published Research Paper",
    description: "Co-authored 'Modern JavaScript Frameworks and Libraries: A Comprehensive Survey Study' published in International Journal of Research Publication and Reviews (July 2024)"
  }
]

const Achievements = () => {
  return (
    <SectionContainer>
      <HeadingDiv heading="Achievements & Certifications" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group border border-white/10 rounded-lg p-5 md:p-6 hover:border-white/20 transition-all duration-300 bg-gradient-to-br from-white/5 to-transparent hover:bg-white/10"
          >
            <div className="flex gap-4 items-start mb-4">
              <div className="text-amber-400 mt-1 text-lg md:text-xl flex-shrink-0">{achievement.icon}</div>
              <h3 className="text-base md:text-lg font-bold text-white line-clamp-2 leading-snug">
                {achievement.title}
              </h3>
            </div>
            <p className="text-sm md:text-base text-white/65 leading-relaxed">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Achievements
