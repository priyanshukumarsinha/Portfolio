import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

const ProjectsLoader = () => {
  const messages = [
    'Fetching pinned projects...',
    'Gathering repository data...',
    'Pulling in the best work...',
    'Loading project images...',
    'Assembling the showcase...',
    'Almost there...',
  ]

  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center py-12 gap-6"
    >
      {/* Animated Loading Circle */}
      <div className="relative w-12 h-12">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/50 border-r-white/30"
        />

        {/* Middle rotating ring (opposite direction) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-1 rounded-full border-2 border-transparent border-b-white/40 border-l-white/20"
        />

        {/* Center dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/60"
        />
      </div>

      {/* Animated message text */}
      <div className="h-6 overflow-hidden">
        <motion.div
          key={messageIndex}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm text-white/60 font-medium text-center"
        >
          {messages[messageIndex]}
        </motion.div>
      </div>

      {/* Subtle progress dots */}
      <div className="flex gap-1">
        {messages.map((_, idx) => (
          <motion.div
            key={idx}
            animate={{
              scale: idx === messageIndex ? 1.2 : 0.8,
              opacity: idx === messageIndex ? 1 : 0.3,
              backgroundColor: idx === messageIndex ? 'rgb(255, 255, 255)' : 'rgb(255, 255, 255)',
            }}
            transition={{ duration: 0.3 }}
            className="w-1.5 h-1.5 rounded-full bg-white/50"
          />
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectsLoader
