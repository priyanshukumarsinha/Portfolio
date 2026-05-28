import { motion } from 'motion/react'
import HeadingDiv from './HeadingDiv'
import Card from './Card'
import SectionContainer from './SectionContainer'
import vichaar from '../assets/preview.png'

interface Project {
  title: string
  description: string
  link: string
  imageUrl: string
  tags: string[]
  liveLink: string
  isPinned?: boolean
}

const projects: Project[] = [
  {
    title: "Vichaar",
    description: "Full-stack blogging platform with rich-text editing, authentication, and responsive design. Built with React.js, TypeScript, Hono, PostgreSQL, and deployed on Cloudflare Workers.",
    link: "https://github.com/priyanshukumarsinha/vichaar",
    imageUrl: vichaar,
    tags: ["React.js", "TypeScript", "Hono", "PostgreSQL", "Cloudflare Workers"],
    liveLink: "https://vichaar.0xpks.site",
    isPinned: true
  },
  {
    title: "SchedLang",
    description: "Domain-specific scheduling language with custom lexer, parser, and semantic analysis. Implemented LL(1) parsing techniques and recursive descent parsing for compiler design.",
    link: "https://github.com/priyanshukumarsinha/schedlang",
    imageUrl: vichaar,
    tags: ["C++", "Compiler Design", "Recursive Descent Parsing"],
    liveLink: "https://github.com/priyanshukumarsinha/schedlang",
    isPinned: true
  },
]

const Projects = () => {
  return (
    <SectionContainer>
      <HeadingDiv
        heading="Featured Projects"
        moreTitle="View all projects"
        moreLink="https://github.com/priyanshukumarsinha"
      />
      
      <div className='flex flex-col gap-6'>
        {projects && projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card project={project} />
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Projects