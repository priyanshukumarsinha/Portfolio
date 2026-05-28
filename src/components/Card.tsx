import { motion } from 'motion/react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Card = ({ project }: any) => {
  if (project === undefined) return null

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group w-full border border-white/10 rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/10"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-[200px] md:h-[250px] bg-gradient-to-br from-white/10 to-transparent">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40" />
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col gap-5">
        {/* Title and Links */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 truncate group-hover:text-white/90 transition-colors">
              {project.title}
            </h3>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/50 hover:text-white/80 transition-colors truncate inline-block max-w-full"
            >
              github.com/priyanshukumarsinha
            </a>
          </div>
          
          {/* External Links */}
          <div className="flex gap-2 flex-shrink-0">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
              title="GitHub"
            >
              <FiGithub className="text-xl" />
            </motion.a>
            
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
              title="Live Demo"
            >
              <FiExternalLink className="text-xl" />
            </motion.a>
          </div>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-white/75 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-3">
          {project.tags.map((tag: string, idx: number) => (
            <span
              key={idx}
              className="inline-flex px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm md:text-base text-white/75 hover:text-white hover:border-white/20 transition-all group-hover:bg-white/10 font-medium"
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