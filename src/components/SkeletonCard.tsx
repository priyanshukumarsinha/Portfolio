import { motion } from 'motion/react'

interface SkeletonCardProps {
  index?: number
}

const SkeletonCard = ({ index = 0 }: SkeletonCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group w-full border border-white/10 rounded-lg overflow-hidden bg-gradient-to-br from-white/4 to-transparent"
    >
      {/* Image Section - Skeleton */}
      <div className="relative overflow-hidden h-40 bg-gradient-to-br from-white/8 to-white/4 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>

      {/* Content Section - Skeleton */}
      <div className="p-4 md:p-5 flex flex-col gap-3">
        {/* Title skeleton */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="h-5 bg-white/10 rounded animate-pulse w-3/4" />
          </div>

          {/* Icons skeleton */}
          <div className="flex gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-md bg-white/10 animate-pulse" />
            <div className="w-8 h-8 rounded-md bg-white/10 animate-pulse" />
          </div>
        </div>

        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-3 bg-white/10 rounded animate-pulse w-full" />
          <div className="h-3 bg-white/10 rounded animate-pulse w-5/6" />
        </div>

        {/* Tags skeleton */}
        <div className="flex flex-wrap gap-2">
          <div className="h-6 w-16 bg-white/10 rounded-full animate-pulse" />
          <div className="h-6 w-20 bg-white/10 rounded-full animate-pulse" />
          <div className="h-6 w-14 bg-white/10 rounded-full animate-pulse" />
        </div>
      </div>
    </motion.div>
  )
}

export default SkeletonCard
