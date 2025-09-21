// import React from 'react'
import SectionContainer from './SectionContainer'
import HeadingDiv from './HeadingDiv'
import Tags from './Tags'
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaGit } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiHono } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiFirebaseLine } from "react-icons/ri";
import { TbBrandPrisma } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { SiC } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import type { JSX } from 'react';

type tagProps = {
    icon: JSX.Element;
    name: string;
};

const techStack : tagProps[] = [
    {
        icon : <TbBrandJavascript className="text-lg" />,
        name : "JavaScript"
    },
    {
        icon : <FaReact className="text-lg" />,
        name : "React"
    },
    {
        icon : <TbBrandTypescript className="text-lg" />,
        name : "TypeScript"
    },
    {
        icon : <RiTailwindCssLine className="text-lg" />,
        name : "Tailwind"
    },
    {
        icon : <FaGit className="text-lg" />,
        name : "Git"
    },
    {
        icon : <RiGithubLine className="text-lg" />,
        name : "GitHub"
    },
    {
        icon : <FaNodeJs className="text-lg" />,
        name : "NodeJS"
    },
    {
        icon : <SiExpress className="text-lg" />,
        name : "Express"
    },
    {
        icon : <SiHono className="text-lg" />,
        name : "Hono"
    },
    {
        icon : <TbBrandNextjs className="text-lg" />,
        name : "NextJS"
    },
    {
        icon : <RiFirebaseLine className="text-lg" />,
        name : "Firebase"
    },
    {
        icon : <TbBrandPrisma  className="text-lg" />,
        name : "Prisma"
    },
    {
        icon : <GrMysql className="text-lg" />,
        name : "MySQL"
    },
    {
        icon : <SiPostgresql className="text-lg" />,
        name : "PostgreSQL"
    },
    {
        icon : <TbBrandMongodb className="text-lg" />,
        name : "MongoDB"
    },
    {
        icon : <AiOutlinePython className="text-lg" />,
        name : "Python"
    },
    {
        icon : <SiC className="text-lg" />,
        name : "C"
    },
    {
        icon : <SiCplusplus className="text-lg" />,
        name : "C++"
    },
]


const TechStack = () => {
  return (
    <SectionContainer>
        <HeadingDiv
        heading="Tech Stack"
            // moreTitle="view more projects"
            // moreLink="0xpks.site"
        />

        <div
            className="flex gap-2 flex-wrap"
        >
            {
                techStack && techStack.map((tag)=>
                    <Tags tag = {tag} />
                )
            }
        </div>
    </SectionContainer>
  )
}

export default TechStack