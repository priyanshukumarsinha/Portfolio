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
    <div className="flex items-center gap-2 px-4 py-2 rounded-xs bg-[#19191A] text-white text-sm w-fit">
        {/* icon */}
        {tag.icon}

        {/* name */}
        <p className="font-medium italic">{tag.name}</p>
    </div>
  )
}

export default Tags