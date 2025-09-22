// import React from 'react'
import RectangleBox from './RectangleBox'



const Card = ({project}:any) => {
    if(project === undefined) return null;
    return (
        <RectangleBox className='md:max-w-[48%] sm:w-[48%] w-[100%]  h-[300px] justify-start items-start'>
            <a href={project.link} target='_blank' rel='noreferrer' className='w-full'>
            <img 
            src={project.imageUrl}
            alt={project.title}
            className='w-full h-[180px] object-cover rounded-t-xs'
            />

            </a>
            
            <div className="p-4">
                <h3 className="text-white font-semibold block mb-1 truncate">
                    <a href={project.liveLink} className='hover:underline' target='_blank' rel='noreferrer'>
                        {project.title}    
                    </a> 
                </h3>
                <p className="text-white text-sm opacity-80 pt-2 line-clamp-2">
                    {project.description}
                </p>
            </div>

            <div>
                
            </div>
            
        </RectangleBox>
    )
}

export default Card