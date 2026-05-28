// import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'motion/react';

interface BlogProps {
    title: string;
    description: string;
    link: string;
}

const BlogDiv = ({blog}:{blog:BlogProps}) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="w-full border border-white/10 rounded-lg p-4 md:p-5 bg-gradient-to-br from-white/4 to-transparent hover:border-white/20 transition-all duration-300 group"
    >
      <div className="flex justify-between items-start gap-3 w-full">
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <h3 className="font-semibold text-sm md:text-base text-white truncate group-hover:text-white/90 transition-colors">
            {blog.title}
          </h3>
          <p className="text-xs md:text-sm text-white/60 line-clamp-2">
            {blog.description}
          </p>
        </div>

        {/* Arrow Icon */}
        <div className="flex justify-center items-center flex-shrink-0 mt-0.5 text-white/50 group-hover:text-white transition-colors">
          <MdArrowOutward className="text-base md:text-lg" />
        </div>
      </div>
    </motion.div>
  )
}

export default BlogDiv