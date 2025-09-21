import SectionTItle from './SectionTItle'
import { FaChevronRight } from "react-icons/fa6";

function HeadingDiv({heading, moreTitle, moreLink}: {heading: string, moreTitle?: string, moreLink?: string}) {
  return (
    <div className='flex justify-between items-center'>
        <SectionTItle>
            {heading}
        </SectionTItle>
        {
            moreTitle && (
                <a href={moreLink} target="_blank" rel="noopener noreferrer">
                    <div className='flex items-center gap-1 cursor-pointer group'>
                        <p className="text-white underline underline-offset-4 opacity-50 text-md decoration-gray-400 hover:decoration-white">
                            {moreTitle}
                        </p>
                        <FaChevronRight 
                            className='text-white text-xs -mb-1 opacity-50 group-hover:translate-x-1 transition-transform duration-1000'
                        />
                    </div>
                </a>
            )
        }
        

    </div>
  )
}

export default HeadingDiv