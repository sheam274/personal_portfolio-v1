# Portfolio Development Plan

Build a premium, animated personal portfolio for Md. Sheam Nasemur Rahman based on the provided master prompt.

## Design & Theme
- **Theme**: Dark, premium, glassmorphism (`#0a0a0f` / `#0f172a`).
- **Accent**: Burnt-orange to amber gradient (`#f97316` → `#fb923c`).
- **Typography**: Space Grotesk (headings), Inter (body).
- **Motion**: Framer Motion for scroll/hover, React Three Fiber for project card tilt.

## Architecture
- **Data-Driven**: All content in `src/data/`.
- **Componentized**: Clean `src/routes/index.tsx` (acting as `App.tsx`) composing sections.
- **File Structure**:
  - `src/data/*.ts`: Typed data files.
  - `src/components/layout/`: Navbar, Footer.
  - `src/components/sections/`: Hero, About, Skills, etc.
  - `src/components/ui/`: ProjectCard, SkillChip, etc.

## Key Components
- **Navbar**: Glass, sticky, smooth scroll, resume download.
- **Hero**: Animated background, typewriter effect, CTAs.
- **ProjectCard**: 3D tilt, image reveal on hover, glass panels.
- **Experience/Education**: Vertical timelines.

## Content
- **Name**: Md. Sheam Nasemur Rahman
- **Title**: Web Developer
- **Socials**: GitHub, LinkedIn, Email.
- **Projects**: TalentBD, CGPBL, Bike Configurator, Endless-Runner.

## Technical Tasks
1. Install dependencies: `framer-motion`, `lucide-react`, `@react-three/fiber`, `@react-three/drei`, `three`, `clsx`, `tailwind-merge`.
2. Setup data layer in `src/data/`.
3. Create UI components and layout.
4. Implement sections with Framer Motion animations.
5. Update `src/routes/index.tsx` to compose the full page.
6. Verify responsiveness and dark mode.
