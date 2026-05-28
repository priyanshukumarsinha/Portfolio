# Dynamic Project Fetching from GitHub

This document explains how to use the dynamic project fetching system that automatically pulls pinned repositories from GitHub with optional metadata overrides.

## Architecture

### Components

1. **`lib/github.ts`** - GitHub API utilities
   - `fetchPinnedRepos()` - Fetches pinned repositories via GraphQL
   - `fetchRepositoryMetadata()` - Fetches optional metadata.json from repo
   - `fetchProjectImage()` - Checks for project.png in repo
   - `createProjectData()` - Combines all data into ProjectData format
   - `fetchAllProjects()` - Main function that orchestrates everything

2. **`hooks/useProjects.ts`** - React hooks for data fetching
   - `useProjects()` - In-memory cache with 1-hour TTL
   - `useProjectsWithPersist()` - localStorage persistence (optional)

3. **`lib/imageLoading.ts`** - Image optimization utilities
   - `preloadImage()` - Single image preloading
   - `preloadImages()` - Batch preloading
   - `checkImageAccessibility()` - Verify image URLs

4. **`components/Projects.tsx`** - Updated to use dynamic fetching
   - Falls back to hardcoded projects if GitHub API fails
   - Shows loading indicator

## Quick Start

### 1. Pin Repositories on GitHub

Go to your GitHub profile → Pin up to 6 repositories you want to feature.

The system will automatically fetch these!

### 2. Add Project Image (Recommended)

In the root of each pinned repository, add:

```
project.png
```

- Size: 400x300px recommended
- Format: PNG, JPG, or WebP
- Will be fetched from: `https://raw.githubusercontent.com/{username}/{repo}/main/project.png`

### 3. Add Metadata (Optional)

Create `metadata.json` in the repository root:

```json
{
  "title": "Custom Project Title",
  "description": "Custom description that overrides repo description",
  "tags": ["React", "TypeScript", "Tailwind"],
  "liveUrl": "https://yourproject.com",
  "featured": true
}
```

**Fields:**
- `title` - Overrides repo name
- `description` - Overrides GitHub description
- `tags` - Custom tech stack (array of strings)
- `liveUrl` - Custom live demo URL (defaults to GitHub repo URL)
- `featured` - Future feature for filtering

## How It Works

### Fetch Flow

```
fetchAllProjects(username)
  ↓
fetchPinnedRepos(username) [GraphQL query]
  ↓
For each repo, in parallel:
  ├─ fetchRepositoryMetadata()
  ├─ fetchProjectImage()
  └─ extractTechStack()
  ↓
Combine into ProjectData
  ↓
Sort by updatedAt (newest first)
```

### Caching Strategy

- **Default (`useProjects`)**: In-memory cache, 1-hour TTL
- **Optional (`useProjectsWithPersist`)**: localStorage + memory cache

Cache is validated and refreshed automatically after expiration.

### Error Handling

1. **GitHub API fails** → Uses fallback hardcoded projects
2. **metadata.json missing** → Uses GitHub repo data
3. **project.png missing** → Uses SVG fallback gradient
4. **Image load fails** → Shows fallback placeholder

## Data Flow

```javascript
// This automatically happens:
GitHub Pinned Repos
  ↓
Extract: name, description, url, updatedAt, primaryLanguage
  ↓
For each repo:
  ├─ Fetch metadata.json (override data)
  ├─ Fetch project.png (for image)
  └─ Parse description for tech keywords
  ↓
Create ProjectData object:
{
  title: "Project Name",
  description: "Description",
  link: "https://github.com/...",
  imageUrl: "https://raw.githubusercontent.com/...",
  tags: ["React", "TypeScript", ...],
  liveLink: "https://project.com",
  updatedAt: "2024-01-15T10:00:00Z"
}
```

## Usage in Components

```tsx
import { useProjects } from '@/hooks/useProjects'

function MyComponent() {
  const { projects, loading, error } = useProjects('username')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      {projects.map(project => (
        <Card key={project.link} project={project} />
      ))}
    </div>
  )
}
```

## Performance Considerations

### API Calls Optimization

1. **GraphQL Single Query** - Fetches all pinned repos in one call
2. **Parallel Requests** - Uses `Promise.all()` for metadata/images
3. **HEAD Requests** - Checks image existence without downloading
4. **Caching** - Avoids refetches within 1-hour window

### Typical API Usage

For 6 pinned repositories:
- 1x GraphQL query (pinned repos)
- 6x Fetch calls (metadata.json)
- 6x HEAD requests (image check)
- **Total: ~13 requests** (cached after 1 hour)

### Image Optimization

- Lazy loading via browser native `loading="lazy"`
- Preload support via `preloadImages()`
- SVG placeholder while loading
- Fallback gradient if image fails

## Configuration

### GitHub Authentication (Recommended)

**Increase rate limit from 60 to 5,000 requests/hour!**

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click "Generate new token" → "Generate new token (classic)"
3. Set name: "Portfolio"
4. Check: `public_repo` (read-only access)
5. Click "Generate token" and copy
6. Add to `.env.local`:
   ```
   VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
   ```

**File is already in `.gitignore` - never commits your token!**

See `.env.example` for template.

### Change Cache Duration

Edit `hooks/useProjects.ts`:

```typescript
CACHE_DURATION: 60 * 60 * 1000, // Change this (milliseconds)
```

### Change GitHub Username

In `components/Projects.tsx`:

```typescript
const GITHUB_USERNAME = "your-username"
```

### Use localStorage Persistence

In `components/Projects.tsx`:

```typescript
import { useProjectsWithPersist } from '@/hooks/useProjects'

const { projects, loading, error } = useProjectsWithPersist(GITHUB_USERNAME)
```

## Fallback System

### Hardcoded Fallback Projects

If GitHub API is unavailable, the system automatically falls back to hardcoded projects array in `Projects.tsx`. This ensures the site always shows content.

### Image Fallbacks

1. Try fetching `project.png` from repo
2. If fails → Generate SVG gradient based on repo name
3. User sees placeholder while loading

## Example metadata.json

```json
{
  "title": "Vichaar - Blogging Platform",
  "description": "A full-stack blogging platform with collaborative editing and real-time updates",
  "tags": [
    "React",
    "TypeScript",
    "Hono",
    "PostgreSQL",
    "WebSockets",
    "Tailwind CSS"
  ],
  "liveUrl": "https://vichaar.0xpks.site",
  "featured": true
}
```

## Troubleshooting

### ⚠️ API Rate Limit Exceeded

**Error:** `"API rate limit exceeded for [IP]"`

**Cause:** Unauthenticated requests limited to 60/hour

**Solution:**
1. Create GitHub Personal Access Token at [github.com/settings/tokens](https://github.com/settings/tokens)
2. Add to `.env.local`:
   ```
   VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
   ```
3. This increases limit to **5,000/hour**

See Configuration section above for detailed setup.

### Projects not updating

1. Add VITE_GITHUB_TOKEN to increase quota (see above)
2. Wait 1 hour for cache to expire (or refresh browser)
3. Check browser console for errors
4. Verify repository is actually pinned on GitHub
5. Verify `.env.local` is created (for token)

### Image not showing

1. Ensure `project.png` exists in repo root
2. Push to `main` branch (or update branch name in code)
3. Try direct URL: `https://raw.githubusercontent.com/{user}/{repo}/main/project.png`
4. Fallback gradient will display if image fails

### Metadata not loading

1. Ensure `metadata.json` is valid JSON
2. Place in repository root
3. Push to `main` branch
4. Check browser Network tab for fetch status

## Future Enhancements

- [ ] Support multiple image formats (jpg, webp)
- [ ] Filter by `featured` flag
- [ ] Custom sorting/filtering
- [ ] GraphQL authentication token support
- [ ] GitHub Actions integration to auto-generate metadata.json
- [ ] Sitemap generation from pinned repos

## API Reference

### fetchPinnedRepos(username)

```typescript
const repos = await fetchPinnedRepos('priyanshukumarsinha')
// Returns: GitHubRepo[]
```

### fetchRepositoryMetadata(username, repoName, branch?)

```typescript
const metadata = await fetchRepositoryMetadata('user', 'repo')
// Returns: ProjectMetadata | null
```

### fetchProjectImage(username, repoName, branch?)

```typescript
const imageUrl = await fetchProjectImage('user', 'repo')
// Returns: string | null
```

### createProjectData(username, repo)

```typescript
const project = await createProjectData('user', repoData)
// Returns: ProjectData | null
```

### fetchAllProjects(username)

```typescript
const projects = await fetchAllProjects('username')
// Returns: ProjectData[] (sorted by updatedAt)
```

### useProjects(username)

```typescript
const { projects, loading, error } = useProjects('username')
// Returns: { projects: ProjectData[], loading: boolean, error: string | null }
```
