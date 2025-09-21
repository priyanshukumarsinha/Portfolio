// import React from 'react'
import HeadingDiv from './HeadingDiv'
import Card from './Card';
import SectionContainer from './SectionContainer';

interface Project {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  tags: string[];
}


const projects: Project[] = [
    {
        title: "HTTP Server",
        description: "A simple HTTP server built using Node.js and Express, demonstrating my understanding of server-side development and RESTful API design.",
        link: "0x.pks.com",
        imageUrl: "https://picsum.photos/200/300",
        tags: ["Node.js", "Express", "JavaScript"]
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio website showcasing my projects, skills, and experience. Built with React and Tailwind CSS for a modern and responsive design.",
        link: "0x.pks.com",
        imageUrl: "https://picsum.photos/200/300.jpg",
        tags: ["React", "Tailwind CSS", "JavaScript"]
    },
    {
        title: "Chat Application",
        description: "A real-time chat application using Socket.io, allowing users to communicate instantly. This project highlights my skills in WebSocket programming and real-time data handling.",
        link: "0x.pks.com",
        imageUrl: "https://picsum.photos/200/300?grayscale",
        tags: ["Node.js", "Socket.io", "JavaScript"]
    },
    {
        title: "Task Manager",
        description: "A task management app that helps users organize their to-do lists. Built with React for the frontend and Firebase for backend services.",
        link: "0x.pks.com",
        imageUrl: "https://picsum.photos/seed/picsum/200/300",
        tags: ["React", "Firebase", "JavaScript"]
    }
]

const Projects = () => {
  return (
    <SectionContainer>
        <HeadingDiv
        heading="Projects"
            moreTitle="view more projects"
            moreLink="0xpks.site"
        />
        <div className='flex flex-wrap justify-between gap-5'>
        {
            projects && projects.map((project, idx) =>
                project ? <Card key={idx} project={project} /> : null
            )
        }
        </div>
        

    </SectionContainer>
  )
}

export default Projects