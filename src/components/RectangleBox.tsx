import { type ReactNode } from 'react'
import { motion } from "framer-motion"


const RectangleBox = ({children, className}: {children: ReactNode, className?: string}) => {
  return (
    <>
      <motion.div 
        whileHover={{ scale: 1.03 }}
        className= {`group cursor-pointer w-25 h-25 flex flex-col text-white justify-center items-center 
                   border border-[#222222] rounded-xs 
                   bg-gradient-to-b from-[#0d0d0d] to-[#0b0b0b] ${className}`}
      >
        {children}
      </motion.div>
    </>
  )
}

export default RectangleBox
