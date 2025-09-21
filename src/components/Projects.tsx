// import React from 'react'
import HeadingDiv from './HeadingDiv'
import Card from './Card';
import SectionContainer from './SectionContainer';
import vichaar from '../assets/preview.png'; 
import p2 from '../assets/p2.jpg'; 
import p3 from '../assets/p3.png'; 
import p4 from '../assets/p4.png'; 

interface Project {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  tags: string[];
}


const projects: Project[] = [
    {
        title: "Vichaar",
        description: "Where JavaScript, React, and Firebase converge to craft an innovative blogging experience with streamlined deployment through GitHub.",
        link: "0x.pks.com",
        imageUrl: vichaar,
        tags: ["Node.js", "Express", "JavaScript"]
    },
    {
        title: "HTTP Server",
        description: "HTTP follows a request-response model where the client sends a request, and the server responds.",
        link: "0x.pks.com",
        imageUrl: p2,
        tags: ["React", "Tailwind CSS", "JavaScript"]
    },
    {
        title: "WebShield",
        description: "Comprehensive security analysis tool for web apps.",
        link: "0x.pks.com",
        imageUrl: p3,
        tags: ["Node.js", "Socket.io", "JavaScript"]
    },
    {
        title: "Restraunt App",
        description: "A restaurant app built with React.js and Redux for seamless menu browsing, cart management, and food ordering.",
        link: "0x.pks.com",
        imageUrl: p4,
        tags: ["React", "Firebase", "JavaScript"]
    }
]

const Projects = () => {
  return (
    <SectionContainer>
        <HeadingDiv
        heading="Projects"
            moreTitle="view more projects"
            moreLink="http://repos.0xpks.site"
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