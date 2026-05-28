import { motion } from 'motion/react'
import SectionContainer from './SectionContainer'
import NowPlaying from './now-playing'

const Banner = () => {
  return (
    <SectionContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10 w-full mt-12 md:mt-16"
      >
        <div className="flex flex-col gap-3 md:gap-4 justify-center items-start">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Priyanshu Kumar Sinha
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            <h2 className="text-lg md:text-xl font-semibold text-white/95">
              Product Engineer Intern
            </h2>
            <p className="text-sm md:text-base text-white/70">
              Frontend & AI Engineering • Conversational Systems • Banking Workflows
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-5 text-xs md:text-sm text-white/60 mt-3"
          >
            <span>📍 Bangalore, India</span>
            <span>•</span>
            <span>EdgeVerve Systems</span>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10 group-hover:from-white/20 transition-all duration-300" />
            
            <img
              src="https://github.com/priyanshukumarsinha.png"
              alt="Priyanshu Kumar Sinha"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Priyanshu+Kumar+Sinha&background=1a1a1a&color=fff&size=200'
              }}
            />
          </div>
          
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -bottom-2 -right-2 h-4 w-4 bg-green-500 rounded-full border-2 border-[#0a0a0a] shadow-lg shadow-green-500/50"
          />

          {/* Recently Listening To Widget */}
          <NowPlaying />
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}

export default Banner