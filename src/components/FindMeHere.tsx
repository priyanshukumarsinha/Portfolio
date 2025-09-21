import RectangleBox from './RectangleBox'
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import type { JSX } from 'react';
import HeadingDiv from './HeadingDiv';
import SectionContainer from './SectionContainer';

type Social = {
  icon: JSX.Element;
  label: string;
  link: string;
};

function FindMeHere() {

  const socials: Record<string, Social> = {
    // discord: { icon: <AiOutlineDiscord className="text-2xl opacity-75" />, label: "@0xpks", link: "https://0xpks.site" },
    github: { icon: <FiGithub className="text-2xl opacity-75" />, label: "@0xpks", link: "http://github.0xpks.site" },
    instagram: { icon: <FaInstagram className="text-2xl opacity-75" />, label: "@0xpks", link: "http://instagram.0xpks.site" },
    linkedin: { icon: <CiLinkedin className="text-2xl opacity-75" />, label: "@0xpks", link: "http://linkedin.0xpks.site/" },
  };

  return (
    <SectionContainer>
      <HeadingDiv
        heading="Find Me Here"
      />
      
      <div className="flex gap-6 items-center justify-between flex-wrap w-full">
        {Object.entries(socials).map(([key, { icon, label, link }]) => (
          <a key={key} href={link} target="_blank" rel="noopener noreferrer">
            <RectangleBox>
              {icon}
              <span className="pt-3 group-hover:underline">{label}</span>
            </RectangleBox>
          </a>
        ))}
      </div>
    </SectionContainer>
  )
}

export default FindMeHere
