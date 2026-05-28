import { motion } from 'motion/react'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import SectionContainer from './SectionContainer'
import type { JSX } from 'react'

interface CTAButton {
  label: string
  icon: JSX.Element
  href: string
  isPrimary?: boolean
  color?: string
}

const ctas: CTAButton[] = [
  {
    label: "Resume",
    icon: <FiDownload className="text-lg" />,
    href: "https://drive.google.com/file/d/YOUR_RESUME_ID/view",
    isPrimary: true,
  },
  {
    label: "GitHub",
    icon: <FiGithub className="text-lg" />,
    href: "https://github.com/priyanshukumarsinha",
  },
  {
    label: "LinkedIn",
    icon: <FiLinkedin className="text-lg" />,
    href: "https://linkedin.com/in/priyanshukumarsinha",
  },
  {
    label: "Email",
    icon: <FiMail className="text-lg" />,
    href: "mailto:sinhapriyanshukumar05@gmail.com",
  },
]

const CTA = () => {
  return (
    <SectionContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/5 p-8 md:p-12"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-transparent to-purple-500/0 pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Let's Build Something Great
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 md:mb-12 max-w-2xl leading-relaxed">
            I'm open to opportunities in frontend engineering, AI workflow systems, and product development. Let's connect!
          </p>
          
          <div className="flex flex-wrap gap-4 md:gap-5">
            {ctas.map((cta, idx) => (
              <motion.a
                key={idx}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg
                  transition-all duration-300 cursor-pointer
                  ${cta.isPrimary
                    ? 'bg-white text-black hover:bg-white/90 shadow-lg shadow-white/20'
                    : 'border border-white/30 text-white hover:border-white/50 hover:bg-white/8'
                  }
                `}
              >
                {cta.icon}
                <span>{cta.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}

export default CTA
