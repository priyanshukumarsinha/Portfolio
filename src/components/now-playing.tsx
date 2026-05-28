import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Music } from 'lucide-react'

interface Track {
  name: string
  artist: string
  image: string
  url: string
  isNowPlaying: boolean
  playedAt?: string
}

const NowPlaying = () => {
  const [track, setTrack] = useState<Track | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const LASTFM_USER = import.meta.env.VITE_LASTFM_USER
  const LASTFM_API_KEY = import.meta.env.VITE_LASTFM_API_KEY

  useEffect(() => {
    if (!LASTFM_USER || !LASTFM_API_KEY) {
      setLoading(false)
      return
    }

    const fetchTrack = async () => {
      try {
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&format=json&limit=1`
        const response = await fetch(url)

        if (!response.ok) throw new Error('Failed to fetch')

        const data = await response.json()
        const recenttrack = data.recenttracks?.track?.[0] || data.recenttracks?.track

        if (!recenttrack) {
          setError(true)
          setLoading(false)
          return
        }

        const trackData: Track = {
          name: recenttrack.name || '',
          artist: recenttrack.artist?.['#text'] || recenttrack.artist || '',
          image: recenttrack.image?.[3]?.['#text'] || recenttrack.image?.[2]?.['#text'] || '',
          url: recenttrack.url || '',
          isNowPlaying: !!recenttrack['@attr']?.nowplaying,
          playedAt: recenttrack.date?.['#text'],
        }

        setTrack(trackData)
        setError(false)
        setLoading(false)
      } catch (err) {
        setError(true)
        setLoading(false)
      }
    }

    fetchTrack()

    // Refresh every 60 seconds
    const interval = setInterval(fetchTrack, 60000)
    return () => clearInterval(interval)
  }, [LASTFM_USER, LASTFM_API_KEY])

  // Don't render if not configured
  console.log(loading, error, track)
  if (loading || error || !track) return null

  return (
    <motion.a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="absolute bottom-0 right-0 translate-y-4 md:translate-y-0 md:translate-x-16 md:translate-y-12 w-20 md:w-64 group"
    >
      <div className="relative bg-gradient-to-br from-white/8 to-white/4 border border-white/15 rounded-xl p-3 md:p-4 backdrop-blur-md w-40 shadow-2xl hover:border-white/25 transition-all duration-300">
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300" />

        <div className="relative z-10">
          {/* Header with icon and status */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Music className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/70 flex-shrink-0" />
              <span className="text-[8px] md:text-[8px] font-medium text-white/70 truncate">
                Listening
              </span>
            </div>

            {/* Now Playing indicator */}
            {track.isNowPlaying && (
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                />
                <span className="text-[8px] text-green-300">Live</span>
              </div>
            )}
          </div>

          {/* Album Art */}
          {/* {track.image && (
            <div className="mb-3 rounded-lg overflow-hidden border border-white/10 group-hover:border-white/20 transition-all">
              <img
                src={track.image}
                alt={track.name}
                className="w-full aspect-square object-cover"
              />
            </div>
          )} */}

          {/* Track Info */}
          <div className="space-y-2">
            <h3 className="font-semibold text-[10px] text-white line-clamp-2 group-hover:text-white/90 transition-colors">
              {track.name}
            </h3>
            {/* <p className="text-[8px] md:text-[10px] text-white/60 group-hover:text-white/70 line-clamp-1 transition-colors">
              {track.artist}
            </p> */}

            {!track.isNowPlaying && track.playedAt && (
              <p className="text-[8px] text-white/50 mt-1">
                Last played recently
              </p>
            )}
          </div>
        </div>

        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-white/5 to-transparent rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.a>
  )
}

export default NowPlaying
