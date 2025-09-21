import React from 'react'
import RectangleBox from './RectangleBox'



const Card = ({project}:any) => {
    if(project === undefined) return null;
    return (
        <RectangleBox className='w-[48%] max-w-[48%] h-[300px] justify-start items-start'>
            <img 
            src={project.imageUrl}
            alt={project.title}
            className='w-full h-[180px] object-cover rounded-t-xs'
            />
            
            <div className="p-4">
                <h3 className="text-white font-semibold block mb-1 truncate">
                    {project.title}
                </h3>
                <p className="text-white text-sm opacity-80 pt-2 line-clamp-2">
                    {project.description}
                </p>
            </div>
            
        </RectangleBox>
    )
}

export default Card