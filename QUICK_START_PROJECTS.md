# Quick Reference: Adding Projects to Portfolio

## ⚠️ GitHub API Rate Limiting

If you see: `"API rate limit exceeded"` error

**Solution:** Add a GitHub Personal Access Token to `.env.local`

### Quick Setup (2 minutes)

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click "Generate new token" → "Generate new token (classic)"
3. Set name: "Portfolio"
4. Check: `public_repo` (read-only access to public repos)
5. Click "Generate token"
6. Copy the token
7. Paste into `.env.local`:
   ```
   VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
   ```
8. **Never commit this file** (already in `.gitignore`)

### Rate Limits

| Type | Limit | Setup |
|------|-------|-------|
| Unauthenticated | 60/hour | Default |
| Authenticated | 5,000/hour | Add VITE_GITHUB_TOKEN |

---

## Step-by-Step Guide

### 1. Pin Repository on GitHub
- Go to https://github.com/{your-username}
- Click on a repository you want to feature
- Click "Pin" button at the top (or use the pin dropdown on your profile)
- Up to 6 repositories can be pinned

### 2. Add Project Image (Optional but Recommended)
```bash
# In your repository root
# Add a file named: project.png
# Size: 400x300px
# Formats: PNG, JPG, WebP
```

The image will automatically be fetched from:
```
https://raw.githubusercontent.com/{username}/{repo}/main/project.png
```

### 3. Add Metadata (Optional)
Create `metadata.json` in repository root:

```json
{
  "title": "My Awesome Project",
  "description": "What makes this project special",
  "tags": ["React", "TypeScript", "Tailwind"],
  "liveUrl": "https://myproject.com"
}
```

See `EXAMPLE_METADATA.json` for template.

---

## How It Works

```
Your GitHub Pinned Repos
         ↓
Automatic Fetch (No config needed!)
         ↓
- Read repo name, description, language
- Fetch project.png if exists
- Fetch metadata.json if exists  
- Extract tech stack
         ↓
Display on Portfolio
         ↓
Every 1 hour: Cache expires, refresh data
```

---

## Technical Details

### Architecture
- **Frontend-only**: No backend server needed
- **GitHub GraphQL API**: One efficient API call for all repos
- **Parallel loading**: Fetch images and metadata together
- **1-hour cache**: Minimize API requests
- **Automatic fallbacks**: If image/metadata missing, uses defaults

### Files Created
```
src/
├── lib/
│   ├── github.ts          (GitHub API utilities)
│   └── imageLoading.ts    (Image optimization)
├── hooks/
│   └── useProjects.ts     (React hook with caching)
└── components/
    └── Projects.tsx       (Updated to use dynamic fetching)

Documentation:
├── DYNAMIC_PROJECTS_SETUP.md  (Full documentation)
└── EXAMPLE_METADATA.json      (Template)
```

### API Usage

```typescript
// In components
import { useProjects } from '@/hooks/useProjects'

const { projects, loading, error } = useProjects('your-username')

// Renders automatically!
// Handles fallbacks, caching, everything
```

---

## Performance Stats

- **Pinned repos**: ~1 GraphQL query
- **Per repo**: 1 metadata fetch + 1 image HEAD request
- **Total for 6 repos**: ~13 requests (happens in parallel)
- **Cached for**: 1 hour
- **Fallback**: Instant (hardcoded projects)

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Projects not updating | Wait 1 hour for cache to expire, or check GitHub status |
| Image not showing | Ensure `project.png` exists in repo root, push to main branch |
| Metadata not loading | Verify `metadata.json` is valid JSON, placed in root |
| API limit exceeded | Wait for quota reset (~1 hour), or use GitHub token |

---

## Examples

### Vichaar (Full Setup)
```
https://github.com/priyanshukumarsinha/vichaar/
├── project.png ✓
├── metadata.json ✓
└── README.md
```

### Minimal Setup
```
https://github.com/youruser/yourrepo/
├── project.png ✓
└── README.md
```
(Uses GitHub description automatically)

### No Images
```
https://github.com/youruser/yourrepo/
└── README.md
```
(SVG fallback gradient used)

---

## Environment Setup

The portfolio automatically:
- Reads the GitHub username from code
- Uses GitHub's public API (no token needed)
- Caches results in browser memory

### Change Username
Edit `src/components/Projects.tsx`:
```typescript
const GITHUB_USERNAME = "your-username"
```

### Use localStorage Persistence
Edit `src/components/Projects.tsx`:
```typescript
import { useProjectsWithPersist } from '@/hooks/useProjects'
const { projects, loading, error } = useProjectsWithPersist(GITHUB_USERNAME)
```

---

## Data Returned

Each project includes:
- `title` - Project name (from metadata or GitHub)
- `description` - Project description (from metadata or GitHub)
- `link` - GitHub URL
- `imageUrl` - Raw GitHub image URL
- `tags` - Tech stack array
- `liveLink` - Live demo URL (from metadata or defaults to GitHub URL)
- `updatedAt` - Last update timestamp

---

## Future Enhancements

- Support for different branches (not just main)
- GraphQL authentication token for higher rate limits
- Custom image optimization
- Auto-generate metadata.json via GitHub Actions
- Filter by featured flag
- Custom sorting/filtering options

---

## Support

For detailed documentation, see `DYNAMIC_PROJECTS_SETUP.md`

For issues with the implementation:
1. Check browser console for errors
2. Verify pinned repos exist
3. Verify project.png is accessible
4. Test GraphQL query: `npx github-graphql-explorer`
