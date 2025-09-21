import React, { type JSX } from "react";
import { CalendarIcon, HomeIcon, MailIcon, PencilIcon } from "lucide-react";
// If you use react-router, uncomment the next line and use <RouterLink> instead of <a>
// import { Link as RouterLink } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "./components/ui/dock";

// icons from react-icons
import { FaGithub, FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { LuNotebook } from "react-icons/lu";
import { GoFileDirectory } from "react-icons/go";
import { FiArchive } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { RxMoon } from "react-icons/rx";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

// export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  blogs: (props: IconProps) => <LuNotebook  {...props} />,
};


const DATA = {
  navbar: [
    { href: "#", icon: HomeIcon, label: "Home" },
    { href: "#", icon: FaRegEnvelope, label: "Contact" },
  ],
  contact: {
    social: {
      Blogs: {
        name: "Blogs",
        url: "#",
        icon: Icons.blogs,
      },
        Projects: {
        name: "Projects",
        url: "0xpks.site",
        icon: GoFileDirectory ,
      },
        Resume: {
        name: "Resume",
        url: "0xpks.site",
        icon: GrDocumentText  ,
      },
    //     Archive: {
    //     name: "Archive",
    //     url: "#",
    //     icon: FiArchive ,
    //   }
    },
  },
  extra: [
    {
        name: "Dark",
        url: "#",
        icon: RxMoon  ,
    },
  ]

}

export default function DockElement(): JSX.Element {
  return (
    <TooltipProvider>
      <Dock 
      className="rounded-full bg-[#19191A] px-4 py-2 shadow-lg border border-[#222222]"
      direction="middle">
        {DATA.navbar.map((item) => (
          <DockIcon 
          className = "text-white "
          key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                {/* Use <a> for plain React. If using react-router, replace with <RouterLink to={item.href}> */}
                <a
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full hover:bg-[#0f0f0fc4] hover:text-current",
                  )}
                >
                  <item.icon className="size-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-full bg-[#272727]" />

        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon 
          className = "text-white"
          key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={social.url}
                  aria-label={social.name}
                  // open external links safely
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full hover:bg-[#0f0f0fc4] hover:text-current",
                  )}
                >
                  <social.icon className="size-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-full bg-[#272727]" />

        {DATA.extra.map((item) => (
          <DockIcon 
          className = "text-white "
          key={item.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                {/* Use <a> for plain React. If using react-router, replace with <RouterLink to={item.href}> */}
                <a
                  href={item.url}
                  aria-label={item.name}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full hover:bg-[#0f0f0fc4] hover:text-current",
                  )}
                >
                  <item.icon className="size-4" />
                </a>
              </TooltipTrigger>
              {/* <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent> */}
            </Tooltip>
          </DockIcon>
        ))}

      </Dock>
    </TooltipProvider>
  );
}
