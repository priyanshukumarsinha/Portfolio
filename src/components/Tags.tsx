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
    <div className="flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-lg bg-white/8 border border-white/15 text-white text-sm md:text-base w-fit hover:bg-white/12 hover:border-white/25 transition-all cursor-default group">
        {/* icon */}
        <span className="text-base md:text-lg group-hover:scale-110 transition-transform">
          {tag.icon}
        </span>

        {/* name */}
        <p className="font-semibold tracking-wide">{tag.name}</p>
    </div>
  )
}

export default Tags