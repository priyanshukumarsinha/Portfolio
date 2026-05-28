import { motion } from 'motion/react'
import SectionContainer from './SectionContainer'
import HeadingDiv from './HeadingDiv'
import Tags from './Tags'
import { TbBrandTypescript, TbBrandNextjs } from "react-icons/tb"
import { FaReact, FaGit, FaNodeJs, FaPython } from "react-icons/fa"
import { RiTailwindCssLine, RiGithubLine } from "react-icons/ri"
import { SiExpress, SiHono, SiPostgresql, SiMongodb, SiPrisma, SiDocker, SiVercel } from "react-icons/si"
import type { JSX } from 'react'

type TechItem = {
  icon: JSX.Element
  name: string
}

const techStack: TechItem[] = [
  { icon: <FaReact className="text-lg" />, name: "React.js" },
  { icon: <TbBrandTypescript className="text-lg" />, name: "TypeScript" },
  { icon: <FaReact className="text-lg" />, name: "React Native" },
  { icon: <FaNodeJs className="text-lg" />, name: "Node.js" },
  { icon: <SiHono className="text-lg" />, name: "Hono" },
  { icon: <SiExpress className="text-lg" />, name: "Express.js" },
  { icon: <FaPython className="text-lg" />, name: "LangChain" },
  { icon: <FaPython className="text-lg" />, name: "Langflow" },
  { icon: <FaPython className="text-lg" />, name: "Agentic AI" },
  { icon: <SiPostgresql className="text-lg" />, name: "PostgreSQL" },
  { icon: <SiPrisma className="text-lg" />, name: "Prisma ORM" },
  { icon: <SiMongodb className="text-lg" />, name: "MongoDB" },
  { icon: <SiDocker className="text-lg" />, name: "Docker" },
  { icon: <SiVercel className="text-lg" />, name: "Vercel" },
  { icon: <FaGit className="text-lg" />, name: "Git" },
  { icon: <RiGithubLine className="text-lg" />, name: "GitHub Actions" },
  { icon: <TbBrandNextjs className="text-lg" />, name: "Next.js" },
  { icon: <RiTailwindCssLine className="text-lg" />, name: "Tailwind CSS" },
]

const TechStack = () => {
  return (
    <SectionContainer>
      <HeadingDiv heading="Tech Stack" />
      
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 md:gap-3"
      >
        {techStack.map((tech, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Tags tag={tech} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  )
}

export default TechStack