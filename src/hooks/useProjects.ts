/**
 * Custom hook for fetching and caching project data from GitHub
 */

import { useEffect, useState } from 'react'
import type { ProjectData } from '@/lib/github'
import { fetchAllProjects } from '@/lib/github'

interface UseProjectsReturn {
  projects: ProjectData[]
  loading: boolean
  error: string | null
}

// Simple in-memory cache with timestamp
const projectCache = {
  data: null as ProjectData[] | null,
  timestamp: 0,
  CACHE_DURATION: 60 * 60 * 1000, // 1 hour in milliseconds
}

export function useProjects(username: string): UseProjectsReturn {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Check if cache is valid
        const now = Date.now()
        const isCacheValid =
          projectCache.data &&
          now - projectCache.timestamp < projectCache.CACHE_DURATION

        if (isCacheValid && projectCache.data) {
          setProjects(projectCache.data)
          setLoading(false)
          return
        }

        // Fetch fresh data
        setLoading(true)
        const fetchedProjects = await fetchAllProjects(username)

        // Update cache
        projectCache.data = fetchedProjects
        projectCache.timestamp = now

        setProjects(fetchedProjects)
        setError(null)
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to fetch projects'
        setError(errorMessage)
        console.error('Error in useProjects:', err)
      } finally {
        setLoading(false)
      }
    }

    if (!username) {
      setError('GitHub username not provided')
      setLoading(false)
      return
    }

    fetchProjects()
  }, [username])

  return { projects, loading, error }
}

/**
 * Alternative hook that uses browser localStorage for persistence
 */
export function useProjectsWithPersist(username: string): UseProjectsReturn {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const STORAGE_KEY = `projects_${username}`
  const STORAGE_TIMESTAMP_KEY = `projects_timestamp_${username}`
  const CACHE_DURATION = 60 * 60 * 1000 // 1 hour

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Check localStorage cache
        const cachedData = localStorage.getItem(STORAGE_KEY)
        const cachedTimestamp = localStorage.getItem(STORAGE_TIMESTAMP_KEY)
        const now = Date.now()

        if (
          cachedData &&
          cachedTimestamp &&
          now - parseInt(cachedTimestamp) < CACHE_DURATION
        ) {
          setProjects(JSON.parse(cachedData))
          setLoading(false)
          return
        }

        // Fetch fresh data
        setLoading(true)
        const fetchedProjects = await fetchAllProjects(username)

        // Update localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(fetchedProjects))
        localStorage.setItem(STORAGE_TIMESTAMP_KEY, now.toString())

        setProjects(fetchedProjects)
        setError(null)
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to fetch projects'
        setError(errorMessage)
        console.error('Error in useProjectsWithPersist:', err)
      } finally {
        setLoading(false)
      }
    }

    if (!username) {
      setError('GitHub username not provided')
      setLoading(false)
      return
    }

    fetchProjects()
  }, [username])

  return { projects, loading, error }
}
