// import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { IoArrowUpOutline } from "react-icons/io5";
import RectangleBox from './RectangleBox';

interface BlogProps {
    title: string;
    description: string;
    link: string;
}

const BlogDiv = ({blog}:{blog:BlogProps}) => {
  return (
    <RectangleBox className="w-full justify-start items-start p-4 group">
            <div className="flex justify-between items-center w-full">
            <div className="flex flex-col w-[90%]">
                <h2 className="font-semibold mb-2 text-white truncate">
                {blog.title}
                </h2>
                <p className="text-sm text-gray-400 line-clamp-2">
                {blog.description}
                </p>
            </div>

            {/* Default Icon */}
            <div className="w-[10%] -mt-4 flex justify-center items-center group-hover:hidden">
                <MdArrowOutward className="text-white" />
            </div>

            {/* Hover Icon */}
            <div className="w-[10%] -mt-4 hidden justify-center items-center group-hover:flex">
                <IoArrowUpOutline className="text-white" />
            </div>
            </div>
        </RectangleBox>
  )
}

export default BlogDiv