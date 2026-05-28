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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className="group border border-white/10 rounded-lg p-4 md:p-5 hover:border-white/20 transition-all duration-300 bg-gradient-to-br from-white/4 to-transparent"
          >
            <div className="flex gap-3 items-start mb-2">
              <div className="text-amber-400 mt-0.5 text-sm md:text-base flex-shrink-0">{achievement.icon}</div>
              <h3 className="text-sm md:text-base font-semibold text-white line-clamp-2">
                {achievement.title}
              </h3>
            </div>
            <p className="text-xs md:text-sm text-white/60">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Achievements
