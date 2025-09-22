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
  liveLink: string;
}


const projects: Project[] = [
    {
        title: "Vichaar",
        description: "Where JavaScript, React, and Firebase converge to craft an innovative blogging experience with streamlined deployment through GitHub.",
        link: "https://github.com/priyanshukumarsinha/vichaar",
        imageUrl: vichaar,
        tags: ["Node.js", "Express", "JavaScript"],
        liveLink: "https://www.vichaar.0xpks.site/"
    },
    {
        title: "HTTP Server",
        description: "HTTP follows a request-response model where the client sends a request, and the server responds.",
        link: "https://github.com/priyanshukumarsinha/http-server",
        imageUrl: p2,
        tags: ["React", "Tailwind CSS", "JavaScript"],
        liveLink: "https://github.com/priyanshukumarsinha/http-server"
    },
    {
        title: "WebShield",
        description: "Comprehensive security analysis tool for web apps.",
        link: "https://github.com/priyanshukumarsinha/webshield",
        imageUrl: p3,
        tags: ["Node.js", "Socket.io", "JavaScript"],
        liveLink: "https://github.com/priyanshukumarsinha/webshield"
    },
    {
        title: "Restraunt App",
        description: "A restaurant app built with React.js and Redux for seamless menu browsing, cart management, and food ordering.",
        link: "https://github.com/priyanshukumarsinha/restarurantapp",
        imageUrl: p4,
        tags: ["React", "Firebase", "JavaScript"],
        liveLink: "https://github.com/priyanshukumarsinha/restarurantapp"
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
                project ? <Card key={idx} project={project} />: null
            )
        }
        </div>
        

    </SectionContainer>
  )
}

export default Projects