# Graph Report - .  (2026-09-05)

## Corpus Check
- label mode - file stats not available

## Summary
- 59 nodes · 43 edges · 20 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 29 · imports_from: 6 · imports: 5 · calls: 2 · references: 1


## Graph Freshness
- Built from Git commit: `42733c4`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `getSiteOrigin()` - 4 edges
2. `toRouteErrorMessage()` - 3 edges
3. `getDb()` - 2 edges
4. `GET()` - 2 edges
5. `POST()` - 2 edges
6. `notes` - 2 edges
7. `display` - 1 edges
8. `sans` - 1 edges
9. `services` - 1 edges
10. `capabilities` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Site Metadata and SEO"
Cohesion: 0.24
Nodes (3): display, sans, getSiteOrigin()

### Community 1 - "Homepage Content System"
Cohesion: 0.25
Nodes (6): capabilities, deliverables, process, services, storyActs, team

### Community 2 - "Notes Data API"
Cohesion: 0.43
Nodes (5): getDb(), notes, GET(), POST(), toRouteErrorMessage()

### Community 3 - "Rendered HTML Tests"
Cohesion: 0.50
Nodes (2): previewRoot, templateRoot

### Community 4 - "Cloudflare Worker Runtime"
Cohesion: 0.50
Nodes (3): Env, ExecutionContext, worker

### Community 6 - "ESLint Configuration"
Cohesion: 1.00
Nodes (1): eslintConfig

### Community 7 - "Next Configuration"
Cohesion: 1.00
Nodes (1): nextConfig

### Community 8 - "PostCSS Configuration"
Cohesion: 1.00
Nodes (1): config

### Community 9 - "Vite Local Bindings"
Cohesion: 1.00
Nodes (1): localBindingConfig

### Community 10 - "Camera Rig Asset"
Cohesion: 1.00
Nodes (1): Camera Detail Image

### Community 11 - "Interview Camera Asset"
Cohesion: 1.00
Nodes (1): Black-and-White Interview Filming Image

### Community 12 - "Brand Logo Asset"
Cohesion: 1.00
Nodes (1): Cinemoon Studios Logo Image

### Community 14 - "Favicon Brand Mark"
Cohesion: 1.00
Nodes (1): Cinemoon Favicon

### Community 15 - "Globe Icon Asset"
Cohesion: 1.00
Nodes (1): Globe SVG Icon

### Community 16 - "Hero Interview Asset"
Cohesion: 1.00
Nodes (1): Hero Production Image

### Community 18 - "Next Documentation Reference"
Cohesion: 1.00
Nodes (1): Installed Next.js Documentation

### Community 19 - "Social Preview Asset"
Cohesion: 1.00
Nodes (1): Cinemoon Studios Social Card

### Community 20 - "Production Crew Asset"
Cohesion: 1.00
Nodes (1): Production Team Image

### Community 21 - "Document Icon Asset"
Cohesion: 1.00
Nodes (1): File SVG Asset

### Community 23 - "Window Icon Asset"
Cohesion: 1.00
Nodes (1): Window SVG Asset

## Knowledge Gaps
- **28 isolated node(s):** `display`, `sans`, `services`, `capabilities`, `storyActs` (+23 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Rendered HTML Tests`** (2 nodes): `previewRoot`, `templateRoot`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `ESLint Configuration`** (1 nodes): `eslintConfig`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next Configuration`** (1 nodes): `nextConfig`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Configuration`** (1 nodes): `config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Local Bindings`** (1 nodes): `localBindingConfig`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Camera Rig Asset`** (1 nodes): `Camera Detail Image`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Interview Camera Asset`** (1 nodes): `Black-and-White Interview Filming Image`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Brand Logo Asset`** (1 nodes): `Cinemoon Studios Logo Image`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Favicon Brand Mark`** (1 nodes): `Cinemoon Favicon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Globe Icon Asset`** (1 nodes): `Globe SVG Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hero Interview Asset`** (1 nodes): `Hero Production Image`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next Documentation Reference`** (1 nodes): `Installed Next.js Documentation`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Social Preview Asset`** (1 nodes): `Cinemoon Studios Social Card`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Production Crew Asset`** (1 nodes): `Production Team Image`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Document Icon Asset`** (1 nodes): `File SVG Asset`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Window Icon Asset`** (1 nodes): `Window SVG Asset`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `display`, `sans`, `services` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._