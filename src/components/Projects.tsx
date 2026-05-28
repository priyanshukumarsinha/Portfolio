import { motion } from 'motion/react'
import HeadingDiv from './HeadingDiv'
import Card from './Card'
import SectionContainer from './SectionContainer'
import ProjectsLoader from './ProjectsLoader'
import SkeletonCard from './SkeletonCard'
import { useProjects } from '@/hooks/useProjects'
import vichaar from '../assets/preview.png'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.png'

interface Project {
  title: string
  description: string
  link: string
  imageUrl: string
  tags: string[]
  liveLink: string
}

// Fallback projects in case GitHub API fails
const fallbackProjects: Project[] = [
  {
    title: "Vichaar",
    description: "Full-stack blogging platform with rich-text editing and real-time collaboration.",
    link: "https://github.com/priyanshukumarsinha/vichaar",
    imageUrl: vichaar,
    tags: ["React.js", "TypeScript", "Hono", "PostgreSQL"],
    liveLink: "https://www.vichaar.0xpks.site/"
  },
  {
    title: "WebShield",
    description: "Comprehensive security analysis tool for web application vulnerabilities.",
    link: "https://github.com/priyanshukumarsinha/webshield",
    imageUrl: p3,
    tags: ["Node.js", "Socket.io", "Security"],
    liveLink: "https://github.com/priyanshukumarsinha/webshield"
  },
  {
    title: "SchedLang",
    description: "Domain-specific language for scheduling with compiler design and parsing.",
    link: "https://github.com/priyanshukumarsinha/schedlang",
    imageUrl: vichaar,
    tags: ["C++", "Compiler Design", "DSL"],
    liveLink: "https://github.com/priyanshukumarsinha/schedlang"
  },
  {
    title: "HTTP Server",
    description: "Custom HTTP server implementation with request routing and middleware.",
    link: "https://github.com/priyanshukumarsinha/http-server",
    imageUrl: p2,
    tags: ["Node.js", "Networking", "Backend"],
    liveLink: "https://github.com/priyanshukumarsinha/http-server"
  }
]

const Projects = () => {
  const GITHUB_USERNAME = "priyanshukumarsinha"
  const { projects: dynamicProjects, loading } = useProjects(GITHUB_USERNAME)

  // Use dynamic projects if available, otherwise use fallback
  const projects = dynamicProjects.length > 0 ? dynamicProjects : fallbackProjects
  
  // Show skeletons while loading (only on first load, not when already showing fallback)
  const showSkeletons = loading && dynamicProjects.length === 0

  return (
    <SectionContainer>
      <HeadingDiv
        heading="Featured Projects"
        moreTitle="View all"
        moreLink="https://github.com/priyanshukumarsinha"
      />
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {showSkeletons ? (
          // Show skeleton placeholders while loading
          Array(4).fill(null).map((_, idx) => (
            <SkeletonCard key={`skeleton-${idx}`} index={idx} />
          ))
        ) : (
          // Show actual cards
          projects.map((project, idx) => (
            <motion.div
              key={`${project.title}-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <Card project={project} />
            </motion.div>
          ))
        )}
      </div>
      
      {loading && dynamicProjects.length === 0 && <ProjectsLoader />}
    </SectionContainer>
  )
}

export default Projects