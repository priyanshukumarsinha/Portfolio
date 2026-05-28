import { motion } from 'motion/react'
import SectionContainer from './SectionContainer'
import HeadingDiv from './HeadingDiv'
import Tags from './Tags'
import { TbBrandJavascript, TbBrandTypescript, TbBrandNextjs } from "react-icons/tb"
import { FaReact, FaGit, FaNodeJs, FaPython } from "react-icons/fa"
import { RiTailwindCssLine, RiGithubLine, RiFirebaseLine } from "react-icons/ri"
import { SiExpress, SiHono, SiPostgresql, SiMongodb, SiPrisma, SiDocker, SiVercel } from "react-icons/si"
import type { JSX } from 'react'

type Category = {
  name: string
  description: string
  tools: TagProps[]
}

type TagProps = {
  icon: JSX.Element
  name: string
}

const techCategories: Category[] = [
  {
    name: "Frontend",
    description: "UI & Component Architecture",
    tools: [
      { icon: <FaReact className="text-lg" />, name: "React.js" },
      { icon: <TbBrandNextjs className="text-lg" />, name: "Next.js" },
      { icon: <TbBrandTypescript className="text-lg" />, name: "TypeScript" },
      { icon: <RiTailwindCssLine className="text-lg" />, name: "Tailwind CSS" },
    ]
  },
  {
    name: "Backend & APIs",
    description: "Servers & Data Workflows",
    tools: [
      { icon: <FaNodeJs className="text-lg" />, name: "Node.js" },
      { icon: <SiExpress className="text-lg" />, name: "Express.js" },
      { icon: <SiHono className="text-lg" />, name: "Hono" },
    ]
  },
  {
    name: "AI Engineering",
    description: "Agentic & Conversational Systems",
    tools: [
      { icon: <FaPython className="text-lg" />, name: "LangChain" },
      { icon: <FaPython className="text-lg" />, name: "Langflow" },
      { icon: <FaPython className="text-lg" />, name: "Agentic AI" },
    ]
  },
  {
    name: "Databases",
    description: "Data Persistence & ORM",
    tools: [
      { icon: <SiPostgresql className="text-lg" />, name: "PostgreSQL" },
      { icon: <SiMongodb className="text-lg" />, name: "MongoDB" },
      { icon: <SiPrisma className="text-lg" />, name: "Prisma ORM" },
    ]
  },
  {
    name: "DevOps & Cloud",
    description: "Deployment & Infrastructure",
    tools: [
      { icon: <SiDocker className="text-lg" />, name: "Docker" },
      { icon: <SiVercel className="text-lg" />, name: "Vercel" },
      { icon: <RiFirebaseLine className="text-lg" />, name: "Firebase" },
    ]
  },
  {
    name: "Tools & Version Control",
    description: "Development Workflow",
    tools: [
      { icon: <FaGit className="text-lg" />, name: "Git" },
      { icon: <RiGithubLine className="text-lg" />, name: "GitHub" },
      { icon: <TbBrandJavascript className="text-lg" />, name: "GitHub Actions" },
    ]
  },
]

const TechStack = () => {
  return (
    <SectionContainer>
      <HeadingDiv heading="Tech Stack" />

      <div className="space-y-6">
        {techCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="mb-4 md:mb-5">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {category.name}
              </h3>
              <p className="text-sm md:text-base text-white/50">
                {category.description}
              </p>
            </div>
            
            <div className="flex gap-3 md:gap-4 flex-wrap">
              {category.tools.map((tool, tIdx) => (
                <motion.div
                  key={tIdx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Tags tag={tool} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default TechStack