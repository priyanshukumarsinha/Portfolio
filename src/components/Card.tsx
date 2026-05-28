import { motion } from 'motion/react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Card = ({ project }: any) => {
  if (project === undefined) return null

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group w-full border border-white/10 rounded-lg overflow-hidden bg-gradient-to-br from-white/4 to-transparent hover:border-white/20 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-32 md:h-40 bg-gradient-to-br from-white/10 to-transparent">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40" />
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-5 flex flex-col gap-3">
        {/* Title and Links */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-semibold text-white truncate group-hover:text-white/90 transition-colors">
              {project.title}
            </h3>
          </div>
          
          {/* External Links */}
          <div className="flex gap-2 flex-shrink-0">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-md border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all"
              title="GitHub"
            >
              <FiGithub className="text-sm" />
            </motion.a>
            
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-md border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all"
              title="Live Demo"
            >
              <FiExternalLink className="text-sm" />
            </motion.a>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm text-white/65 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag: string, idx: number) => (
            <span
              key={idx}
              className="inline-flex px-2 py-1 rounded-sm bg-white/5 border border-white/10 text-xs text-white/60 hover:text-white/80 transition-all group-hover:bg-white/8"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Card