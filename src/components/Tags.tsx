// import React from 'react'
import type { JSX } from 'react';


interface Tag {
    icon: JSX.Element,
    name: string
}

interface TagProps {
    tag: Tag
}

const Tags = ({tag}: TagProps) => {
  return (
    <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-md bg-white/6 border border-white/12 text-white text-xs md:text-sm w-fit hover:bg-white/10 hover:border-white/20 transition-all cursor-default group">
        {/* icon */}
        <span className="text-sm md:text-base group-hover:scale-110 transition-transform">
          {tag.icon}
        </span>

        {/* name */}
        <p className="font-medium">{tag.name}</p>
    </div>
  )
}

export default Tags