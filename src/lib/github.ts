/**
 * GitHub API utilities for fetching pinned repositories and their metadata
 */

export interface GitHubRepo {
  name: string
  description: string | null
  url: string
  updatedAt: string
  primaryLanguage: string | null
}

export interface ProjectMetadata {
  title?: string
  description?: string
  tags?: string[]
  liveUrl?: string
  featured?: boolean
}

export interface ProjectData {
  title: string
  description: string
  link: string
  imageUrl: string
  tags: string[]
  liveLink: string
  updatedAt: string
}

const GITHUB_API_ENDPOINT = 'https://api.github.com/graphql'

/**
 * Get GitHub authentication token from environment
 */
function getGitHubToken(): string | null {
  // Support both Vite and regular env variables
  return import.meta.env.VITE_GITHUB_TOKEN || process.env.VITE_GITHUB_TOKEN || null
}

/**
 * Fetch pinned repositories for a GitHub user using GraphQL
 */
export async function fetchPinnedRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const query = `
      query {
        user(login: "${username}") {
          pinnedItems(first: 10, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                updatedAt
                primaryLanguage {
                  name
                }
              }
            }
          }
        }
      }
    `

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    }

    // Add authentication token if available (increases rate limit from 60 to 5000/hour)
    const token = getGitHubToken()
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    const response = await fetch(GITHUB_API_ENDPOINT, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const data = await response.json()

    if (data.errors) {
      const errorMsg = data.errors[0].message
      
      // Check for rate limit errors
      if (errorMsg.includes('API rate limit exceeded')) {
        console.warn(
          'GitHub API rate limit exceeded. Add VITE_GITHUB_TOKEN to .env.local to increase limit from 60 to 5000 requests/hour. ' +
          'Get a token at: https://github.com/settings/tokens'
        )
      }
      
      console.error('GraphQL errors:', data.errors)
      throw new Error(errorMsg)
    }

    const repos = data.data?.user?.pinnedItems?.nodes || []
    return repos.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      url: repo.url,
      updatedAt: repo.updatedAt,
      primaryLanguage: repo.primaryLanguage?.name,
    }))
  } catch (error) {
    console.error('Error fetching pinned repos:', error)
    return []
  }
}

/**
 * Fetch metadata.json from a repository
 */
export async function fetchRepositoryMetadata(
  username: string,
  repoName: string,
  branch: string = 'main'
): Promise<ProjectMetadata | null> {
  try {
    const url = `https://raw.githubusercontent.com/${username}/${repoName}/${branch}/metadata.json`
    const response = await fetch(url)

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching metadata for ${repoName}:`, error)
    return null
  }
}

/**
 * Fetch project image from repository
 */
export async function fetchProjectImage(
  username: string,
  repoName: string,
  branch: string = 'main'
): Promise<string | null> {
  try {
    const url = `https://raw.githubusercontent.com/${username}/${repoName}/${branch}/project.png`
    const response = await fetch(url, { method: 'HEAD' })

    if (response.ok) {
      return url
    }
    return null
  } catch (error) {
    console.error(`Error fetching image for ${repoName}:`, error)
    return null
  }
}

/**
 * Generate a fallback gradient-based image
 */
export function generateFallbackGradient(seed: string): string {
  const hue = Math.abs(
    seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  ) % 360
  return `linear-gradient(135deg, hsl(${hue}, 70%, 50%), hsl(${(hue + 60) % 360}, 70%, 40%))`
}

/**
 * Extract tech stack from repository primaryLanguage and description
 */
export function extractTechStack(
  repo: GitHubRepo,
  metadata?: ProjectMetadata | null
): string[] {
  const tags: Set<string> = new Set()

  // Add primary language
  if (repo.primaryLanguage) {
    tags.add(repo.primaryLanguage)
  }

  // Add tags from metadata if available
  if (metadata?.tags && Array.isArray(metadata.tags)) {
    metadata.tags.forEach(tag => tags.add(tag))
  }

  // Extract common frameworks/tools from description
  if (repo.description) {
    const keywords = [
      'React', 'Vue', 'Angular', 'Svelte',
      'Node.js', 'Express', 'Fastify', 'Hono',
      'TypeScript', 'Python', 'Java', 'Go',
      'PostgreSQL', 'MongoDB', 'Redis',
      'Docker', 'Kubernetes', 'AWS',
      'GraphQL', 'REST', 'Socket.io',
      'Next.js', 'Vite', 'Webpack',
      'Tailwind', 'CSS', 'SCSS'
    ]

    keywords.forEach(keyword => {
      if (repo.description?.includes(keyword)) {
        tags.add(keyword)
      }
    })
  }

  return Array.from(tags)
}

/**
 * Combine GitHub repo data with metadata to create ProjectData
 */
export async function createProjectData(
  username: string,
  repo: GitHubRepo
): Promise<ProjectData | null> {
  try {
    // Fetch metadata and image in parallel
    const [metadata, imageUrl] = await Promise.all([
      fetchRepositoryMetadata(username, repo.name),
      fetchProjectImage(username, repo.name),
    ])

    // Extract tech stack
    const tags = extractTechStack(repo, metadata)

    return {
      title: metadata?.title || repo.name,
      description: metadata?.description || repo.description || 'No description available',
      link: repo.url,
      imageUrl: imageUrl || `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:hsl(${Math.random() * 360},70%,50%);stop-opacity:1" /><stop offset="100%" style="stop-color:hsl(${Math.random() * 360},70%,40%);stop-opacity:1" /></linearGradient></defs><rect width="400" height="300" fill="url(#grad)"/></svg>`,
      tags,
      liveLink: metadata?.liveUrl || repo.url,
      updatedAt: repo.updatedAt,
    }
  } catch (error) {
    console.error(`Error creating project data for ${repo.name}:`, error)
    return null
  }
}

/**
 * Fetch all projects for a user
 */
export async function fetchAllProjects(username: string): Promise<ProjectData[]> {
  try {
    const repos = await fetchPinnedRepos(username)

    if (repos.length === 0) {
      return []
    }

    // Fetch project data in parallel for all repos
    const projectPromises = repos.map(repo =>
      createProjectData(username, repo)
    )

    const projects = await Promise.all(projectPromises)

    // Filter out any null projects and sort by updated date
    return projects
      .filter((project): project is ProjectData => project !== null)
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() -
          new Date(a.updatedAt).getTime()
      )
  } catch (error) {
    console.error('Error fetching all projects:', error)
    return []
  }
}
