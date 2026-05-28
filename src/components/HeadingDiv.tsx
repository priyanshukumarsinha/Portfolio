import SectionTItle from './SectionTItle'
import { FaChevronRight } from "react-icons/fa6";

function HeadingDiv({heading, moreTitle, moreLink}: {heading: string, moreTitle?: string, moreLink?: string}) {
  return (
    <div className='flex justify-between items-center gap-4'>
        <SectionTItle>
            {heading}
        </SectionTItle>
        {
            moreTitle && (
                <a href={moreLink} target="_blank" rel="noopener noreferrer">
                    <div className='flex items-center gap-2 cursor-pointer group flex-shrink-0'>
                        <p className="text-white/70 underline underline-offset-4 text-base md:text-lg font-medium decoration-gray-600 hover:decoration-white hover:text-white/90 transition-all">
                            {moreTitle}
                        </p>
                        <FaChevronRight 
                            className='text-white text-sm opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300'
                        />
                    </div>
                </a>
            )
        }
        

    </div>
  )
}

export default HeadingDiv